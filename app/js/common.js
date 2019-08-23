
$(document).ready(function() {
    $('.product-qty').on('input', function(){
        var value = $(this).val();
        value = value.replace(/[^0-9]/g,'');
        $(this).val(value);
    });

    $('.product-qty').on('blur', function(){
        var value = $(this).val();
        value = value.replace(/[^0-9]/g,'');
        if (!parseInt(value) || parseInt(value)===0) {
            $(this).val(1);
        } else {
            $(this).val(value);
        }
    });

    $('.qty-plus').click(function () {
        if ($(this).prev().val() < 9999) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.qty-minus').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) {
                $(this).next().val(+$(this).next().val() - 1);
            }
        }
    });

    $('.addToCart, .shopping-bag').click(function(){
        $('.mini-cart').addClass('show');
    })
    $('.mini-cart-close').click(function(){
        $('.mini-cart').removeClass('show');
    });
    function updateMenu() {
        if($('.mobile-menu-continer').is(':empty')){
            $('.mobile-menu-continer').html('<ul class="mobile-main-menu">'+$('.desktop-menu').html()+'</ul>');
        }
    }
    $('.humberger-icon').click(function () {
        $('body').addClass('nav-mobile-open');
        updateMenu();
    });

    $(window).resize(function(){
        if(screen.width < 769) {
            updateMenu();
        } else {
            $('body').removeClass('nav-mobile-open');
            $('.mobile-menu-continer').html(''); 
        }
    });

    $('.close-mobile-menu').click(function(){
        $('body').removeClass('nav-mobile-open');
    });

    $('.bacground-overlay').click(function() {
        $('body').removeClass('nav-mobile-open');
    });

    $('.mobile-menu-wrapper').on('click', '.nav-item > a, .submenu-item-heading', function () {
        $(this).find('.toggle-menu-icon').toggleClass('icon-minus');
        $(this).next().slideToggle();
    });

    var windowWidth = $(window).width();
    var breaks = [
        { screen: 0, slides: 1 },
        { screen: 460, slides: 2 },
        { screen: 768, slides: 4 }
    ];
    var settings = {
        //responsive: true,
        //hideControlOnEnd	: true,
        //pager				: false,
        //startSlide			: 0,
        //infiniteLoop		: false,
        slideMargin: 10,
        onSliderResize: function() {
            initSlider(true);
        }    
    };

    var slider = $(".highligt-product-slider");
    initSlider();
    function initSlider(isReload) {
        // screen width we will be referring to
        var currentWidth = $(window).width();
        windowWidth = currentWidth;
    
        // calculates slide width
        function calcSlideWidth(fullW, numSlides, margin) {
          var calcWidth = (fullW - margin * (numSlides - 1)) / numSlides;
          return Math.floor(calcWidth);
        }
    
        // sets break point options
        function setBreakOptions(breakObj) {
          for (var key in breakObj) {
            settings[key] = breakObj[key];
          }
        }
    
        // Sort in ascending order in case of mix up
        breaks.sort(function(a, b) {
          return a.screen - b.screen;
        });
    
        // Process breaks
        for (var i = 0; i < breaks.length; ++i) {
          var currentBreak = breaks[i];
          var nextBreak = {};
          var min = currentBreak.screen;
          var max;
    
          if (i < breaks.length - 1) {
            // next break exists
            nextBreak = breaks[i + 1];
            max = nextBreak.screen;
            if (currentWidth >= min && currentWidth < max) {
              setBreakOptions(currentBreak);
            }
          } else {
            // just use current break coz next one does not exist
            if (currentWidth >= min) {
              setBreakOptions(currentBreak);
            }
          }
        }
    
        if (settings.slides) {
          settings.maxSlides = settings.slides;
          settings.minSlides = settings.slides;
          settings.slideWidth = calcSlideWidth(
            windowWidth,
            settings.slides,
            settings.slideMargin
          );
        }
    
        console.log(settings.maxSlides, settings.slideWidth);
      
        if (isReload) {
          slider.reloadSlider(settings);  
        } else {
          slider.bxSlider(settings);
        }    
      }

});