import { SpaceAge } from './../js/space-age.js';

$(document).ready(function() {
  $('#birthdayInput').submit(function(event) {
    event.preventDefault();

    let birthday = $('#birthday').val();
    let planet = $('#planet option:selected').text();

    let spaceage = new SpaceAge(birthday, planet);

    $('#age').html(`<h4> You are ${spaceage.humanYears()} Earth years old.</h4>`);
    $('#ageInSeconds').html(`<h4>You are ${spaceage.ageToSeconds()} Earth seconds old.</h4>`);
    $('#mercurianYears').html(`<h4>You are ${spaceage.mercurianYears()} years old on Mercury.</h4>`);
    $('#venusianYears').html(`<h4>You are ${spaceage.venusianYears()} years old on Venus.</h4>`);
    $('#martianYears').html(`<h4>You are ${spaceage.martianYears()} years old on Mars.</h4>`);
    $('#jovianYears').html(`<h4>You are ${spaceage.jovianYears()} years old on Jupiter.</h4>`);
    $('#planet').html(`<h4>You have ${spaceage.planetaryExpectancy()} years left to live on your planet.</h4>`);
    $('#surpassesExpectancy').html(`<h4>${spaceage.surpassesExpectancy()}</h4>`);
  });
});
