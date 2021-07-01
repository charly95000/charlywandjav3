



$(document).ready(function() {
  "use strict";

  var windowHeight = window.innerHeight;
  function scrollingAnimation(){
    var elements = document.querySelectorAll('h2, .cadre,.skills,.view-contact, .sites');
  for(var i = 0; i < elements.length; i++){
    var element = elements[i];
    var ely=element.getBoundingClientRect();
    if (ely.top - (windowHeight *0.98 ) < 0) {
      element.classList.add('animate__fadeInUp');
      element.classList.remove('animate__fadeOutDown');
    }
   else {
        element.classList.remove('animate__fadeInUp');
        element.classList.add('animate__fadeOutDown');
  }
  };

  
  }

  $("#btn-mode").click(function () {
    if(!$("body").hasClass('light')){
      $("body").addClass('light');
    $(this).find('img').attr("src","./images/on.svg");
    }else{
      $("body").removeClass('light');
    $(this).find('img').attr("src","./images/off.svg");
    }
    
    
});





$(".img-site").click(function(){
  $(this).siblings(".info-site").css("height","100%");  
});

$(".info-site").click(function(){
  $(this).css("height","0");  
});



scrollingAnimation();
window.addEventListener('scroll', function () {
  
  scrollingAnimation();

  
  
  
});





});
