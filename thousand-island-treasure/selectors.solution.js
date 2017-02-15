// 5-1, Set-up, DOM loading - Kris

/**
5-1-1
File Linking / Libraries
1. start with HTML with jquery sourced but not the student's File
2. create File
3. source into index
**/

/**
5-1-2
Document Ready, Targeting (Element, Class, ID)
? pseudo selectors (nth child) (:odd, :last) ?
? Traversal with parent(), children() ? -- maybe week six
? Method-chaining?

1. Select just the h1 inside the header element and make it appear with the show() method (all h1s are hidden by the stylesheet!)
2. Select the element with id "step-two" and change its background color to yellow. HINT: look up .css() to access an element's css properties!
3. Select the list with a class of "example-list" and fade it out over 1.5 seconds
  3. BONUS! Wait one second and then fade it back in! HINT: look up delay()!
4. Select all of the odd-numbered list items and change their text color to blue HINT: look up .css() to access an element's css properties!
5. Select the last list item on the page using a pseudo selector.
6. Using DOM traversal, select the last list item on the page using any of the following: parent(), children(), last(). Change its text color to red.
*/
console.log('JS');

var onReady = function() {
  console.log('DOM ready');

  // Q1
  $('header h1').toggle();
  // could also be: $('header h1').show();

  // Q2
  $('#step-two').css('background-color', 'yellow');

  // Q3 with Bonus
  // $('.example-list').fadeOut(1500).delay(1000).fadeIn(500);

  // Q4
  // $('li:odd').css('color', 'blue');

  // Q5 Directly with pseudo :last
  // $('li:last').css('color', 'red');

  // Q6 Using traversal
  // $('li').last().css('color', 'red');
  // $('main').children().last().children().last().css('color', 'red');
  // $('#step-two').parent().css('color', 'red');
};

$(document).ready(onReady);

function revealHeader() {
  console.log('revealHeader called');
  $('header h1').toggle();
}
