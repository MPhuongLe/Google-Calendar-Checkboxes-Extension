# Google Calendar Checkboxes Extension

This Chrome extension adds checkboxes to Google Calendar events, allowing users to track their task completion with a simple click.

## Features
- Adds a checkbox next to each event in Google Calendar.
- Saves checkbox state using `chrome.storage.local`.
- Three-step cycle: 
  1. **Unchecked** (default state).
  2. **Checked** (event completed, opacity reduced).
  3. **Crossed-out** (event cancelled, opacity further reduced).

## Installation
1. Clone or download this repository.
2. Open **Chrome** and go to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle at the top right).
4. Click **Load Unpacked** and select the project folder.
5. Open Google Calendar and see the checkboxes in action!

## Usage
1. Click a checkbox to mark an event as completed (opacity reduces).
2. Click again to mark it as cancelled (crossed-out title, further opacity reduction).
3. Click once more to reset it to the default state.

## Known Issues
- Initial checkbox loading may have a slight delay.
- Extension does not sync checkbox states across different devices.

## License
This project is open-source. Feel free to modify and improve it!

---

**Author:** Minh Phuong Le @hcmus
**Email:** mphuongle30@gmail.com

For questions or feedback, reach out via GitHub or email.