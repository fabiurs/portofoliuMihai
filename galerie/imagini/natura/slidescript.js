var s = document.querySelector(".slider");
var imagine = document.getElementById("imagine");
var sourceLastPart = ".jpg";
var imgSource = "";
var position = 1;

function deschideSlider(p){
    if(window.innerWidth > 700){
        s.style.display = "block";
        imgSource = "";
        setTimeout(() => {
            s.style.opacity = "1";
            position = p;
            imgSource += position;
            imgSource += sourceLastPart;
            imagine.src = imgSource;
        }, 100);
    }
}

function inchide(){
    s.style.opacity = "0";
    setTimeout(() => {
        s.style.display ="none";
    }, 501);
}

function mutaInainte(){
    imgSource = "";
    if(position > 7){
        position = 1;
    }
    else{
        position++;
    }
    imgSource += position;
    imgSource += sourceLastPart;
    imagine.src = imgSource;
}

function mutaInapoi(){
    imgSource = "";
    if(position < 2){
        position = 8;
    }
    else{
        position--;
    }
    imgSource += position;
    imgSource += sourceLastPart;
    imagine.src = imgSource;
}

document.addEventListener("keydown", function(event) {
    var k = event.which;;
    if (k == 27) {
        inchide();
    }
    else if(k == 39){
        mutaInainte();
    }
    else if(k == 37){
        mutaInapoi();
    }
})