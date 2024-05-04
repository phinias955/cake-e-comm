let slides = document.querySelectorAll('.slide');
let currentslide = 0;
var sliderIntv= setInterval(nextSlide,2000);
function nextSlide(){
    slides[currentslide].classList='slide';
    currentslide=(currentslide+1)%slides.length;
    slides[currentslide].className='slide active';
}
// POPUP FORM 
let popup= document.getElementById("form");
console.log(popup)
function opensb(){
    popup.classList.add("open");
    console.log(popup)
}
function remc(){
    popup.classList.remove("open");
    console.log(popup)
}
// IMAGE SLIDE IN ORDER PAGE
var mainimg=document.getElementById("mainimg");
var smallimg= document.getElementsByClassName("small-img");
smallimg[0].onclick=function(){
    mainimg.src=smallimg[0].src;
    
}
smallimg[1].onclick=function(){
    mainimg.src=smallimg[1].src;
    
}
smallimg[2].onclick=function(){
    mainimg.src=smallimg[2].src;
    
}
smallimg[3].onclick=function(){
    mainimg.src=smallimg[3].src;
    
}
smallimg[4].onclick=function(){
    mainimg.src=smallimg[4].src;
    
}
