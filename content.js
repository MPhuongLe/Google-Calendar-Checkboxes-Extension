// Function to add checkboxes to calendar events
function addCheckboxes() {
    const events = document.querySelectorAll("[role='gridcell'] [jscontroller]");

    events.forEach(event => {
        // Prevent duplicate checkboxes
        if (event.querySelector(".checkbox-added")) return;

        const titleElement = event.querySelector("span");
        if (!titleElement) return;

        const eventTitle = titleElement.innerText.trim();
        if (!eventTitle) return;

        let instanceId;
        const eventUid = event.getAttribute("data-eventid");

        if (eventUid) {
            let startTimeElement = event.querySelector("[aria-hidden='true']");
            let startTimeFormatted = startTimeElement ? startTimeElement.innerText.trim() : "unknown";

            if (eventUid.includes("_R")) {
                instanceId = `${eventUid.split("_R")[0]}_${startTimeFormatted}@google.com`;
            } else {
                instanceId = `${eventUid}_${startTimeFormatted}@google.com`;
            }
        } else {
            instanceId = eventTitle.substring(0, 50);
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("event-checkbox", "checkbox-added");
        checkbox.style.pointerEvents = "auto";

        const titleWrapper = document.createElement("span");
        titleWrapper.classList.add("event-title-wrapper");
        titleWrapper.innerText = eventTitle;

        const eventContainer = event.closest("[role='button']") || event;

        chrome.storage.local.get([instanceId], function (data) {
            let state = data[instanceId] || { step: 0 };

            if (state.step === 1) {
                checkbox.checked = true;
                titleWrapper.style.textDecoration = "none";
                if (eventContainer) eventContainer.style.opacity = "0.5";
            } else if (state.step === 2) {
                checkbox.checked = false;
                titleWrapper.style.textDecoration = "line-through";
                if (eventContainer) eventContainer.style.opacity = "0.2";
            } else {
                checkbox.checked = false;
                titleWrapper.style.textDecoration = "none";
                if (eventContainer) eventContainer.style.opacity = "1";
            }
        });

        checkbox.addEventListener("click", (e) => {
            e.stopPropagation();

            chrome.storage.local.get([instanceId], function (data) {
                let state = data[instanceId] || { step: 0 };

                if (state.step === 0) {
                    state.step = 1;
                    checkbox.checked = true;
                    titleWrapper.style.textDecoration = "none";
                    if (eventContainer) eventContainer.style.opacity = "0.5";
                } else if (state.step === 1) {
                    state.step = 2;
                    checkbox.checked = false;
                    titleWrapper.style.textDecoration = "line-through";
                    if (eventContainer) eventContainer.style.opacity = "0.3";
                } else {
                    state.step = 0;
                    checkbox.checked = false;
                    titleWrapper.style.textDecoration = "none";
                    if (eventContainer) eventContainer.style.opacity = "1";
                }
                chrome.storage.local.set({ [instanceId]: state });
            });
        });

        titleElement.innerHTML = "";
        titleElement.appendChild(checkbox);
        titleElement.appendChild(titleWrapper);
    });
}

// Function to clean up existing checkboxes before re-injecting
function cleanUp() {
    document.querySelectorAll(".checkbox-added").forEach(el => el.remove());
}

// Observe changes in Google Calendar UI
const observer = new MutationObserver(() => {
    setTimeout(addCheckboxes, 0);
});
observer.observe(document.body, { childList: true, subtree: true });

// Handle extension reload/unload to prevent duplicate scripts
const port = chrome.runtime.connect();
port.onDisconnect.addListener(() => {
    cleanUp();
});

// Run initially
addCheckboxes();