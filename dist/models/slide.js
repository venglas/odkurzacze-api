'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseUrlSlugs = require('mongoose-url-slugs');

var _mongooseUrlSlugs2 = _interopRequireDefault(_mongooseUrlSlugs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = _mongoose2.default.Schema({
    id: Number,
    name: String,
    title: String, //title for slider images
    image: String //this shouldn't be a link but file - look after at this bro
}, {
    timestamps: true
});

Slide.plugin((0, _mongooseUrlSlugs2.default)('name', { field: 'slug', update: true }));

exports.default = _mongoose2.default.model('Slide', Slide);