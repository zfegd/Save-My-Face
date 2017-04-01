/**
 * cheks the window and sends a message to the popup.js script, where we have a listener.
 */
function doStuff(info) {
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, info.selectionText, function(){
        })
    });
}

/**
 * On right click, shows a button in the menu.
 * Calls the doStuff function with what the curser have selected as parrameter.
 */
chrome.contextMenus.create({
    title: "#SaveMyFace",
    contexts:["selection"],
    onclick: doStuff
});