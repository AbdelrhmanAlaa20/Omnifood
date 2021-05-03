$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
     $('.js--steps').click(function () {
        $('html, body').animate({scrollTop: $('#steps-section').offset().top}, 1000); 
     });
     $('.js--cities').click(function () {
        $('html, body').animate({scrollTop: $('#cities-section').offset().top}, 1000); 
     });
    
    /* Animations on scroll */
    $('.features').waypoint(function(direction) {
        $('.features').addClass('animate__fadeInUp , animate__animated');
    }, {
        offset: '50%'
    });
    $('.app').waypoint(function(direction) {
        $('.app').addClass('animate__fadeInUp , animate__animated');
    }, {
        offset: '50%'
    });

    $('.cities').waypoint(function(direction) {
        $('.cities').addClass('animate__fadeInUp , animate__animated');
    }, {
        offset: '50%'
    });

    $('.pulse').waypoint(function(direction) {
        $('.pulse').addClass('animate__pulse , animate__animated');
    }, {
        offset: '50%'
    });

    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
});