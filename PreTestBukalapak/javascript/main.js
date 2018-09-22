

var spec = true;
function specification(){
    if(spec == true) {
        document.getElementById("specification-and-color").style.display = "block";
        document.getElementById("features").style.display = "none";
        spec = true;
    }
}

var feat = true;
function feature(){
    if(feat == true) {
        document.getElementById("features").style.display = "block";
        document.getElementById("specification-and-color").style.display = "none";
        feat = true;
    }
}

function ToggleClass(el) {
    var child = document.getElementById("active-links").children;
    for(var i = 0; i < child.length; i++){
        child[i].className = "off";
    }
    el.className = "active";
}

var modal = document.getElementById("modal-wrapper");
window.onclick = function(event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}

var showIMG1 = true;
function show1 (){
    if (showIMG1 == true) {
        document.getElementById("img1").style.display = "block";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img3").style.display = "none";
    }
}

var showIMG2 = true;
function show2 (){
    if (showIMG1 == true) {
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "block";
        document.getElementById("img3").style.display = "none";
    }
}

var showIMG13 = true;
function show3 (){
    if (showIMG1 == true) {
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img3").style.display = "block";
    }
}