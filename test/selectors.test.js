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
  // it('should fadeOut the example-list', function() {
  //   // sinon.stub(jQuery.prototype, "fadeOut");
  //   var spy = sinon.spy($.prototype, "fadeOut");
  //
  //
  //
  //   // onReady();
  //   spy();
  //   spy.should.have.been.called();
  //   spy.reset();
  //   // assert.equal($('.example-list').is(':visible'), false, 'not visible breifly').to;
  // });



});
