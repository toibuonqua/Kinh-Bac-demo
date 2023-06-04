$(document).ready(function () {
    
    $('.feature-nav').each(function () {
        
        $(this).on('click', function () {

            $('.feature-nav').removeClass('active')
            $(this).addClass('active');
        })
    })
});
