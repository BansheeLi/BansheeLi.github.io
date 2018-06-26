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
    
    $("#video1")[0].play();
    $("#video2")[0].play();
    $("#video3")[0].play();

    var slideIndexS = 0;
    var sliding = false;
    
    $("#fullpage").fullpage({
        controlArrows: false,
        slidesNavigation: true,
        slidesNavPosition: "bottom",
        scrollOverflow: false,
        
        afterLoad(anchorLink, index) {
            $("nav").removeClass("nav-up");
            
        },
        
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
//            slideIndexS = slideIndex + 1;
            $("nav").removeClass("nav-up");
            
        },
        
        onLeave: function(index, nextIndex, direction) {
            $("nav").addClass("nav-up");
            
//            if (index == 2 && !sliding) {
//                if (direction == "down" && slideIndexS <3) {
//                    $.fn.fullpage.moveSlideRight();
//                    return false;
//                }
//                else if (direction == "up" && slideIndexS > 1) {
//                    $.fn.fullpage.moveSlideLeft();
//                    return false;
//                }
//            }
//            else if (sliding) {
//                return false;
//            }
        },
        
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
            $("nav").removeClass("nav-up");
        },
        
        afterRender: function() {
            $("#video1")[0].play();
            $("#video2")[0].play();
            $("#video3")[0].play();
            setInterval(function() {
                $.fn.fullpage.moveSlideRight();
            }, 13000);
        },
        
    });
    
    



});