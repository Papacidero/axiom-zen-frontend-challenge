$(document).ready(function() {

    var actualSLide = 1;

    let scrollToSlide = (slide) => {
        $('.selected').removeClass('selected');
        let targetElement = $('.slide-' + slide);
        $('.circle[data-index="'+slide+'"]').addClass('selected')
        actualSLide = slide;
        $('html, body').animate({
            scrollTop: targetElement.offset().top
        }, 500);
    }
    
    $('body').on('keydown', (e) => {
        if (actualSLide > 1 && e.keyCode == 38) {
            scrollToSlide(actualSLide-1)
        }
        if (actualSLide < 8 && e.keyCode == 40) {
            scrollToSlide(actualSLide+1)
        }
        
    })
    

    $('.circle').on('click', (e) => {
        let targetSlide = e.target.dataset.index;
        scrollToSlide(targetSlide)
    })

    

});