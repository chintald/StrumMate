// // Get references to the slider input elements
// var $slider1 = $('#slider1 input[type="range"]');
// var $slider2 = $('#slider2 input[type="range"]');


// // Listen for changes to the slider values
// $slider1.on('input', function() {
//   var value = $(this).val();
//   // Do something with the value of slider1
//   console.log('Slider 1 value: ' + value);
// });

// $slider2.on('input', function() {
//   var value = $(this).val();
//   // Do something with the value of slider2
//   console.log('Slider 2 value: ' + value);
// });

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