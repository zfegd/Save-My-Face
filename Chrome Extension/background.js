function sendToCheck(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  var str = info.selectionText;
  
  function sendData($scope) {
        $http({
            url: "http://www.trumptrumpandtriumph2020.com",
            method: "POST",
            data: str
        })
        .success(function(response) {
            var result = JSON.parse(response.data);
            chrome.tabs.create({  
                url: "http://www.facebook.com",
            });
        })
        .error(function(response) { 
            var failed = "Error! Please try again!";
            chrome.tabs.create({  
                url: "http://www.google.com",
            });
        })
    };
    
    sendData($scope);
  
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