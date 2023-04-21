chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Received message from background.js: ", request);
  const textbox = document.createElement("textarea");
  textbox.style.position = "fixed";
  textbox.style.top = "50%";
  textbox.style.left = "50%";
  textbox.style.transform = "translate(-50%, -50%)";
  textbox.style.zIndex = 9999;
  textbox.style.width = "500px";
  textbox.style.height = "300px";
  textbox.value = request.content;
  alert(request.content);
  document.body.appendChild(textbox);
  textbox.select();
  document.execCommand("copy");
  document.body.removeChild(textbox);
  console.log("Response has been copied to the clipboard!");
});
