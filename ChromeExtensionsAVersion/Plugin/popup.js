/**
 * Created by Andreas on 01-04-2017.
 */
/**
 * When facebook have loaded, it starts running the main function.
 */
main();
function main() {
    setInterval(function(){
            try {
                if (!isHidden(postButton())) {
                    maybeAddMyButton();
                }
            } catch(e){console.log("failed")}
    }, 1000);
}

function maybeAddMyButton() {
    var btn = document.getElementById("myButtonID");
    if(btn == null){
        btn = document.createElement("BUTTON");
        btn.setAttribute('id', 'myButtonID');
        btn.className = "_1mf7 _4jy0 _4jy3 _4jy1 _51sy selected _42ft";
        btn.setAttribute("style", "height:30px;background:url(https://raw.githubusercontent.com/zfegd/Save-My-Face/master/ChromeExtensionsAVersion/Plugin/icon128.png);background-size:100%");
        btn.onclick = doMyButton;
        getContainer().insertBefore(btn,postButton());
    }
}

function getContainer() {
    return document.getElementsByClassName("_2ph-")[0];
}

function postButton() {
    return document.getElementsByClassName("_1mf7")[0];
}

function isHidden(el) {
    return (el.offsetParent === null)
}

function doMyButton() {
 var priceEls = document.body.getElementsByClassName("_1mf _1mj");
 var price = "";
 for (var i = 0; i < priceEls.length; i++) {
     var price = price + " " +priceEls[i].innerText;
 }
 console.log("before SendToCheck")
 sendToCheck(price);
}

/**
 * The error message.
 */
function errorMessage(errorMessageString) {
   // if (!isHidden(postButton())) {
        var eMes = document.getElementById('errorMessageID');
        if (eMes == null) {
            var eMes = document.createElement("p");
            eMes.setAttribute('id', 'errorMessageID');
            eMes.setAttribute('style', 'color:red');
            eMes.innerHTML = errorMessageString;
            document.getElementById("myButtonID").parentNode.parentNode.parentNode.childNodes[0].appendChild(eMes);

        }
        else {
            eMes.innerHTML = errorMessageString;
         }
    // }
    // else{
    //     window.alert("Responds: "+ errorMessageString);
    // }
}

/**
 * When the Chrome Extension in the corner of the browser gets clicked,
 * this will send you to the documentation of the extensin(currently sends you to www.google.com).
 **/
function click(e) {
    chrome.tabs.create({
        url: "www.twiter.com"
    });
    window.close();
}
document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});

/**
 * sends a get request to the server and returns a responds to the client.
 */
function sendToCheck(info,tab) {
    console.log("hello"+info);

    $.get( "https://savemyfacedeveloper.herokuapp.com/?payload="+encodeURIComponent(info.trim()), function( data ) {
        console.log("hello"+info);

        console.log(data);
        errorMessage(data);
    });
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function sendToCheckSelection(info,tab) {

    try {
        var a = httpGet("https://savemyfacedeveloper.herokuapp.com/?payload="+encodeURIComponent(info.trim()));
        console.log("hello"+info);
            errorMessage(a);
    }catch(e) {
    }
}

chrome.runtime.onMessage.addListener(function(inputText){
    // console.log("Happy to be here " + JSON.stringify(arguments));
    sendToCheckSelection(inputText);
});
