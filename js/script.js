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
    
    scrollToSlide(1);

    // $('body').on('keydown', function (e) {
    //     if (actualSLide > 1 && e.keyCode == 38) {
    //         scrollToSlide(actualSLide - 1);
    //     }
    //     if (actualSLide < 8 && e.keyCode == 40) {
    //         scrollToSlide(actualSLide + 1);
    //     }
    // });
    
    
    $('.scroll').on('click', (e)=> {
        if (actualSLide < 8) {
            scrollToSlide(actualSLide + 1);
        }
    })

    $('.circle').on('click', (e) => {
        var targetSlide = e.target.dataset.index;
        scrollToSlide(targetSlide);
    });
});
