/**
 * Created by Andreas on 01-04-2017.
 */
main();

chrome.contextMenus.create({
    title: "#SaveMyFace",
    contexts:["selection"],
    onclick: main
});

function main() {

    setInterval(function(){
            try {
                if (!isHidden(postButton())) {
                    console.log(maybeAddMyButton());
                }
            } catch(e){console.log("failed")}
    }, 1000);
}

function maybeAddMyButton() {
    var btn = document.getElementById("myButtonID");
    if(btn == null){
        console.log("inMyButton");
        btn = document.createElement("BUTTON");
        btn.setAttribute('id', 'myButtonID');
        btn.onclick = doMyButton;
        getContainer().insertBefore(btn,postButton());
    }
}

function getContainer() {
    console.log("ingetContainer");
    return document.getElementsByClassName("_2ph-")[0];
}

function postButton() {
    console.log("inpostButton");
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
    alert(price);
}

/**
 * When the Chrome Extension in the corner of the browser gets clicked,
 * this will send you to the documentation of the extensin(currently sends you to www.google.com).
 **/
function click(e) {
    chrome.tabs.create({
        url: "http://www.google.com/"
    });
    window.close();
}
document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});
