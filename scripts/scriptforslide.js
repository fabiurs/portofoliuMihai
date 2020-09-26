var imagine = document.getElementById("imgS");
var container = document.getElementById("c-imgS");
var path = "imagini/work/";
var nr = 1;
var imgSource = "";
var b = document.getElementsByClassName("bar")[0];


function pornesteSlide(){
    setInterval(() => {
        container.style.opacity = "0";
        nr++;
        if(nr == 7){
            nr=1;
        }
        setTimeout(() => {
            imgSource = "";
            imgSource = path+nr+".jpg";
            imagine.src = imgSource;
            setTimeout(() => {
                container.style.opacity = "1";
            }, 200);
        }, 1000);
    }, 5000);
}