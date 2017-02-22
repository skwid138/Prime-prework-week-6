$(document).ready(function() {

  // nav bar event listeners set up
  $('.navDiv').mouseenter(mouseEnterButton);
  $('.navDiv').mouseleave(mouseLeaveButton);

  //TODO add your code below to attach event listeners to the buttons
  // We did the first one for you. You can use the `.click()` function or
  // the .on('click') like we did below.
  $( '#fadeDiv' ).on( 'click', fadeCat);
  $('#hideDiv').click(hideCat);
  $('#animateDiv').click(animateCat);
  $('#resetDiv').click(resetCat);
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
  // toggle catImg fade
  if($('#catImg').is(':visible')){
    $('#catImg').fadeOut('slow');
  }else{
    $('#catImg').fadeIn('slow');
  }
  // append '<p>fade toggle</p>' to 'clickList'
  $('#clickList').append('<p>fade toggle</p>');
}

// hideCat is a function to hide and show the cat image when that button is clicked
function hideCat() {
  // $('#catImg').toggle(); // is another possible solution
  if($('#catImg').is(':visible')){
    $('#catImg').hide();
  }else{
    $('#catImg').show();
  }

  // append '<p>hide toggle</p>' to 'clickList'
  $('#clickList').append('<p>hide toggle</p>');
}

// animateCat is a function to grow the cat's height and width by 10px when that button is clicked
function animateCat() {
  // animate catImg
  $('#catImg').animate({
    width: '+=10px'
  }, 'slow');
  // append '<p>animate</p>' to 'clickList'
  $('#clickList').append('<p>animate</p>');
}

// Hard Mode
// resetCat is a function to reset the cat photo to it's original size
// when that button is clicked.
function resetCat() {
  // reset catImg
  $('#catImg').css({
    width: "",
    fontSize: "",
    borderWidth: ""
  });

  // append '<p>reset</p>' to 'clickList'
  $('#clickList').append('<p>reset</p>');
}
