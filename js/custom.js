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

    $(".story1-link").click(function() {
        window.open("story1.html");
    });


    $(".us1").hover(function() {
        $(".people1").css("background-image", "url('../image/people-wl.png')");
        $(".people1").css("transform", "rotateY(180deg)");
    }, function() {
        $(".people1").css("background-image", "url('../image/people1.png')");
        $(".people1").css("transform", "rotateY(360deg)");
    });

    $(".us2").hover(function() {
        $(".people2").css("background-image", "url('../image/people-cm.png')");
        $(".people2").css("transform", "rotateY(180deg)");
    }, function() {
        $(".people2").css("background-image", "url('../image/people2.png')");
        $(".people2").css("transform", "rotateY(360deg)");
    });

    $(".us3").hover(function() {
        $(".people3").css("background-image", "url('../image/people-sxb.png')");
        $(".people3").css("transform", "rotateY(180deg)");
    }, function() {
        $(".people3").css("background-image", "url('../image/people3.png')");
        $(".people3").css("transform", "rotateY(360deg)");
    });

    $(".us4").hover(function() {
        $(".people4").css("background-image", "url('../image/people-mzz.png')");
        $(".people4").css("transform", "rotateY(180deg)");
    }, function() {
        $(".people4").css("background-image", "url('../image/people4.png')");
        $(".people4").css("transform", "rotateY(360deg)");
    });





    $(".product1-thumbnail1").hover(function() {
        $(".product1-thumbnail1").css("opacity", "1");
        $(".product1").css("background-image", "url('../image/story1.jpg')");

        $(".product1-thumbnail2").css("opacity", "0.5");
        $(".product1-thumbnail3").css("opacity", "0.5");
    });

    $(".product1-thumbnail2").hover(function() {
        $(".product1-thumbnail2").css("opacity", "1");
        $(".product1").css("background-image", "url('../image/story2.jpg')");

        $(".product1-thumbnail1").css("opacity", "0.5");
        $(".product1-thumbnail3").css("opacity", "0.5");
    });

    $(".product1-thumbnail3").hover(function() {
        $(".product1-thumbnail3").css("opacity", "1");
        $(".product1").css("background-image", "url('../image/story1.jpg')");

        $(".product1-thumbnail1").css("opacity", "0.5");
        $(".product1-thumbnail2").css("opacity", "0.5");
    });

    $(".product2-thumbnail1").hover(function() {
        $(".product2-thumbnail1").css("opacity", "1");
        $(".product2").css("background-image", "url('../image/story1.jpg')");

        $(".product2-thumbnail2").css("opacity", "0.5");
        $(".product2-thumbnail3").css("opacity", "0.5");
    });

    $(".product2-thumbnail2").hover(function() {
        $(".product2-thumbnail2").css("opacity", "1");
        $(".product2").css("background-image", "url('../image/story2.jpg')");

        $(".product2-thumbnail1").css("opacity", "0.5");
        $(".product2-thumbnail3").css("opacity", "0.5");
    });

    $(".product2-thumbnail3").hover(function() {
        $(".product2-thumbnail3").css("opacity", "1");
        $(".product2").css("background-image", "url('../image/story1.jpg')");

        $(".product2-thumbnail1").css("opacity", "0.5");
        $(".product2-thumbnail2").css("opacity", "0.5");
    });





    $(".shopping-btn").click(function() {
        window.open("detail.html");
    });



    var productNum1;
    var productNum2;

    $("#minus1").click(function() {
        var temp = $("#productNum1").val();
        productNum1 = parseInt(temp) - 1;
        if (productNum1 < 0) {
            $("#productNum1").val("0");
        } else {
            $("#productNum1").val(productNum1);
        }
    });

    $("#plus1").click(function() {
        var temp = $("#productNum1").val();
        productNum1 = parseInt(temp) + 1;
        $("#productNum1").val(productNum1);
    });

    $("#minus2").click(function() {
        var temp = $("#productNum2").val();
        productNum2 = parseInt(temp) - 1;
        if (productNum2 < 0) {
            $("#productNum2").val("0");
        } else {
            $("#productNum2").val(productNum2);
        }
    });

    $("#plus2").click(function() {
        var temp = $("#productNum2").val();
        productNum2 = parseInt(temp) + 1;
        $("#productNum2").val(productNum2);
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
            $("nav").removeClass("nav-up");
            
        },
        
        onLeave: function(index, nextIndex, direction) {
            $("nav").addClass("nav-up");

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