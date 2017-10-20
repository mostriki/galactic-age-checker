import { SpaceAge } from './../js/space-age.js';

$(document).ready(function() {
  $('#birthYear').submit(function(event) {
    event.preventDefault();

    let yearInput = $('#yearInput').val();
    let birthday = $('#birthday').val();
    let spaceage = new SpaceAge(yearInput, birthday);
    console.log(yearInput);
    console.log(birthday);
        debugger;




    $('#output1').text(spaceage.humanYears());
    // $('#output1').text(spaceage.age);

  });
});
