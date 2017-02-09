describe('application', function() {
  beforeEach(function () {
    fixture.setBase('5-1/src');
    fixture.load('index.html');
  });

  afterEach(function () {
    fixture.cleanup();
  });

  // T1
  it('should show header h1', function() {
    // make sure DOM is loaded
    onReady();
    assert.equal($('header h1').is(':visible'), true, 'header h1 element should be visible');
  });

  // T1
  it('should keep other h1s hidden', function() {
    onReady();
    assert.equal($('main h1').is(':visible'), false, 'other headers should be hidden');
  });

  // T3
  it('should change background-color of span with id step-two to yellow', function() {
    onReady();
    var spanBg = $('#step-two').css('background-color') == 'rgb(255, 255, 0)';
    assert.equal(spanBg, true, 'background-color should be yellow');
  });
});

// -- Test util functions --
// function that iterates over cardImg elements and validates they are displayed
// function validateShown(){
//   $('header h1').each(function(index, el) {
//     console.log(el);
//   });
// }
