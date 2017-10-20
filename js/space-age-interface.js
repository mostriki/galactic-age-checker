import { SpaceAge } from './../js/space-age.js';

$(document).ready(function() {
  $('#birthdayInput').submit(function(event) {
    event.preventDefault();

    let birthday = $('#birthday').val();
    let spaceage = new SpaceAge(birthday);

    $('#age').text(spaceage.humanYears());
    $('#ageInSeconds').text(spaceage.ageToSeconds());
    $('#mercurianYears').text(spaceage.mercurianYears());
    $('#venusianYears').text(spaceage.venusianYears());
    $('#martianYears').text(spaceage.martianYears());
    $('#jovianYears').text(spaceage.jovianYears());
    $('#surpassesExpectancy').text(spaceage.surpassesExpectancy());

  });
});
