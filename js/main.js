let desktopMenu = document.querySelector('.desktop-menu');
let menuLine = document.querySelector('#mobile-menu');
var back = $("#back-to-top");
var displayWid = window.screen.width;

back.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
  back.animate({bottom:-90},'medium');
});
window.addEventListener('scroll', ()=>{
    if(window.scrollY>=300){
        back.animate({bottom: 50},'medium');
    }
})

/*
$(document).ready(function(){
    setTimeout(function(){
        if(displayWid<1294){
            desktopMenu.style.display = "none";
            menuLine.style.display = "block"
        }else{
            desktopMenu.style.display = "flex";
            menuLine.style.display = "none"
        }
    })    
}, 2000); */
