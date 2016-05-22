$(document).ready(function() {


    $('.circle').on('click', (e) => {

        let targetElement = $('.slide-' + e.target.dataset.index);
        console.log(targetElement);

        $('html, body').animate({
            scrollTop: targetElement.offset().top
        }, 500);

    })

});