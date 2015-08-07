$(document).ready(function($) { // Start of Document Ready Javascript

  // Animated scroll to top
  $('.totop').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 900);
  });

  // Smooth scrolling to sections
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 900);
          return false;
        }
      }
    });
  });

  // Open all external links in a new tab
  // $('a').each(function() {
  //  var a = new RegExp('/' + window.location.host + '/');
  //  if(!a.test(this.href)) {
  //      $(this).click(function(event) {
  //          event.preventDefault();
  //          event.stopPropagation();
  //          window.open(this.href, '_blank');
  //      });
  //  }
  // });

  // Open all external links in a new tab
  $("#content a[href^='http://']").attr("target","_blank");

  // Fade In element
  $(function() {
    var element = document.getElementById("js-fadeInElement");
    $(element).addClass('js-fade-element-hide');

    $(window).scroll(function() {
      if( $("#js-fadeInElement").length > 0 ) {
        var elementTopToPageTop = $(element).offset().top;
        var windowTopToPageTop = $(window).scrollTop();
        var windowInnerHeight = window.innerHeight;
        var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
        var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
        var distanceFromBottomToAppear = 300;

        if(elementTopToWindowBottom > distanceFromBottomToAppear) {
          $(element).addClass('js-fade-element-show');
        }
        else if(elementTopToWindowBottom < 0) {
          $(element).removeClass('js-fade-element-show');
          $(element).addClass('js-fade-element-hide');
        }
      }
    });
  });

  // Add posthover (color and box-shadow)
  $(".articles").hover(
    function () {
      $(this).addClass("posthover");
    },
    function () {
      $(this).removeClass("posthover");
    }
  );

  // Elements appear after scroll down
  // $(window).scroll(function() {    
  //   var scroll = $(window).scrollTop();
  //     if (scroll >= 1600) {
  //       $(".totop").addClass("appear");
  //     } else {
  //       $(".totop").removeClass("appear");
  //     }
  // });

  // Elements appear on scroll up or scroll down
  var position = $(window).scrollTop();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
      if(scroll <= 300) {
        $(".totop").removeClass("appear");
      } else {
        $(".totop").addClass("appear");
      }
      position = scroll;
  });

  // Menu Toggle
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });
  addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

  // Parallax
  $(function() {
    if ($("#js-parallax-window").length) {
      parallax();
    }
  });
  $(window).scroll(function(e) {
    if ($("#js-parallax-window").length) {
      parallax();
    }
  });
  function parallax(){
    if( $("#js-parallax-window").length > 0 ) {
      var plxBackground = $("#js-parallax-background");
      var plxWindow = $("#js-parallax-window");

      var plxWindowTopToPageTop = $(plxWindow).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

      var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
      var windowInnerHeight = window.innerHeight;
      var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
      var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
      var plxSpeed = 0.35;

      plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
    }
  }

}); // End of Document Ready Javascript

