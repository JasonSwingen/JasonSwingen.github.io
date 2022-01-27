/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 900, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// fade in elements on scroll
$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});
$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},2);
            }
        });
    });
});

// changes dropdown in contact form based on package link clicked
var $select = $('#select');
$('a[href="#contact"]').click(function () {
    $select.val( $(this).data('select') );
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Carousel
$('.carousel').carousel({
  pause: null
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Appear on scroll animations
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

// Keeps visitors from accidently backing out when trying to close modal
//Modal Closer With Back Button Support (Uses EventDelegation, so it works for ajax loaded content too.)
(function() {
    var activeOpenedModalId     = null;
    var isHidingModalByPopState = false;
    $(document).on('show.bs.modal', '.modal', function() {
        activeOpenedModalId  = $(this).attr('id');
        window.location.hash = activeOpenedModalId;
    }).on('hide.bs.modal', '.modal', function() {
        if(!isHidingModalByPopState) {
            window.history.back();
        }
        isHidingModalByPopState = false;
        activeOpenedModalId     = null;
    });
    $(window).on('popstate', function() {
        if(activeOpenedModalId && window.location.hash !== '#'+activeOpenedModalId) {
            isHidingModalByPopState = true;
            $("#" + activeOpenedModalId).modal('hide');
        }
    });
})();
