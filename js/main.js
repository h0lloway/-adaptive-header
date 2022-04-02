// BURGER

$(document).ready(function () {
  $('.top__burger').click(function (event) {
    $('.top__burger,.top__list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
