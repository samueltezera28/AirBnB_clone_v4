$(document).ready(function () {
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

