var menuOpen = false;
var menuLines = document.getElementsByClassName("menu-btn-lines");
var menuC = document.querySelector(".menu");
var menuItem = document.getElementsByClassName("menu-item");
function toggleMenu(){
    if( menuOpen ){
        menuOpen = false;
        
        menuLines[0].style.opacity = "1";
        menuLines[1].style.transform = "rotate(0deg)";
        menuLines[2].style.transform = "rotate(0deg)";

       
            menuItem[3].style.opacity = "0";
            setTimeout(() => {
                menuItem[2].style.opacity = "0";
                setTimeout(() => {
                    menuItem[1].style.opacity = "0";
                    setTimeout(() => {
                        menuItem[0].style.opacity = "0";
                        setTimeout(() => {
                            menuC.style.opacity = "0";
                            setTimeout(() => {
                                menuC.style.display = "none";
                            }, 1000);
                        }, 400);
                    }, 200);
                }, 200);
            }, 200);
    }else{
        menuOpen = true;

        menuLines[0].style.opacity = "0";
        menuLines[1].style.transform = "rotate(-45deg) translateY(100%)";
        menuLines[2].style.transform = "rotate(45deg) translateY(-10%)";


        menuC.style.display = "flex";
        setTimeout(() => {
            menuC.style.opacity = "1";
            setTimeout(() => {
                menuItem[0].style.opacity = "1";
                setTimeout(() => {
                    menuItem[1].style.opacity = "1";
                    setTimeout(() => {
                        menuItem[2].style.opacity = "1";
                        setTimeout(() => {
                            menuItem[3].style.opacity = "1";
                        }, 200);
                    }, 200);
                }, 200);        
            }, 800);
        }, 1);
    
        

    }
}

