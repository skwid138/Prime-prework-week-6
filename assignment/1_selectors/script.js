console.log('JS loaded');

/*
See the README.md file for instructions
*/

var onReady = function() {
  console.log('selectors doc ready');

  // 1 - hide just the h1 inside header
  $('header h1').hide();
  // $('header h1').toggle(); // or with toggle

  // 2 - change the background color of 'step-two' to yellow
  $('#step-two').css('background-color', 'yellow');

  // 3 - fade example-list elements to an opacity of 0.4
  $('.example-list').fadeTo('fast', 0.4);

  // 4 - select all odd list items and change to blue
  $('li:odd').css('color', 'blue');

  // 5 - select the last list item with a pseudo selector
  $('li:last').css('color', 'red');

  // 6 - select the last list item with traversal
  $('li').last().css('color', 'red');
  // $('main').children().last().children().last().css('color', 'red');
  // $('#step-two').parent().css('color', 'red');
};

// When the DOM is loaded, our code in the onReady function will run.
$(document).ready(onReady);
