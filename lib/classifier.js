'use strict';
var creds = require('service-credentials');
var watson = require('watson-developer-cloud');

function Classifier(service) {
  var credentials = creds.getCredentials(service);
  this._classifier = watson.natural_language_classifier(credentials);
}

Classifier.prototype.create = function (params, cb) {
  this._classifier.create(params, function (err, response) {
    if (err) return cb(err);
    cb(null, response);
  })
}

Classifier.prototype.list = function (cb) {
  this._classifier.list({}, function (err, response) {
    if (err) return cb(err);
    cb(null, response);
  })
}

Classifier.prototype.status = function (classifier_id, cb) {
  this._classifier.status(classifier_id, function (err, response) {
    if (err) return cb(err);
    cb(null, response);
  })
}

Classifier.prototype.remove = function (classifier_id, cb) {
  this._classifier.remove(classifier_id, function (err, response) {
    if (err) return cb(err);
    cb(null, response);
  })
}

Classifier.prototype.classify = function (params, cb) {
  this._classifier.classify(params, function (err, response) {
    if (err) return cb(err);
    cb(null, response);
  })
}

Classifier.prototype.getClassifier = function (name, cb) {
  this._classifier.list({}, function (err, result) {
    if (err) return cb(err);
    function checkClassifier(classifier) {
      return name === classifier.name;
    }
    var classifier = result.classifiers.find(checkClassifier) || null;
    cb(null, classifier);
  })
}

module.exports = Classifier;