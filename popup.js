document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("langSelect");
  const button = document.getElementById("saveBtn");

  // Load saved language
  chrome.storage.sync.get("language", (result) => {
    console.log("Loaded language:", result.language);
    if (result.language) {
      select.value = result.language;
    }
  });

  // Save selected language
  button.addEventListener("click", () => {
    const selected = select.value;
    chrome.storage.sync.set({ language: selected }, () => {
      alert("Saved: " + selected);
    });
  });
});
