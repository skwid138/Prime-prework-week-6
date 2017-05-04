$(document).ready(function() {

  // nav bar event listeners set up
  $('.navDiv').mouseenter(mouseEnterButton);
  $('.navDiv').mouseleave(mouseLeaveButton);

  //TODO add your code below to attach event listeners to the buttons
  // We did the first one for you. You can use the `.click()` function or
  // the .on('click') like we did below.
  $('#fadeDiv').on('click', fadeCat);
});

// nav bar function to fade when mouse enters button
function mouseEnterButton() {
  console.log('enter');
  $(this).fadeTo('fast', 0.5);
}

// nav bar function to fade when mouse enters button
function mouseLeaveButton() {
  console.log('leave');
  $(this).fadeTo('fast', 1);
}

// fadeCat is a function to fade cat in or out when that button is clicked
function fadeCat() {
  //TODO your function code here
  // toggle catImg fade
  // append '<p>fade toggle</p>' to 'clickList'

}

// hideCat is a function to hide and show the cat image when that button is clicked
function hideCat() {
  //TODO your function code here
  // hide catImg
  // append '<p>hide toggle</p>' to 'clickList'
}

// animateCat is a function to grow the cat's height and width by 10px when that button is clicked
function animateCat() {
  //TODO your function code here
  // animate catImg
  // append '<p>animate</p>' to 'clickList'
}

// Hard Mode
// resetCat is a function to reset the cat photo to its original size
// when that button is clicked.
function resetCat() {
  // reset catImg
  // append '<p>reset</p>' to 'clickList'
}
