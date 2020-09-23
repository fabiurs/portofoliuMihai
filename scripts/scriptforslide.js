var imagine = document.getElementById("imgS");
var path = "imagini/work/";
var nr = 1;
var imgSource = "";
var b = document.getElementsByClassName("bar")[0];


function pornesteSlide(){
    setInterval(() => {
        imagine.style.opacity = "0";
        nr++;
        if(nr == 7){
            nr=1;
        }
        setTimeout(() => {
            imgSource = "";
            imgSource = path+nr+".jpg";
            imagine.src = imgSource;
            setTimeout(() => {
                imagine.style.opacity = "1";
            }, 10);
        }, 1000);
    }, 5000);
}