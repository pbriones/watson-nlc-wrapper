# watson-dialog-wrapper

Needed to use watson classifier but didn't want to keep on setting it up with cfenv.

Installation
-----------

```
npm install watson-nlc-wrapper --save
```

Usage
-----------
For Bluemix:
```
var Classifier = require('watson-nlc-wrapper');
var classifier = new Classifier('my-bluemix-classifier-service-name');

The rest of functionalities are directly from IBM Watson NLC Service,
except for .list, which now only accepts the callback argument.
```
For hardcoded Credentials:

```
var Classifier = require('watson-nlc-wrapper');
var classifier = new Classifier({
  username: <username>,
  password: <password>,
  <other nlc params>: <param value>
});

```