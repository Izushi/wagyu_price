$(function () {
  $('#page-top a').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
  });
});