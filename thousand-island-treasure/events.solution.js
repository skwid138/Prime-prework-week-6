$(document).ready(function() {
  $('.navDiv').mouseenter(mouseEnterButton);
  $('.navDiv').mouseleave(mouseLeaveButton);

  $('#hideDiv').click(hideCat);
  $('#fadeDiv').click(fadeCat);
  $('#animateDiv').click(animateCat);
  $('#resetDiv').click(resetCat);
});

// Hover functions
function mouseEnterButton() {
  $(this).fadeTo('fast', 0.5);
  console.log('enter');
}

function mouseLeaveButton() {
  console.log('leave');
  $(this).fadeTo('fast', 1);
}

// Click functions
function hideCat() {
  // $('#catImg').toggle(); // is another possible solution
  if($('#catImg').is(':visible')){
    $('#catImg').hide();
  }else{
    $('#catImg').show();
  }
}

function fadeCat() {
  if($('#catImg').is(':visible')){
    $('#catImg').fadeOut('slow');
  }else{
    $('#catImg').fadeIn('slow');
  }
}

function animateCat() {
  console.log('animateDiv clicked');
  $('#catImg').animate({
    width: '+=10px'
  }, 'slow');
}

function resetCat() {
  $('#catImg').css({
    width: "",
    fontSize: "",
    borderWidth: ""
  });
}
