$(document).ready(function () {
    const api = 'http://' + window.location.hostname + ':5001/api/v1/status/';
    $.get(api, function (response) {
        if (response.status === 'Ok') {
		$.('DIV#api_status').addclass('available');
	}
	else {
		$('DIV#api_status').removeClass('available');
	}
 });

$.ajax({
    url: api + ':5001/api/v1/places_search/',
    type: 'POST',
    data: '{}',
    contentType: 'application/json',
    dataType: 'json',
    success: function (data) {
      $('SECTION.places').append(data.map(place => {
        return `<ARTICLE>
                  <DIV class="title">
                    <H2>${place.name}</H2>
                    <DIV class="price_by_night">
                      ${place.price_by_night}
                    </DIV>
                  </DIV>
                  <DIV class="information">
                    <DIV class="max_guest">
                      <I class="fa fa-users fa-3x" aria-hidden="true"></I>
                      </BR>
                      ${place.max_guest} Guests
                    </DIV>
                    <DIV class="number_rooms">
                      <I class="fa fa-bed fa-3x" aria-hidden="true"></I>
                      </BR>
                      ${place.number_rooms} Bedrooms
                    </DIV>
                    <DIV class="number_bathrooms">
                      <I class="fa fa-bath fa-3x" aria-hidden="true"></I>
                      </BR>
                      ${place.number_bathrooms} Bathrooms
                    </DIV>
                  </DIV>
                  <DIV class="description">
                    ${place.description}
                  </DIV>
                </ARTICLE>`;
      }));
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

