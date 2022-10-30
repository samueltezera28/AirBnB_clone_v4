$(document).ready(function () {
    const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
    $.get(url, function (response) {
        if (response.status === 'Ok') {
		$.('DIV#api_status').addclass('available');
	}
	else {
		$('DIV#api_status').removeClass('available');
	}
 });
 let amenityStatus = []
 $('input ["type=checkbox]').change(function () {
  if (this.checked)
   let amenityId = $(this).attr('data-id');
   amenityStatus.push(amenityId);
   }
  else {
    amenityStatus.splice($.inArray(checked, amenityStatus), 1);
   }
   $('.amenities h4').text(amenityStatus);
  });
});

