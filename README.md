# Smart-Chrome-Extension
A user-friendly Chrome extension to track your internship applications. Save entries manually, update application status, delete entries, and export your data to CSV. Built with HTML, CSS, and JavaScript using Chrome’s local storage. Perfect for students and job seekers who want a simple, organized way to manage their applications.

# Application Tracker Chrome Extension

A lightweight Chrome extension to manually track your internship applications, with the ability to save entries, edit status, and export data to CSV.

## Features
- Add internship applications manually with fields: Company, Role, Date, Status, Notes.
- Edit existing entries (e.g., update status from "Applied" to "Interview").
- Delete entries.
- Export all entries to a CSV file for backup or analysis.
- Responsive, modern UI with Google Fonts, rounded buttons, and card-style entries.
- Local storage ensures data persists in your browser.

## Installation (Local)
1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the project folder.
5. Pin the extension to the toolbar and start tracking your applications!

## Usage
1. Click the extension icon to open the popup.
2. Fill in the application form and click **Save**.
3. View your saved applications in the list below the form.
4. Edit or delete entries as needed.
5. Click **Export to CSV** to download your application data.

## File Structure
Application-tracker/
│── manifest.json # Chrome extension manifest
│── popup.html # Popup HTML layout
│── popup.js # JavaScript logic (save, delete, edit, export)
│── styles.css # CSS styling
│── icon.png # Extension icon

## Technologies
- HTML, CSS, JavaScript
- Chrome Extension APIs (`chrome.storage.local`)
- Google Fonts

## Notes
- Data is stored locally in Chrome and will persist as long as the extension is installed.
- Export to CSV is recommended for backup.
- The extension does not sync across devices (local storage only).

## Future Enhancements
- Import from CSV.
- Sync across devices using Firebase.
- More advanced filtering and sorting of applications.

---

