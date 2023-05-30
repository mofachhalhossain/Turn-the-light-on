
document.getElementById("btn1").onclick = function() {
    document.querySelector("#img2").style = "z-index:1";
    document.body.style = "background-color: #000000";
}

document.getElementById("btn2").onclick = function() {
    document.querySelector("#img2").style = "z-index:-1";
    document.body.style = "background-color: #ffffff";
}
