$(function () {
  $('.is-modal-open').on('click', function () {
    $('.modal-content').fadeIn();
    $('.modal-bg').fadeIn();
    $('body').addClass('is-fix');

    return false;
  });
  $('.is-modal-close').on('click', function () {
    $('.modal-content').fadeOut();
    $('.modal-bg').fadeOut();
    $('body').removeClass('is-fix');
    return false;
  });
});
