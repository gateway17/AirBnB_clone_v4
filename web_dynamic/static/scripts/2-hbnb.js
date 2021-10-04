$('input[type=checkbox]').css('margin-right', '10px');

$('input[type=checkbox]').change(function () {
  const amtyobj = {};
  $.each($('input[type=checkbox]:checked'), function () {
    amtyobj[$(this).attr('data-name')] = ($(this).attr('data-id'));
  });
  const amntyList = Object.keys(amtyobj);
  $('.amenities h4').text(amntyList);
});

$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
  if (data.status === 'OK') {
    $('div#api_status').addClass('available');
    $('div#api_status').css('background-color', '#ff545f')
  } else {
    $('div#api_status').removeClass('available');
    $('div#api_status').css('background-color', '#cccccc')
  }
});
