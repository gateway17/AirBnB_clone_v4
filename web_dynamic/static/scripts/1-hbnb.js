$('input[type=checkbox]').change(function () {
  if ($(this).is(':checked')) {
    console.log($('#data-id').data())
  } else {
    alert("unchecked")
  }
});
