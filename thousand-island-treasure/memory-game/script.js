console.log('JS');

var onReady = function() {
  console.log('doc ready');
  $('#revealHide').on('click', revealHide);
  $('.card').click(singleClickFunc);
};

$(document).ready(onReady);

// functions
function revealHide() {
  console.log('called revealHide');
  $('.cardImg').toggle();
}

function singleClickFunc() {
  console.log('called singleClickFunc');
  $(this).children().toggle();
}
