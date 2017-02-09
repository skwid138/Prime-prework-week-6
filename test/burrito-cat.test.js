describe('hideCat()', function() {
  beforeEach(function () {
    fixture.setBase('5-2/src');
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
