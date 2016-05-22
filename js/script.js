'use strict';

$(document).ready(function () {

    var actualSLide = 1;

    var scrollToSlide = function scrollToSlide(slide) {
        $('.selected').removeClass('selected');
        var targetElement = $('.slide-' + slide);
        $('.circle[data-index="' + slide + '"]').addClass('selected');
        actualSLide = slide;
        $('html, body').animate({
            scrollTop: targetElement.offset().top
        }, 500, function(){
            console.log('After Animation');
        });
    };
    
    // Restart Scroll Position on Page Reload
    scrollToSlide(1);

    $('.circle').on('click', (e) => {
        var targetSlide = e.target.dataset.index;
        scrollToSlide(targetSlide);
    });
});
