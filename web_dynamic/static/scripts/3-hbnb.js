$('input[type=checkbox]').css('margin-right', '10px');

$('input[type=checkbox]').change(function () {
  const amtyobj = {};
  $.each($('input[type=checkbox]:checked'), function () {
    amtyobj[$(this).attr('data-name')] = ($(this).attr('data-id'));
  });
  const amntyList = Object.keys(amtyobj);
  $('.amenities h4').text(amntyList);
});

$.get('http://172.22.150.35:5001/api/v1/status/', function (data) {
  if (data.status === 'OK') {
    $('div#api_status').addClass('available');
    $('div#api_status').css('background-color', '#ff545f')
  } else {
    $('div#api_status').removeClass('available');
    $('div#api_status').css('background-color', '#cccccc')
  }
});

const placesDict = {};
$.post('http://172.22.150.35:5001/api/v1/places_search', placesDict, function (data, status) {
  alert(status)
});
