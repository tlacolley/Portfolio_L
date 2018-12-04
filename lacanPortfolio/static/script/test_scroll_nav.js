$(document).ready(function(){

// Variables ---------------
var btnNav = $("#btnNav");
var navBar = $("#navbar");
var sectionCont = $("#mainSection")
var listNav = $("#listNav");
var titleNav = $("#titleNav");
var iconlist = $(".nav-link-icon");
var labelList = $(".nav-link-label");
var main = $("#main");

// Functions --------------
    function changeMainRight(){
      main.animate({marginRight:"5%"},1000)
      main.toggleClass("mainSection");
      main.toggleClass("mainSectionLeft");
    }
    function addClassUl(){
      listNav.addClass("ulLeft");
      labelList.hide();
      iconlist.show();
      // Display Icon and title ----
      listNav.animate({opacity:1},500);
      titleNav.removeClass("titleblur");
    };
    
    var isFixed=false;
    $(document).scroll(function () {
        // var scroll = $(this).scrollTop();
        var topDist = $("header").height()-160;
        // Set fixed
          console.log("Headew :",topDist);
         console.log($(window).scrollTop());
        if( $(window).scrollTop()>=topDist && !isFixed ){
          isFixed=true;
          // navBar.addClass("navbarTopFixed");
          // navBar.animate({"position":"fixed","top":"0","width":"100%"},500,animTopFixed());
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
              titleNav.addClass("titleblur");
              listNav.animate({opacity:0},500);
              //  Change list by Icons ------
              setTimeout(addClassUl,1500)
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
            // function Blur Title Nav -----
            setTimeout(blurTitle,400);
            function blurTitle(){
              titleNav.addClass("titleblur");
            }
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
                iconlist.hide();
                listNav.animate({opacity:1},500);
                titleNav.removeClass("titleblur");
              }
            }
          }
        }
    });






});
