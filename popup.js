const camera = document.getElementById("camera");
const microphoneEl = document.getElementById("microphone");
const startBtn = document.getElementById("start");
const monitorEl = document.getElementById("monitorEl");
const tabEl = document.getElementById("tab");
let isRecording = false;
let cameraIsAllowed = true;
let microphoneIsAllowed = true;
// Toggling camera and microphone

camera.onclick = (e) => {
  if (e.target.dataset.allow === "false") {
    cameraIsAllowed = true;
    e.target.dataset.allow = "true";
  } else {
    cameraIsAllowed = false;
    e.target.dataset.allow = "false";
  }
};
microphoneEl.onclick = (e) => {
  if (e.target.dataset.allow === "false") {
    microphoneIsAllowed = true;
    e.target.dataset.allow = "true";
  } else {
    microphoneIsAllowed = false;
    e.target.dataset.allow = "false";
  }
};
let monitorActive;
async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
// Choosing screen

let isTab = true;

tabEl.addEventListener("click", (e) => {
  tabEl.setAttribute("data-selected", "true");
  monitorEl.setAttribute("data-selected", "false");
  isTab = true;
});
monitorEl.addEventListener("click", (e) => {
  monitorEl.setAttribute("data-selected", "true");
  tabEl.setAttribute("data-selected", "false");
  isTab = false;
});

startBtn.onclick = async (e) => {
  isRecording = true;
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  let mediaId;
  if (isTab) {
    mediaId = await chrome.tabCapture.getMediaStreamId({
      targetTabId: tab.id,
      consumerTabId: tab.id,
    });
  }
  console.log(mediaId);
  chrome.runtime.sendMessage({
    type: "start",
    isTab,
    cameraIsAllowed,
    microphoneIsAllowed,
    mediaId: mediaId || null,
  });
  // let currentTab;
  // await chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //   currentTab = tabs[0];
  //   const tab = tabs[0];
  //   const tabId = tab.id;
  //   chrome.desktopCapture.chooseDesktopMedia(
  //     ["tab", "audio"],
  //     tab,
  //     (streamId) => {
  //       console.log(streamId);
  //       chrome.scripting.executeScript(
  //         {
  //           target: { tabId },
  //           file: ["content.js"],
  //         },
  //         () => {
  //           chrome.tabs.sendMessage(tabId, "Hello");
  //         }
  //       );
  //     }
  //   );
  // });
};
