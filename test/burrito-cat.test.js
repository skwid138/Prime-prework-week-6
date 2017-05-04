describe('2_burrito-cat', function() {
  before(function() {
    fixture.setBase('assignment/2_burrito-cat');
  });

  beforeEach(function () {
    fixture.load('index.html');
  });

  afterEach(function () {
    fixture.cleanup();
  });

  describe('basemode hideCat()', function () {
    it('loads with a visible cat', function() {
      var isVis = $('#catImg').is(':visible');
      assert.equal(isVis, true, 'cat should be visible');
    });

    it('toggles whether cat is hidden', function() {
      hideCat();
      isVis = $('#catImg').is(':visible');
      assert.equal(isVis, false, 'cat should be hidden');

      // call hideCat again
      hideCat();
      isVis = $('#catImg').is(':visible');
      assert.equal(isVis, true, 'cat should be visible');
    });

    it('is triggered by a click event', function (done) {
      $('#hideDiv').trigger('click');
      done();
      isVis = $('#catImg').is(':visible');
      assert.equal(isVis, false, 'cat should be hidden');
    });

    it('appends paragraphs to div with an id of clickList', function(done) {
      var clickListLength = $('#clickList').length;
      hideCat();
      done();
      assert.equal($('#clickList').length, clickListLength + 1);
    });
  });

  describe('basemode fadeCat()', function () {
    it('toggles visible cat to hidden', function(done) {
      fadeCat();
      done();
      isVis = $('#catImg').is(':visible');
      assert.equal(isVis, false, 'cat should be hidden');
    });

    it('toggles hidden cat to visible', function(done) {
      fadeCat();
      done();
      isVis = $('#catImg').is(':visible');
      assert.equal(isVis, true, 'cat should be visible');
    });

    it('appends paragraphs to div with an id of clickList', function(done) {
      var clickListLength = $('#clickList').length;
      fadeCat();
      done();
      assert.equal($('#clickList').length, clickListLength + 1);
    });

  });

  describe('basemode animateCat()', function () {
    var startingCatWidth = $('#catImg').attr('width');

    it('increases width of cat by 10px', function(done) {
      animateCat();
      done();
      var catWidth = $('#catImg').attr('width');
      assert.equal(startingCatWidth + 10, catWidth);
    });

    it('appends paragraphs to div with an id of clickList', function(done) {
      var clickListLength = $('#clickList').length;
      animateCat();
      done();
      assert.equal($('#clickList').length, clickListLength + 1);
    });

  });

  describe('hardmode resetCat()', function () {
    var startingCatWidth = $('#catImg').attr('width');

    it('resets cat to original size', function(done) {
      animateCat();
      resetCat();
      done();
      var catWidth = $('#catImg').attr('width');
      assert.equal(startingCatWidth, catWidth);
    });

    it('appends paragraphs to div with an id of clickList', function(done) {
      var clickListLength = $('#clickList').length;
      resetCat();
      done();
      assert.equal($('#clickList').length, clickListLength + 1);
    });

  });
});
