$('input[type=checkbox]').css('margin-right', '10px');
$('input[type=checkbox]').change(function () {
  const amtyobj = {};
  $.each($('input[type=checkbox]:checked'), function () {
    amtyobj[$(this).attr('data-name')] = ($(this).attr('data-id'));
  });
  const amntyList = Object.keys(amtyobj);
  $('.amenities h4').text(amntyList);
});
