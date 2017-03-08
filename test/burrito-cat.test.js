describe('hideCat()', function() {
  before(function() {
    fixture.setBase('assignment/2_burrito-cat');
  });

  beforeEach(function () {
    fixture.load('index.html');
  });

  afterEach(function () {
    fixture.cleanup();
  });

  it('on load cat should be visible', function() {
    var isVis = $('#catImg').is(':visible');
    assert.equal(isVis, true, 'cat should be hidden');
  });

  it('should toggle whether cat is hidden', function() {
    hideCat();
    isVis = $('#catImg').is(':visible');
    assert.equal(isVis, false, 'cat should be visible');

    // call hideCat again
    hideCat();
    isVis = $('#catImg').is(':visible');
    assert.equal(isVis, true, 'cat should be hidden');
  });
});
