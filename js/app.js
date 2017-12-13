
$(document).ready(function(){
    var clicked = false;
  $(".ribbon-ciseaux").hover(function(){
      if($(this).hasClass("zoomed")){
      $(this).removeClass("zoomed");
      }else{
      $(this).addClass("zoomed");
      }
    
  });
  $(".ribbon-ciseaux").click(function(){
      if($(this).hasClass("zoomed")){
        $(this).removeClass("zoomed");
      }else{
          $(this).addClass("zoomed");
        
      }
  });
});



