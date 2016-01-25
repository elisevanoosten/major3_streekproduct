/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(10);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _classesStatesPreload = __webpack_require__(2);\n\nvar _classesStatesPreload2 = _interopRequireDefault(_classesStatesPreload);\n\nvar _classesStatesStart = __webpack_require__(3);\n\nvar _classesStatesStart2 = _interopRequireDefault(_classesStatesStart);\n\nvar _classesStatesKoe = __webpack_require__(4);\n\nvar _classesStatesKoe2 = _interopRequireDefault(_classesStatesKoe);\n\nvar _classesStatesStremsel = __webpack_require__(5);\n\nvar _classesStatesStremsel2 = _interopRequireDefault(_classesStatesStremsel);\n\nvar _classesStatesPers = __webpack_require__(6);\n\nvar _classesStatesPers2 = _interopRequireDefault(_classesStatesPers);\n\nvar _classesStatesRijpen = __webpack_require__(7);\n\nvar _classesStatesRijpen2 = _interopRequireDefault(_classesStatesRijpen);\n\nvar _classesStatesEtiketten = __webpack_require__(8);\n\nvar _classesStatesEtiketten2 = _interopRequireDefault(_classesStatesEtiketten);\n\nvar _classesStatesEnd = __webpack_require__(9);\n\nvar _classesStatesEnd2 = _interopRequireDefault(_classesStatesEnd);\n\nvar game = undefined;\n\nvar init = function init() {\n\tgame = new Phaser.Game(900, 600, Phaser.AUTO, \"phaser-game\");\n\tgame.state.add('Preload', _classesStatesPreload2['default'], false);\n\tgame.state.add('Start', _classesStatesStart2['default'], false);\n\tgame.state.add('Koe', _classesStatesKoe2['default'], false);\n\tgame.state.add('Stremsel', _classesStatesStremsel2['default'], false);\n\tgame.state.add('Pers', _classesStatesPers2['default'], false);\n\tgame.state.add('Rijpen', _classesStatesRijpen2['default'], false);\n\tgame.state.add('Etiketten', _classesStatesEtiketten2['default'], false);\n\tgame.state.add('End', _classesStatesEnd2['default'], false);\n\tgame.state.start('Preload');\n};\n\ninit();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/script.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/script.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Preload = (function (_Phaser$State) {\n  _inherits(Preload, _Phaser$State);\n\n  function Preload() {\n    _classCallCheck(this, Preload);\n\n    _get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Preload, [{\n    key: 'preload',\n    value: function preload() {\n      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);\n\n      // this.load.atlasJSONHash('spritesheet', 'assets/img/spritesheet.png', 'assets/data/spritesheet.json');\n      this.load.image('background', 'assets/img/bg.jpg');\n      this.load.image('arrow', 'assets/img/arrow.png');\n\n      this.load.image('0_start', 'assets/img/0_start.png');\n      this.load.image('0_bg', 'assets/img/0_bg.png');\n\n      this.load.image('1_bg', 'assets/img/1_bg.png');\n      this.load.image('1_bucket', 'assets/img/1_bucket.png');\n      this.load.image('1_drup', 'assets/img/1_drup.png');\n      this.load.image('1_milk', 'assets/img/1_milk.png');\n      this.load.image('1_uier', 'assets/img/1_uier.png');\n\n      this.load.image('2_bg', 'assets/img/2_bg.png');\n      this.load.image('2_stremsel', 'assets/img/2_stremsel.png');\n      this.load.image('2_zuursel', 'assets/img/2_zuursel.png');\n\n      this.load.image('3_bg', 'assets/img/3_bg.png');\n      this.load.image('3_plaat', 'assets/img/3_plaat.png');\n      this.load.image('3_pers_links', 'assets/img/3_pers_links.png');\n      this.load.image('3_pers_rechts', 'assets/img/3_pers_rechts.png');\n      this.load.image('3_potjes_links', 'assets/img/3_potjes_links.png');\n      this.load.image('3_potjes_rechts', 'assets/img/3_potjes_rechts.png');\n\n      this.load.image('4_bg', 'assets/img/4_bg.png');\n      this.load.image('4_kaasrek', 'assets/img/4_kaasrek.png');\n\n      this.load.image('5_bg', 'assets/img/5_bg.png');\n      this.load.image('5_etiketten', 'assets/img/5_etiketten.png');\n      this.load.image('5_etiketje', 'assets/img/5_etiketje.png');\n      this.load.image('5_kaasbol', 'assets/img/5_kaasbol.png');\n      // this.load.image('wide', 'assets/img/wide.png');\n    }\n  }, {\n    key: 'onLoadComplete',\n    value: function onLoadComplete() {\n      this.game.state.start('Start');\n    }\n  }]);\n\n  return Preload;\n})(Phaser.State);\n\nexports['default'] = Preload;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Preload.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Preload.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Start = (function (_Phaser$State) {\n  _inherits(Start, _Phaser$State);\n\n  function Start() {\n    _classCallCheck(this, Start);\n\n    _get(Object.getPrototypeOf(Start.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Start, [{\n    key: 'create',\n    value: function create() {\n      this.background = this.game.add.sprite(0, 0, 'background');\n\n      this.bg = this.game.add.sprite(this.game.width / 2, this.game.height / 2, '0_bg');\n      this.bg.anchor.setTo(0.5, 0.5);\n\n      this.start = this.game.add.button(705, 470, '0_start', this.startClick, this);\n      this.start.anchor.setTo(0.5, 0.5);\n      this.start.inputEnabled = true;\n      this.start.input.useHandCursor = true;\n    }\n  }, {\n    key: 'startClick',\n    value: function startClick() {\n      console.log('klik start');\n      this.game.state.start('Koe');\n    }\n  }]);\n\n  return Start;\n})(Phaser.State);\n\nexports['default'] = Start;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Start.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Start.js?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar emitter;\n\nvar Koe = (function (_Phaser$State) {\n  _inherits(Koe, _Phaser$State);\n\n  function Koe() {\n    _classCallCheck(this, Koe);\n\n    _get(Object.getPrototypeOf(Koe.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Koe, [{\n    key: 'create',\n    value: function create() {\n      this.background = this.game.add.sprite(0, 0, 'background');\n\n      this.bg = this.game.add.sprite(this.game.width / 2, this.game.height / 2, '1_bg');\n      this.bg.anchor.setTo(0.5, 0.5);\n\n      this.uier = this.game.add.button(395, 320, '1_uier', this.uierClick, this);\n      this.uier.anchor.setTo(0.5, 0.5);\n      this.uier.input.pixelPerfectOver = true;\n      this.uier.input.useHandCursor = true;\n      this.uier.alpha = 0.1;\n      this.uier.inputEnabled = true;\n      this.uier.input.enableDrag();\n\n      emitter = this.game.add.emitter(395, 360, 200);\n      emitter.makeParticles('1_drup');\n      emitter.setRotation(0, 0);\n      emitter.gravity = 1400;\n      emitter.bounce = 0;\n      console.log(emitter.bounce);\n\n      this.nextButton = this.game.add.button(this.game.width - 30, 30, 'arrow', this.nextClick, this);\n      this.nextButton.anchor.setTo(0.5, 0.5);\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      emitter.on = false;\n      if (this.uier.input.isDragged) {\n        console.log('drag');\n        this.uier.x = 395;\n        this.uier.y = 320;\n        emitter.on = true;\n      }\n      // console.log(this.uier.x, this.uier.y);\n    }\n  }, {\n    key: 'nextClick',\n    value: function nextClick() {\n      console.log('klik koe');\n      this.game.state.start('Stremsel');\n    }\n  }, {\n    key: 'uierClick',\n    value: function uierClick() {\n      console.log('uier');\n      // var xpos = this.game.input.x\n      // if (this.game.input.x !== xpos) {\n      // \tconsole.log('swipe');\n      // };\n    }\n  }]);\n\n  return Koe;\n})(Phaser.State);\n\nexports['default'] = Koe;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Koe.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Koe.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("// emitter.start(false, 5000, 100);\n// var emitter;\n'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar drups;\n// var sprite;\nvar timer;\nvar emitter;\n\nvar fireRate = 1;\nvar nextFire = 0;\n\nvar Stremsel = (function (_Phaser$State) {\n  _inherits(Stremsel, _Phaser$State);\n\n  function Stremsel() {\n    _classCallCheck(this, Stremsel);\n\n    _get(Object.getPrototypeOf(Stremsel.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Stremsel, [{\n    key: 'create',\n    value: function create() {\n      this.background = this.game.add.sprite(0, 0, 'background');\n\n      this.bg = this.game.add.sprite(this.game.width / 2, 300, '2_bg');\n      this.bg.anchor.setTo(0.5, 0.5);\n\n      // flesjes aanmaken\n      this.stremsel = this.game.add.sprite(520, 105, '2_stremsel');\n      this.zuursel = this.game.add.sprite(455, 110, '2_zuursel');\n\n      this.zuursel.anchor.set(0.5);\n      this.zuursel.inputEnabled = true;\n      this.zuursel.input.enableDrag(false, true);\n\n      this.stremsel.anchor.set(0.5);\n      this.stremsel.inputEnabled = true;\n      this.stremsel.input.enableDrag(false, true);\n\n      // particles\n      emitter = this.game.add.emitter(395, 340, 200);\n      emitter.makeParticles('1_drup');\n      emitter.setRotation(0);\n      emitter.setAlpha(0.3);\n      emitter.gravity = 1100;\n      emitter.start(false, 5000, 100);\n\n      // next\n      this.nextButton = this.game.add.button(this.game.width - 30, 30, 'arrow', this.nextClick, this);\n      this.nextButton.anchor.setTo(0.5, 0.5);\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      emitter.on = false;\n\n      // zuursel\n      if (495 < this.zuursel.x && this.zuursel.x < 813 && this.zuursel.y < 315) {\n        this.zuursel.rotation = (this.zuursel.x - 495) / 50;\n\n        if (this.zuursel.rotation > 2.9 && this.zuursel.rotation < 3.5) {\n          emitter.on = true;\n          emitter.x = this.zuursel.x;\n          emitter.y = this.zuursel.y + 65;\n          console.log(this.zuursel.rotation);\n        }\n      } else {\n        this.zuursel.rotation = 0;\n      }\n\n      // stremsel\n      if (522 < this.stremsel.x && this.stremsel.x < 840 && this.stremsel.y < 315) {\n        this.stremsel.rotation = (this.stremsel.x - 522) / 50;\n        if (this.stremsel.rotation > 2.9 && this.stremsel.rotation < 3.5) {\n          emitter.on = true;\n          emitter.x = this.stremsel.x;\n          emitter.y = this.stremsel.y + 65;\n          console.log(this.stremsel.rotation);\n        }\n      } else {\n        this.stremsel.rotation = 0;\n      }\n    }\n  }, {\n    key: 'nextClick',\n    value: function nextClick() {\n      this.game.state.start('Pers');\n    }\n  }]);\n\n  return Stremsel;\n})(Phaser.State);\n\nexports['default'] = Stremsel;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Stremsel.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Stremsel.js?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar bounds_right;\nvar bounds_left;\n\nvar Pers = (function (_Phaser$State) {\n  _inherits(Pers, _Phaser$State);\n\n  function Pers() {\n    _classCallCheck(this, Pers);\n\n    _get(Object.getPrototypeOf(Pers.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Pers, [{\n    key: 'create',\n    value: function create() {\n      this.background = this.game.add.sprite(0, 0, 'background');\n\n      this.plaat = this.game.add.sprite(322, 366, '3_plaat');\n      this.potjes_rechts = this.game.add.sprite(494, 300, '3_potjes_rechts');\n      this.potjes_links = this.game.add.sprite(390, 310, '3_potjes_links');\n      this.pers_rechts = this.game.add.sprite(550, 100, '3_pers_rechts');\n      this.pers_links = this.game.add.sprite(423, 150, '3_pers_links');\n      this.bg = this.game.add.sprite(this.game.width / 2, 250, '3_bg');\n      this.bg.anchor.setTo(0.5, 0.5);\n\n      // pers drags\n      this.pers_rechts.inputEnabled = true;\n      this.pers_links.inputEnabled = true;\n\n      this.pers_rechts.input.enableDrag();\n      this.pers_links.input.enableDrag();\n\n      this.pers_rechts.input.allowHorizontalDrag = false;\n      this.pers_links.input.allowHorizontalDrag = false;\n\n      // bounds\n      bounds_right = new Phaser.Rectangle(500, 95, 200, 270);\n      var graphics_right = this.game.add.graphics(bounds_right.x, bounds_right.y);\n      graphics_right.drawRect(0, 0, bounds_right.width, bounds_right.height);\n      this.pers_rechts.input.boundsRect = bounds_right;\n\n      bounds_left = new Phaser.Rectangle(400, 125, 200, 225);\n      var graphics_left = this.game.add.graphics(bounds_left.x, bounds_left.y);\n      graphics_left.drawRect(0, 0, bounds_left.width, bounds_left.height);\n      this.pers_links.input.boundsRect = bounds_left;\n\n      // next page\n      this.nextButton = this.game.add.button(this.game.width - 30, 30, 'arrow', this.nextClick, this);\n      this.nextButton.anchor.setTo(0.5, 0.5);\n    }\n  }, {\n    key: 'nextClick',\n    value: function nextClick() {\n      this.game.state.start('Rijpen');\n    }\n  }]);\n\n  return Pers;\n})(Phaser.State);\n\nexports['default'] = Pers;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Pers.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Pers.js?");

/***/ },
/* 7 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar scaling = 1;\nvar bounds;\nvar small_bounds;\n\nvar Rijpen = (function (_Phaser$State) {\n  _inherits(Rijpen, _Phaser$State);\n\n  function Rijpen() {\n    _classCallCheck(this, Rijpen);\n\n    _get(Object.getPrototypeOf(Rijpen.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Rijpen, [{\n    key: 'create',\n    value: function create() {\n      this.background = this.game.add.sprite(0, 0, 'background');\n\n      this.bg = this.game.add.sprite(100, 70, '4_bg');\n      this.kaasrek = this.game.add.sprite(100, 450, '4_kaasrek');\n\n      // kaasrek drag\n      this.kaasrek.inputEnabled = true;\n      this.kaasrek.input.enableDrag(false, true);\n      // this.kaasrek.input.allowVerticalDrag = false;\n      this.kaasrek.anchor.setTo(0.5, 0.5);\n\n      // bounds\n      bounds = new Phaser.Rectangle(0, 240, this.game.width, 600 - 240);\n      var graphics = this.game.add.graphics(bounds.x, bounds.y);\n      graphics.drawRect(0, 0, bounds.width, bounds.height);\n      this.kaasrek.input.boundsRect = bounds;\n\n      // small_bounds = new Phaser.Rectangle(390, 270, 300, 320);\n      // small_bounds = new Phaser.Rectangle(390, 290, 300, 280);\n      // var small_graphics = this.game.add.graphics(small_bounds.x, small_bounds.y);\n      // small_graphics.drawRect(0,0,small_bounds.width,small_bounds.height);\n\n      // nextpage\n      this.nextButton = this.game.add.button(this.game.width - 30, 30, 'arrow', this.nextClick, this);\n      this.nextButton.anchor.setTo(0.5, 0.5);\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      if (this.kaasrek.x > 490 && this.kaasrek.x < 520 && this.kaasrek.y < 440) {\n        console.log('ye' + scaling);\n        scaling -= 0.03;\n        if (scaling > 0.4) {\n          this.kaasrek.scale.set(scaling, scaling);\n        }\n        if (scaling < 0.4) {\n          // this.kaasrek.input.boundsRect = small_bounds;\n          this.kaasrek.x = 563;\n          this.kaasrek.y = 396;\n          this.kaasrek.input.draggable = false;\n        }\n      }\n    }\n  }, {\n    key: 'nextClick',\n    value: function nextClick() {\n      this.game.state.start('Etiketten');\n    }\n  }]);\n\n  return Rijpen;\n})(Phaser.State);\n\nexports['default'] = Rijpen;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Rijpen.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Rijpen.js?");

/***/ },
/* 8 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Etiketten = (function (_Phaser$State) {\n  _inherits(Etiketten, _Phaser$State);\n\n  function Etiketten() {\n    _classCallCheck(this, Etiketten);\n\n    _get(Object.getPrototypeOf(Etiketten.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Etiketten, [{\n    key: 'create',\n    value: function create() {\n      this.background = this.game.add.sprite(0, 0, 'background');\n\n      this.bg = this.game.add.sprite(90, 150, '5_bg');\n\n      this.kaasbol = this.game.add.sprite(500, 80, '5_kaasbol');\n      this.etiketten = this.game.add.sprite(400, 370, '5_etiketten');\n      this.etiketje = this.game.add.sprite(410, 380, '5_etiketje');\n      this.etiketje.events.onInputDown.add(this.etiketPush, this);\n      this.etiketje.alpha = 0;\n\n      this.etiketje.inputEnabled = true;\n      this.etiketje.input.enableDrag();\n\n      this.nextButton = this.game.add.button(this.game.width - 30, 30, 'arrow', this.nextClick, this);\n      this.nextButton.anchor.setTo(0.5, 0.5);\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      if (this.etiketje.x >= 557 && this.etiketje.x <= 607 && this.etiketje.y >= 136 && this.etiketje.y <= 186) {\n        this.etiketje.x = 582;\n        this.etiketje.y = 161;\n      }\n    }\n  }, {\n    key: 'etiketPush',\n    value: function etiketPush() {\n      console.log('jes');\n      this.etiketje.alpha = 1;\n    }\n  }, {\n    key: 'nextClick',\n    value: function nextClick() {\n      console.log('klik Rijping');\n      this.game.state.start('End');\n    }\n  }]);\n\n  return Etiketten;\n})(Phaser.State);\n\nexports['default'] = Etiketten;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Etiketten.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Etiketten.js?");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar End = (function (_Phaser$State) {\n  _inherits(End, _Phaser$State);\n\n  function End() {\n    _classCallCheck(this, End);\n\n    _get(Object.getPrototypeOf(End.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(End, [{\n    key: 'create',\n    value: function create() {\n      this.background = this.game.add.sprite(0, 0, 'background');\n\n      // this.background = this.game.add.tileSprite(0, 0, 736, 736, 'spritesheet', 'tile19.jpg');\n      // this.wallTop = this.game.add.tileSprite(0, 0, 736, 32, 'spritesheet', 'tile20.jpg');\n      // this.wallLeft = this.game.add.tileSprite(0, 0, 32, 736, 'spritesheet', 'tile20.jpg');\n      // this.wallBottom = this.game.add.tileSprite(0, 736 - 32, 736, 32, 'spritesheet', 'tile20.jpg');\n      // this.wallRight = this.game.add.tileSprite(736 - 32, 0, 32, 736, 'spritesheet', 'tile20.jpg');\n\n      // this.logo = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'logo');\n      // this.logo.anchor.setTo(0.5, 0.5);\n\n      this.verkooppuntButton = this.game.add.button(this.game.width / 2, this.game.height / 2, 'arrow', this.verkooppuntClick, this);\n      this.verkooppuntButton.anchor.setTo(0.5, 0.5);\n    }\n  }, {\n    key: 'verkooppuntClick',\n    value: function verkooppuntClick() {\n      console.log('the End');\n    }\n  }]);\n\n  return End;\n})(Phaser.State);\n\nexports['default'] = End;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/End.js\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/End.js?");

/***/ },
/* 10 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_scss/style.scss\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_scss/style.scss?");

/***/ }
/******/ ]);