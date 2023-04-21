chrome.contextMenus.create({
  id: "openai-chat",
  title: "Generate response with OpenAI",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "openai-chat") {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "YOUR API KEY",
        "X-RapidAPI-Host": "openai80.p.rapidapi.com",
      },
      body: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${info.selectionText}"}]}`,
    };

fetch("https://openai80.p.rapidapi.com/chat/completions", options)
  .then((response) => response.json())
  .then((response) => {
    const choice = response.choices[0];
    if (choice) {
      const content = choice.message.content;
      console.log("Received response from OpenAI: ", response);
      chrome.tabs.sendMessage(tab.id, { content });
      console.log("Sent message to content.js");
    } else {
      console.error("No response from OpenAI");
    }
  })
  .catch((err) => console.error(err));
  }
});
