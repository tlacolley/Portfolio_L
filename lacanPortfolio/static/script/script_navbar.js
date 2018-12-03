$(document).ready(function(){

var $titleNav = $("#titleNav");
var $listNav = $("#listNav");
var $navbar = $("#navbar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();


    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed").animate({
              top:0
            });

        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed").clearQueue().animate({
                top: "-48px"
            }, 0);
        }
    });



// -----------------------JS for fade out Liste ----------
  $navbar.click(function(){
      $listNav.addClass("listFadeOut");
      $(this).addClass("navbar-fixed");
      $titleNav.addClass("eventText");
  });

  




})