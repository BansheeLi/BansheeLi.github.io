$(document).ready(function() {
    var lastScrollTop = 0;
    
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        
        if(st > lastScrollTop) {
            $("nav").fadeOut();
        } else {
            $("nav").fadeIn().addClass("nav-up");
            if (st == 0) {
                $("nav").removeClass("nav-up");
            }
        }
        
        lastScrollTop = st;
    });



    var distance1 = $("#product1").offset().top;
    var distance2 = $("#product2").offset().top;
    var distance3 = $("#product3").offset().top;
    var $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance1) {
            $("#product1").css("position", "fixed");
            $("#text1").css("transform", "translate(-120%, 60%)");
            $("#pic1").css("transform", "translate(100%, 0)");
            $("#text2").css("transform", "translate(0, 50%)");
            $("#pic2").css("transform", "translate(0, 0)");
        }

        // if ($window.scrollTop() >= distance3) {
        //     $("#product2").css("position", "fixed");
        //     $("#product3").fadeIn(3000);
        // }
        

        // if ($window.scrollTop() >= distance3) {
        //     $("#product3").fadeIn(3000);
        // }
    });



});