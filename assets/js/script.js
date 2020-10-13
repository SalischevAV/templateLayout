$(function(){

    var header = $('#header'),
        introHeight = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();

    function checkScroll(scrollOffset){
        if(scrollOffset >= introHeight){
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    // Fix header
    checkScroll(scrollOffset);//on loading page


    $(window).on('scroll', function(){   //on scroll page
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    // Smooth scroll
    $('[data-scroll]').on('click', function(event){
        event.preventDefault();

        var $this = $(this);
        var blockId = $(this).data('scroll');
        var blockOffset = $(blockId).offset().top;        

        $("#nav a").removeClass('active');
        $this.addClass('active');

          $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);

        $('#nav-toggle').removeClass('active');
        $('nav').removeClass('active');

    });

    // Menu nav toggle
    $('#nav-toggle').on('click', function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });

    // collapse
    $('[data-collapse]').on('click', function(event){
        event.preventDefault();

        var $this = $(this);
        var blokId = $(this).data('collapse');

        $this.toggleClass('active');
       
    });

    // slider
    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    })


})