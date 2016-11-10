'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const isitwp = require('../src');

describe('Test SmashingMagazine', function () {
  let result;

  before(function (done) {
    isitwp('http://smashingmagazine.com')
      .then(isWordpress => {
        result = isWordpress;
        done();
      })
      .catch(err => {
        result = err;
        done();
      })
  });

  it('should be wordpress', function () {
    expect(result).to.eql(true);
  });
});

describe('Test Facebook', function () {
  let result;

  before(function (done) {
    isitwp('http://www.facebook.com')
      .then(isWordpress => {
        result = isWordpress;
        done();
      })
      .catch(err => {
        result = err;
        done();
      })
  });

  it('should not be wordpress', function () {
    expect(result).to.eql(false);
  });
});

describe('Test Sony Music', function () {
  let result;

  before(function (done) {
    isitwp('https://www.sonymusic.com')
      .then(isWordpress => {
        result = isWordpress;
        done();
      })
      .catch(err => {
        result = err;
        done();
      })
  });
    it('should be wordpress', function () {
      expect(result).to.eql(true);
    });
});

describe('Test Tech Crunch', function () {
  let result;

  before(function (done) {
    isitwp('https://techcrunch.com')
      .then(isWordpress => {
        result = isWordpress;
        done();
      })
      .catch(err => {
        result = err;
        done();
      })
  });

    it('should be wordpress', function () {
      expect(result).to.eql(true);
    });
});

describe('Test YouTube', function () {
  let result;

  before(function (done) {
    isitwp('https://youtube.com')
      .then(isWordpress => {
        result = isWordpress;
        done();
      })
      .catch(err => {
        result = err;
        done();
      })
  });

  it('should not be wordpress', function () {
    expect(result).to.eql(false);
  });
});

describe('Test failing site', function () {
  let result;

  before(function (done) {
    isitwp('https://øæøæøæøæøæø.com')
      .then(isWordpress => {
        result = isWordpress;
        done();
      })
      .catch(err => {
        result = err;
        done();
      })
  });

  it('should not be wordpress', function () {
    expect(result instanceof Error).to.eql(true);
  });
});