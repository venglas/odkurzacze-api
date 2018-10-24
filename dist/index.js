'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _slider = require('./routes/slider');

var _slider2 = _interopRequireDefault(_slider);

var _errors = require('./middlewares/errors');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _register = require('babel-core/register');

var _register2 = _interopRequireDefault(_register);

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _database = require('./config/database');

var _database2 = _interopRequireDefault(_database);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Connect to database

//

_mongoose2.default.connect(_database2.default.mongoUrl, { useNewParser: true });

//routes

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connection.on('error', function (err) {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

var app = (0, _express2.default)();

app.set('view engine', 'pug');
app.set('views', (0, _path.join)(__dirname, 'views'));
app.use(_express2.default.static('public'));
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

// routes config

// Config under this comment if for CORS

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/slider', (0, _slider2.default)());
// ...

// errors handling
app.use(_errors.notFound);
app.use(_errors.catchErrors);

// let's play!
app.listen(_config2.default.server.port, function () {
    console.log('Server is up!');
});