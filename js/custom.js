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

    $(window).scroll(function() {
        if($(this).scrollTop() >= (0.5 * distance1)) {
            $(".dots").fadeIn(200);
        } else {
            $(".dots").fadeOut(200);
        }
    });




});