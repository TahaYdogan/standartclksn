
const navbar1 = document.getElementById("navbar-1");
const mobileIcons = document.getElementById("mobileIcons");
const navbar2 = document.getElementById("navbar-2");
const footer = document.getElementById("footer");


addEventListener("scroll", onscroll);
onscroll();
function onscroll() {
    console.log(scrollY);

    if (window.innerWidth < 576){
        navbar2.style.position = "0px,-50px";
        navbar1.style.opacity = "0";
        navbar2.style.marginTop = "0px";
        navbar2.style.padding = "10px";
        navbar2.style.height = "100px";
        footer.className = "footer-distributed";
    }else {
        footer.className = "footer-distributed d-flex";
        navbar1.style.display = "inline";
        if (scrollY > 50){
            navbar1.style.opacity = "0";
            navbar2.style.transform = "translate(0px,-15px)";
            navbar2.style.borderBottom = "2px solid #d74042";




        }
        else{
            navbar1.style.opacity = "1";
            navbar2.style.transform = "translate(0px,15px)";
            navbar2.style.borderBottom = "";



        }
    }
    console.log($(location).attr('href'));



};




