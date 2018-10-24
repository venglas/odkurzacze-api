'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _sliderController = require('../controllers/sliderController');

var _sliderController2 = _interopRequireDefault(_sliderController);

var _errors = require('../middlewares/errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var api = (0, _express.Router)();

    api.get('/:slug', (0, _errors.catchAsync)(_sliderController2.default.findOne));

    api.get('/', (0, _errors.catchAsync)(_sliderController2.default.findAll));

    api.post('/', (0, _errors.catchAsync)(_sliderController2.default.create));

    api.put('/:slug', (0, _errors.catchAsync)(_sliderController2.default.update));

    api.delete('/:slug', (0, _errors.catchAsync)(_sliderController2.default.remove));

    return api;
};