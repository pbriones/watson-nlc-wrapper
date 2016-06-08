'use strict';
var expect = require('chai').expect;
var Classifier = require('../');

var classifier = new Classifier({
  username: 'username',
  password: 'password'
})

describe('classifier', function () {
  it('.constructor', function () {
    expect(classifier).to.be.instanceof(Classifier);
    expect(classifier).to.have.property('_classifier');
  })
  it('.create', function () {
    expect(classifier.create).to.be.a('function');
  })
  it('.list', function () {
    expect(classifier.list).to.be.a('function');
  })
  it('.status', function () {
    expect(classifier.status).to.be.a('function');
  })
  it('.remove', function () {
    expect(classifier.remove).to.be.a('function');
  })
  it('.classify', function () {
    expect(classifier.classify).to.be.a('function');
  })
  it('.getClassifier', function () {
    expect(classifier.getClassifier).to.be.a('function');
  })
})