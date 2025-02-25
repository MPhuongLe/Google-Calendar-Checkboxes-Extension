# 🎉 Google Calendar Checkboxes Extension 🗓️✅

This **Chrome extension** adds checkboxes to **Google Calendar** events, making it easy to track your task completion with just a click! No more forgetting what’s done and what’s not.

## ✨ Features
- **Checkbox for every event** in Google Calendar.
- **Saves state** locally using `chrome.storage.local`, so your selections persist.
- **Three-step cycle** for tracking event progress:
  - **⬜ Unchecked** → Default state.
  - **✅ Checked** → Event completed (opacity reduces slightly).
  - **❌ Crossed-out** → Event cancelled (opacity reduces further).

## 🔧 Installation
1. **Clone** or **download** this repository.
2. Open **Chrome** and go to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle at the top right).
4. Click **Load Unpacked** and select the project folder.
5. Open **Google Calendar** and enjoy the checkboxes!

## 🎯 How to Use
1. Click a **checkbox** to mark an event as **completed** (opacity reduces).
2. Click again to mark it as **cancelled** (crossed-out, more opacity reduction).
3. Click once more to **reset** it back to the default state.

## 🐞 Known Issues
- **Initial checkboxes may take a moment to appear** (minor delay due to page load time).
- **Checkbox states do not sync across devices** (local storage only).

## 📜 License
This project is **open-source**. Feel free to improve, tweak, and make it your own! 🚀

---
👨‍💻 **Author:** Minh Phuong Le (@hcmus)  
📧 **Email:** mphuongle30@gmail.com  
💡 Have feedback? Reach out via GitHub or email!
