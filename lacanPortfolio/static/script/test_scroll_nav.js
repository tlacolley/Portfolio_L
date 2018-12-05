$(document).ready(function(){

// Variables ---------------
var btnNav = $("#btnNav");
var navBar = $("#navbar");
var sectionCont = $("#mainSection")
var listNav = $("#listNav");
var titleNav = $("#titleNav");
var iconList = $(".nav-link-icon");
var labelList = $(".nav-link-label");
var main = $("#main");


function displayEachIcon(){
  var time = 0;
  iconList.each(function(){
    time += 250;
    var icon = $(this);
    setTimeout(function(){
      icon.addClass("iconlistAnim");
      icon.show()
    },time);
  });
}

btnNav.click(function(){

  displayEachIcon();

})

// Functions --------------
    function changeMainRight(){
      main.animate({marginRight:"5%"},1000)
      main.toggleClass("mainSection");
      main.toggleClass("mainSectionLeft");
    }
    function addClassUl(){
      listNav.addClass("ulLeft");
      labelList.hide();
      displayEachIcon();
      // iconList.show();
      // displayEachIcon()
      // Display Icon and title ----

      // titleNav.removeClass("opacityOff");
      // listNav.removeClass("opacityOff");
      // titleNav.addClass("opacityOn");
      // listNav.addClass("opacityOn");
      listNav.animate({opacity:1},700);
      titleNav.animate({opacity:1},700);
    };
    
    var isFixed=false;
    $(document).scroll(function () {
        var topDist = $("header").height()-160;
        // Set fixed
        if( $(window).scrollTop()>=topDist && !isFixed ){
          isFixed=true;

          setTimeout(animTopFixed,500);
          function animTopFixed(){
            if(navBar.hasClass("navbarBase")||navBar.hasClass("navbarTop")){
              // Change navbar class --------
              navBar.removeClass("navbarBase");
              navBar.removeClass("navbarTop");
              // Add class Left ------------
              navBar.toggleClass("navbarLeft");
              // Animate for Main container-- 
              setTimeout(changeMainRight,1000);
              // Animation hide list --------
              setTimeout(animHideList,750);
              function animHideList(){
                // titleNav.removeClass("opacityOn").addClass("opacityOff");
                // listNav.removeClass("opacityOn").addClass("opacityOff");

                titleNav.animate({opacity:0},400);
                listNav.animate({opacity:0},400);
              };
              //  Change list by Icons ------
              setTimeout(addClassUl,1900)
              listNav.removeClass("ulTop");
              // navBar.toggleClass("navbarTopFixed");
              // navBar.css({"position":"fixed","top":"0","width":"10%"},500);

           } 
        }
      }


        // Set static
        if( $(window).scrollTop()<topDist && isFixed ){
          isFixed=false;

          if(navBar.hasClass("navbarLeft") ){
            // Hide list Icon --------------
            listNav.animate({opacity:0},500);
            titleNav.animate({opacity:0},500);
                // titleNav.removeClass("opacityOn").addClass("opacityOff");
                // listNav.removeClass("opacityOn").addClass("opacityOff");
           
            // Change Nav position ---------
            setTimeout(changeClassNavbar,500);
            function changeClassNavbar(){
              navBar.toggleClass("navbarTop");

              navBar.removeClass("navbarLeft");
              // Change position main-------
              setTimeout(changeMainCenter,1000);
              function changeMainCenter(){
                main.toggleClass("mainSection");
                main.toggleClass("mainSectionLeft");
                main.animate({marginRight:"10%"},1000);
              }
              // Change Icon by Liste ------
              listNav.removeClass("ulLeft");
              listNav.addClass("ulTop");

              // Function display List ----
              setTimeout(displayList,1500);
              function displayList(){
                labelList.show();
                iconList.hide();
                // titleNav.removeClass("opacityOff").addClass("opacityOn");
                // listNav.removeClass("opacityOff").addClass("opacityOn");
                listNav.animate({opacity:1},700);
                titleNav.animate({opacity:1},700);
              }
            }
          }
        }
    });






});
