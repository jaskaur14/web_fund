console.log("page loaded...");

var username = document.querySelector("#username");
var requestSpan = document.querySelector("#requests");
var connectionsSpan = document.querySelector("#connections")

function edit() {
    username.innerText = "Jasleen Kaur";
}

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionsSpan.innerText++;
}

function remove(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}