describe('basemode 1_selectors_fade', function() {

  before(function() {
    fixture.setBase('assignment/1_selectors');
  });

  beforeEach(function () {
    fixture.load('index.html');
  });

  afterEach(function () {
    fixture.cleanup();
  });

  // note that this test has been subject to failing due to a race condition
  // I believe putting it in a separate file helps, but...race conditions
  it('fades elements with a class of example-list to an opacity of 0.4', function (done) {
    onReady();
    done();
    assert.equal($('.example-list').css('opacity').substr(0, 3), 0.4);
  });

});
