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
});