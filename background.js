chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translateText",
    title: "Translate to Selected Language",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const selectedText = info.selectionText;

  chrome.storage.sync.get("language", (data) => {
    const targetLang = data.language || "ml"; // default to Malayalam

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(selectedText)}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const translated = data[0][0][0];
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (text) => alert("Translated: " + text),
          args: [translated]
        });
      });
  });
});
