$(document).ready(function () {
    
    // vanilla js
    // var hero = document.getElementById("hero-container");
    // var hideBtn = document.getElementById("hide-hero");

    // hideBtn.addEventListener("click", function(e){
    //     e.preventDefault();

    //     hero.style.display = "none";


    // });
 
    // jQuery

    $("#hide-hero").click(function(e){
        // $("#hero-container").hide();
        $("#hero-container").css("display", "none");
    })

  });



