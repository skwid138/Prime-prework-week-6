console.log('Test Sourced');

var onReady2 = function() {
  console.log('memory game doc ready');

  //TODO Add your code below to attach your event listeners to functions
  $('.cardDiv').click(singleClickFunc);
  $('#revealHide').click(revealHide);
};

// on document ready run the onReady2 function
$(document).ready(onReady2);

// revealHide function hides and shows all cards
function revealHide() {

  //TODO add your code here to get the desired functionality
  console.log('func: revealHide');
  $('img').toggle();
}

// singleClickFunc function hides and shows an indivdual card
function singleClickFunc() {

  //TODO add your code here to get the desired functionality
  console.log('func: singleClickFunc');
    $('img', this).toggle();
}
