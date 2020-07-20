//Modified version of
//https://codepen.io/bravotanmoy/pen/zBNPYV

var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#main-nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#main-nav').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#main-nav').addClass('sticky').removeClass('nav-up').css("border-bottom", "1px solid #ddd");
        }
        // Gets rid of border once they go basically up to the top
        if($(window).scrollTop() < 100) {
          $('#main-nav').css("border-bottom", "0").removeClass('sticky');
        }
    }

    lastScrollTop = st;
}
