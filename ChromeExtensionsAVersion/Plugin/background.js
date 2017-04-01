function sendToCheckSelection(info,tab) {
    console.log("Word " + info + " was clicked.");
    $.get( "http://127.0.0.1:3000/?foo="+info.selectionText, function( data ) {
        console.log(data);
        errorMessage(data);
    });
}

chrome.contextMenus.create({
    title: "#SaveMyFace",
    contexts:["selection"],
    onclick: sendToCheckSelection,
});