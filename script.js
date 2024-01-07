const slider = document.querySelector(".slider-line");

let offset = 0;

const buttonNext = document.querySelector(".next").addEventListener("click", function(){
    offset+=250;
    if(offset>250*4){
        offset=0
    }
    slider.style.right = offset+"px"
})

const buttonPrev = document.querySelector(".prev").addEventListener("click", function(){
    offset-=250;
    if(offset<0){
        offset=250*4
    }
    slider.style.right = offset+"px"
})