

$(document).ready(function($) {

    //Открытие модального окна.
    $('#popup-open').click(function() {
        $('.popup-fade').fadeIn();
        return false;
    });

    //Закрытие модального окна.
    $('#btnClose').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });

    //Клик по кнопке "Авторизоваться".
    $('#btnLoginForm').click(function() {
        alert("Извините, это всего лишь тестовая страница!")
        return false;
    });

    //Закрытие модального окна по клику в любое место, кроме МО .
    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });
});