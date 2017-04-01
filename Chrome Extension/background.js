function sendToCheck(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  var str = info.selectionText;
  var json = JSON.stringify(str);
  chrome.tabs.create({  
    url: "popupwindow.html",
  }, function(tab) {
     chrome.windows.create({
        tabId: tab.id,
        type: 'popup',
        focused: true,
        width: 240,
        height: 240,
        top: 320,
        left: 640
    }); 
  });
}

chrome.contextMenus.create({
  title: "#SaveMyFace", 
  contexts:["selection"], 
  onclick: sendToCheck,
});