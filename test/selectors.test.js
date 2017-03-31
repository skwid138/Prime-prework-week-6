describe('basemode 1_selectors assignment', function() {
  before(function() {
    fixture.setBase('assignment/1_selectors');
  });

  beforeEach(function () {
    fixture.load('index.html');
  });

  afterEach(function () {
    fixture.cleanup();
  });

  // 1
  it('should not show header h1', function() {
    // make sure DOM is loaded
    onReady();
    assert.equal($('header h1').is(':visible'), false, 'header h1 element should not be visible');
  });

  // 1
  it('should keep other h1s visable', function() {
    onReady();
    assert.equal($('main h1').is(':visible'), true, 'other headers should be visable');
  });

  // 2
  it('should change background-color of span with id step-two to yellow', function() {
    onReady();
    var spanBg = $('#step-two').css('background-color') == 'rgb(255, 255, 0)';
    assert.equal(spanBg, true, 'background-color should be yellow');
  });

  // 3 - fadout example elements
  // 3 bonus - wait one second and fade back in
  // $('.example-list').fadeOut(1500).delay(1000).fadeIn(500);
  

  // 4 - select all odd list items and change to blue
  // $('li:odd').css('color', 'blue');
  it("should change color of odd li's to blue", function() {
    onReady();
    var oddListItems = $('li:odd').css('color') == 'rgb(0, 0, 255)';
    assert.equal(oddListItems, true, "text color of odd li's should be blue");
  });

  // 5 - select the last list item with a pseudo selector
  // $('li:last').css('color', 'red');

  // 6 - select the last list item with traversal
  // $('li').last().css('color', 'red');
  it('should change color of last li to red', function() {
    onReady();
    var lastLi = $('li:last').css('color') == 'rgb(255, 0, 0)';
    assert.equal(lastLi, true, 'text color should be red');
  });





});
