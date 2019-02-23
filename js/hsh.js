$(document).ready(function () {
    
    // vanilla js
    // var hero = document.getElementById("hero-container");
    // var hideBtn = document.getElementById("hide-hero");

    // hideBtn.addEventListener("click", function(e){
    //     e.preventDefault();

    //     hero.style.display = "none";


    // });
 
    // jQuery

    // $("#hide-hero").click(function(e){
    //     // $("#hero-container").hide();
    //     $("#hero-container").css("display", "none");
    // })

    //hover section2 homepage//

    $(".img-hover").hover(function(e){
        $(this).find(".pg1-text").css("background", "#888");
        $(this).find(".pg1-text").css("transition", ".5s");
        $(this).find(".pg1-img").css("-moz-transform", "scale(1.1)");
        $(this).find(".pg1-img").css("-webkit-transform", "scale(1.1)");
        $(this).find(".pg1-img").css("transform", "scale(1.1)")
        $(this).find(".pg1-img").css("transition", ".5s");
    },
    function(e){
        $(this).find(".pg1-text").css("background", "none");
        $(this).find(".pg1-text").css("opactiy", ".8");
        $(this).find(".pg1-img").css("-moz-transform", "scale(1)");
        $(this).find(".pg1-img").css("-webkit-transform", "scale(1)");
        $(this).find(".pg1-img").css("transform", "scale(1)")
    })

    //hover listings homepage//

    $(".pg3-hover").hover(function(e){
        $(this).find(".pg3-text").css("visibility", "visible");
        $(this).find(".pg3-text").css("transition", ".1s");
        $(this).find(".pg3-img").css("-moz-transform", "scale(1.1)");
        $(this).find(".pg3-img").css("-webkit-transform", "scale(1.1)");
        $(this).find(".pg3-img").css("transform", "scale(1.1)")
        $(this).find(".pg3-img").css("transition", ".5s");
    },
    function(e){
        $(this).find(".pg3-text").css("visibility", "hidden");
        $(this).find(".pg3-text").css("transition", ".1s");
        $(this).find(".pg3-img").css("-moz-transform", "scale(1)");
        $(this).find(".pg3-img").css("-webkit-transform", "scale(1)");
        $(this).find(".pg3-img").css("transform", "scale(1)")
        $(this).find(".pg3-img").css("transition", ".1s");
    })
    
    $(".list-pic").hover(function(e){
        $(this).find(".list-act").css("-moz-transform", "scale(1.1)");
        $(this).find(".list-act").css("-webkit-transform", "scale(1.1)");
        $(this).find(".list-act").css("transform", "scale(1.1)")
        $(this).find(".list-act").css("transition", ".5s");
    },
    function(e){
        $(this).find(".list-act").css("-moz-transform", "scale(1)");
        $(this).find(".list-act").css("-webkit-transform", "scale(1.1)");
        $(this).find(".list-act").css("transform", "scale(1)")
        $(this).find(".list-act").css("transition", ".5s");
    })
  });



