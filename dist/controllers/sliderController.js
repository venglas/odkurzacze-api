'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slide = require('../models/slide');

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    findOne: function findOne(req, res, next) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var slide;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _slide2.default.findOne({ slug: req.params.slug });

                        case 2:
                            slide = _context.sent;

                            if (slide) {
                                _context.next = 5;
                                break;
                            }

                            return _context.abrupt('return', next());

                        case 5:
                            return _context.abrupt('return', res.status(200).send({ data: slide }));

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    },
    findAll: function findAll(req, res) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var slide;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _slide2.default.find().sort({ createdAt: 'desc' });

                        case 2:
                            slide = _context2.sent;
                            return _context2.abrupt('return', res.status(200).send({ data: slide }));

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }))();
    },
    create: function create(req, res) {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var slide;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return new _slide2.default({
                                id: req.body.id,
                                name: req.body.name,
                                title: req.body.title,
                                image: req.body.image
                            }).save();

                        case 2:
                            slide = _context3.sent;
                            return _context3.abrupt('return', res.status(201).send({ data: slide, message: 'Slide was created :)' }));

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this3);
        }))();
    },
    update: function update(req, res, next) {
        var _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var slide;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _slide2.default.findOne({ 'slug': req.params.slug });

                        case 2:
                            slide = _context4.sent;

                            if (slide) {
                                _context4.next = 5;
                                break;
                            }

                            return _context4.abrupt('return', next());

                        case 5:

                            slide.id = req.body.id;
                            slide.name = req.body.name;
                            slide.title = req.body.title;
                            slide.image = req.body.image;

                            _context4.next = 11;
                            return slide.save();

                        case 11:
                            return _context4.abrupt('return', res.status(200).send({ data: slide, message: 'Slide was updated :)' }));

                        case 12:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this4);
        }))();
    },
    remove: function remove(req, res, next) {
        var _this5 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var slide;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return _slide2.default.findOne({ 'slug': req.params.slug });

                        case 2:
                            slide = _context5.sent;

                            if (slide) {
                                _context5.next = 5;
                                break;
                            }

                            return _context5.abrupt('return', next());

                        case 5:

                            slide.remove();

                            return _context5.abrupt('return', res.status(200).send({ message: 'Slide was deleted :)' }));

                        case 7:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this5);
        }))();
    }
};