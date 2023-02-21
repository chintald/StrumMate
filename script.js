
// var five = require('johnny-five');
// var board = new five.Board();

$(document).ready(function() {

  $('#slider1').on('input', function() {
    var value = $(this).val();
    console.log(value);
  });

  $('#slider2').on('input', function() {
    var value = $(this).val();
    console.log(value);
  });

});

