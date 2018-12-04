$(document).ready(function(){

var btnNav = $("#btnNav");
var navBar = $("#navbar");
var sectionCont = $("#mainSection")
var listNav = $("#listNav");
var titleNav = $("#titleNav");

btnNav.click(function(){
  if(navBar.hasClass("navbarBase")){
    navBar.removeClass("navbarBase");
    navBar.toggleClass("navbarLeft");
    titleNav.addClass("titleblur");
    listNav.animate({opacity:0},500);
    setTimeout(addClassUl,1500)
    function addClassUl(){
      listNav.addClass("ulLeft");
      listNav.animate({opacity:1},500);
      titleNav.removeClass("titleblur");
    };

  }
  else if(navBar.hasClass("navbarLeft") ){
    listNav.animate({opacity:0},500);
    setTimeout(blurTitle,400);
    function blurTitle(){
      titleNav.addClass("titleblur");
    }
    setTimeout(changeClassNavbar,500);
    function changeClassNavbar(){
      navBar.toggleClass("navbarTop").delay(500);
      navBar.removeClass("navbarLeft");
      listNav.removeClass("ulLeft");
      listNav.addClass("ulTop");
      setTimeout(displayList,1500);
      function displayList(){
        listNav.animate({opacity:1},500);
        titleNav.removeClass("titleblur");

      }
    }
    }
  else{
    navBar.removeClass("navbarTop");
    navBar.toggleClass("navbarLeft");
    titleNav.addClass("titleblur");

    listNav.animate({opacity:0},500);
    setTimeout(addClassUl,1500)
    function addClassUl(){
      listNav.removeClass("ulTop");
      listNav.addClass("ulLeft");
      listNav.animate({opacity:1},500);
      titleNav.removeClass("titleblur");

    };

  }





});



















});