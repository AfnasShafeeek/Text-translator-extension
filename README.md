# Text Translator Chrome Extension

This is a simple Chrome extension that lets you translate selected text on a web page into different regional languages like Malayalam, Hindi, Tamil, Kannada, and German.

---

## Features

- Right-click to translate selected text
- Choose your preferred language using the popup
- Translates instantly using Google Translate API

---

## How to Use

1. **Download or clone this project**

2. **Go to Chrome extensions**  
   Open Chrome and go to: `chrome://extensions`

3. **Enable Developer Mode**

4. **Click "Load Unpacked"**  
   Select the folder where this project is saved

5. **Click the Extension Icon**  
   Choose your language (e.g. Hindi) → Click **Save**

6. **Use It**  
   - Go to any website  
   - Select any English text  
   - Right-click → Click **Translate to Selected Language**

You’ll see a popup with the translated result.

---

## Languages Supported

- Malayalam (`ml`)
- Hindi (`hi`)
- Tamil (`ta`)
- Kannada (`kn`)
- German (`de`)

---

## Files in the Project

- `manifest.json` – Extension configuration
- `background.js` – Handles translation when text is selected
- `popup.html` – Language selector popup
- `popup.js` – Saves selected language
- `icon.png` – Small icon for the extension

---

## Note

This is for learning and personal use. It uses the free Google Translate API endpoint.
