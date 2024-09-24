function openCarrousel(){
    var carrousel = document.querySelector(".carrousel");
    carrousel.style.display = "block";
    var fondo = document.querySelector(".fondo-carrousel");
    fondo.style.display = "block";
}

function closeCarrousel(){
    var carrousel = document.querySelector(".carrousel");
    carrousel.style.display = "none";
    var fondo = document.querySelector(".fondo-carrousel");
    fondo.style.display = "none";
}

function moveSlide(n){
    showSlide(slideIndex += n);
}

function currentImg(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("carrousel-slide");
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display="block";
}