function sendToCheck(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
   
   chrome.tabs.create({  
        url: "http://www.google.com/search?q=" + info.selectionText,
    });           
  
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