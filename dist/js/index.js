/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _toggleMenu = __webpack_require__(2);

var _toggleMenu2 = _interopRequireDefault(_toggleMenu);

var _form = __webpack_require__(3);

var _form2 = _interopRequireDefault(_form);

var _customSelect = __webpack_require__(4);

var _customSelect2 = _interopRequireDefault(_customSelect);

var _dateToggle = __webpack_require__(5);

var _dateToggle2 = _interopRequireDefault(_dateToggle);

var _customSelectTravel = __webpack_require__(6);

var _customSelectTravel2 = _interopRequireDefault(_customSelectTravel);

var _sendForm = __webpack_require__(7);

var _sendForm2 = _interopRequireDefault(_sendForm);

var _validateForm = __webpack_require__(16);

var _validateForm2 = _interopRequireDefault(_validateForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  (0, _toggleMenu2.default)();
  (0, _form2.default)();
  var countrySelect = new _customSelect2.default({
    btn: 'country-btn',
    list: 'country-list'
  });
  countrySelect.init();

  pickmeup.defaults.locales['ru'] = {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
  };
  pickmeup('.calendar', {
    flat: true,
    mode: 'range',
    locale: 'ru',
    prev: '<img src="images/arrow.png">',
    next: '<img src="images/arrow.png">'
  });

  (0, _dateToggle2.default)();
  (0, _customSelectTravel2.default)();
  (0, _sendForm2.default)();
  (0, _validateForm2.default)();
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toggleMenu = function toggleMenu() {
  var btn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.popup-wrap');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    btn.classList.toggle('menu-btn_active');
    menu.classList.toggle('popup-wrap_active');
  });
};

exports.default = toggleMenu;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var form = function form() {
  var form = document.querySelector('.form');

  form.addEventListener('click', function (e) {
    var target = e.target;
    if (!target.closest('.form-item__label') && !target.closest('.consent__title')) {
      return;
    } else if (target.closest('.form-item__checkbox') || target.closest('.consent__checkbox')) return;
    target.classList.toggle('active');
  });
};

exports.default = form;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomSelectCountry = function () {
  function CustomSelectCountry(_ref) {
    var btn = _ref.btn,
        list = _ref.list,
        isInner = _ref.isInner;

    _classCallCheck(this, CustomSelectCountry);

    this.btn = document.getElementById(btn);
    this.list = document.getElementById(list);
    this.countries = this.list.querySelectorAll('.list');
  }

  _createClass(CustomSelectCountry, [{
    key: 'toggleList',
    value: function toggleList() {
      this.list.classList.toggle('list_opened');
      this.btn.classList.toggle('customselect__title_active');
      document.querySelector('.menu').classList.toggle('hidden');
      if (document.documentElement.clientWidth < 576) {
        document.querySelector('.menu-footer__link').classList.toggle('hidden');
      }
    }
  }, {
    key: 'showCountryBlock',
    value: function showCountryBlock(e) {
      var target = e.target;
      Array.from(this.countries).forEach(function (item) {
        if (target.closest('.list__title') === item.querySelector('.list__title')) {
          item.classList.toggle('title_opened');
        } else {
          item.classList.remove('title_opened');
        }
      });
    }
  }, {
    key: 'showChosenCountry',
    value: function showChosenCountry(e) {
      var target = e.target;
      if (!target.closest('.list__country')) return;
      this.toggleList();
      this.btn.textContent = target.textContent;
    }
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      this.btn.addEventListener('click', this.toggleList.bind(this));
      this.list.addEventListener('click', function (e) {
        _this.showCountryBlock(e);
        _this.showChosenCountry(e);
      });
    }
  }]);

  return CustomSelectCountry;
}();

exports.default = CustomSelectCountry;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dateToggle = function dateToggle() {
  var btn = document.getElementById('calendar-btn'),
      content = document.getElementById('calendar-cnt');

  btn.addEventListener('click', function () {
    content.classList.toggle('hidden');
    btn.classList.toggle('customselect__title_active');
    document.querySelector('.menu').classList.toggle('hidden');
    if (document.documentElement.clientWidth < 576) {
      document.querySelector('.menu-footer__link').classList.toggle('hidden');
    }
  });
};

exports.default = dateToggle;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var customSelectTravel = function customSelectTravel() {
  var btn = document.getElementById('travel-type-btn'),
      content = document.getElementById('travel-type-cnt');

  var toggleCnt = function toggleCnt() {
    content.classList.toggle('hidden');
    btn.classList.toggle('customselect__title_active');
    document.querySelector('.menu').classList.toggle('hidden');
    if (document.documentElement.clientWidth < 576) {
      document.querySelector('.menu-footer__link').classList.toggle('hidden');
    }
  };
  btn.addEventListener('click', toggleCnt);

  var choseType = function choseType() {
    var list = content.querySelector('.travel__list');
    list.addEventListener('click', function (e) {
      var target = e.target;
      if (!target.closest('.travel__type')) return;
      btn.textContent = target.textContent;
      toggleCnt();
    });
  };
  choseType();
};

exports.default = customSelectTravel;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sendForm = function sendForm() {
  var postData = function postData(body) {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/application/json'
      },
      body: JSON.stringify(body)
    });
  };
  document.body.addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.target.tagName.toLowerCase() !== 'form') return;
    var isFilled = false;
    Array.from(e.target.querySelectorAll('.input_required')).forEach(function (item) {
      if (item.classList.contains('consent__checkbox') && !item.checked) {
        item.parentNode.classList.add('consent__title_required');
        isFilled = false;
      } else if (item.classList.contains('consent__checkbox') && item.checked) {
        item.parentNode.classList.remove('consent__title_required');
        isFilled = true;
      } else if (!item.value) {
        item.style.borderColor = '#CB0037';
        if (item.nextElementSibling) {
          item.nextElementSibling.classList.remove('hidden');
        }
        isFilled = false;
      } else {
        item.style.borderColor = '';
        if (item.nextElementSibling) {
          item.nextElementSibling.classList.add('hidden');
        }
        isFilled = true;
      }
    });
    if (!isFilled) return;
    var formData = new FormData(e.target);
    var body = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;

        body[value[0]] = value[1];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    postData(body).then(function (response) {
      if (response.status !== 200) {
        throw new Error('status not 200');
      }
      e.target.querySelectorAll('input').forEach(function (input) {
        return input.value = '';
      });
    }).catch(function (error) {
      console.error(error);
    });
  });
};

exports.default = sendForm;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _maskPhone = __webpack_require__(17);

var _maskPhone2 = _interopRequireDefault(_maskPhone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateForm = function validateForm() {
  var rusTextInputs = document.querySelectorAll('#name, #place'),
      phoneInput = document.getElementById('phone'),
      textNumInput = document.getElementById('time');

  rusTextInputs.forEach(function (item) {
    item.addEventListener('input', function (e) {
      var input = e.target;
      input.value = input.value.replace(/[^а-яё ]/i, '');
    });
  });

  textNumInput.addEventListener('input', function (e) {
    var input = e.target;
    input.value = input.value.replace(/[a-z]/i, '');
  });

  (0, _maskPhone2.default)('#phone');
};
exports.default = validateForm;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function maskPhone(selector) {
	var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';

	var elem = document.querySelector(selector);

	function mask(event) {
		var keyCode = event.keyCode;
		var template = masked,
		    def = template.replace(/\D/g, ""),
		    val = this.value.replace(/\D/g, "");
		var i = 0,
		    newValue = template.replace(/[_\d]/g, function (a) {
			return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
		});
		i = newValue.indexOf("_");
		if (i != -1) {
			newValue = newValue.slice(0, i);
		}
		var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {
			return "\\d{1," + a.length + "}";
		}).replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
			this.value = newValue;
		}
		if (event.type == "blur" && this.value.length < 5) {
			this.value = "";
		}
	}

	elem.addEventListener("input", mask);
	elem.addEventListener("focus", mask);
	elem.addEventListener("blur", mask);
}

exports.default = maskPhone;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTUyMmQ5NWY3ZTIxMjYyMGU4ZjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9tYWluLnNhc3M/ZDQ2YyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy90b2dnbGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvY3VzdG9tU2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2RhdGVUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvY3VzdG9tU2VsZWN0VHJhdmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3NlbmRGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL3ZhbGlkYXRlRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tYXNrUGhvbmUuanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvdW50cnlTZWxlY3QiLCJjdXN0b21TZWxlY3RDb3VudHJ5IiwiYnRuIiwibGlzdCIsImluaXQiLCJwaWNrbWV1cCIsImRlZmF1bHRzIiwibG9jYWxlcyIsImRheXMiLCJkYXlzU2hvcnQiLCJkYXlzTWluIiwibW9udGhzIiwibW9udGhzU2hvcnQiLCJmbGF0IiwibW9kZSIsImxvY2FsZSIsInByZXYiLCJuZXh0IiwidG9nZ2xlTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJmb3JtIiwidGFyZ2V0IiwiY2xvc2VzdCIsIkN1c3RvbVNlbGVjdENvdW50cnkiLCJpc0lubmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb3VudHJpZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiaXRlbSIsInJlbW92ZSIsInRvZ2dsZUxpc3QiLCJ0ZXh0Q29udGVudCIsImJpbmQiLCJzaG93Q291bnRyeUJsb2NrIiwic2hvd0Nob3NlbkNvdW50cnkiLCJkYXRlVG9nZ2xlIiwiY29udGVudCIsImN1c3RvbVNlbGVjdFRyYXZlbCIsInRvZ2dsZUNudCIsImNob3NlVHlwZSIsInNlbmRGb3JtIiwicG9zdERhdGEiLCJib2R5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImlzRmlsbGVkIiwiY29udGFpbnMiLCJjaGVja2VkIiwicGFyZW50Tm9kZSIsImFkZCIsInZhbHVlIiwic3R5bGUiLCJib3JkZXJDb2xvciIsIm5leHRFbGVtZW50U2libGluZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJlbnRyaWVzIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJpbnB1dCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwidmFsaWRhdGVGb3JtIiwicnVzVGV4dElucHV0cyIsInBob25lSW5wdXQiLCJ0ZXh0TnVtSW5wdXQiLCJyZXBsYWNlIiwibWFza1Bob25lIiwic2VsZWN0b3IiLCJtYXNrZWQiLCJlbGVtIiwibWFzayIsImV2ZW50Iiwia2V5Q29kZSIsInRlbXBsYXRlIiwiZGVmIiwidmFsIiwiaSIsIm5ld1ZhbHVlIiwiYSIsImxlbmd0aCIsImNoYXJBdCIsImluZGV4T2YiLCJzbGljZSIsInJlZyIsInN1YnN0ciIsIlJlZ0V4cCIsInRlc3QiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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LEtBQWQsQ0FBRCxJQUF5QixLQUFLQSxLQUFMLENBQVdpQyxNQUFYLEdBQW9CLENBQTdDLElBQWtEUCxVQUFVLEVBQVYsSUFBZ0JBLFVBQVUsRUFBaEYsRUFBb0Y7QUFDbkYsUUFBSzFCLEtBQUwsR0FBYStCLFFBQWI7QUFDQTtBQUNELE1BQUlOLE1BQU1nQixJQUFOLElBQWMsTUFBZCxJQUF3QixLQUFLekMsS0FBTCxDQUFXaUMsTUFBWCxHQUFvQixDQUFoRCxFQUFtRDtBQUNsRCxRQUFLakMsS0FBTCxHQUFhLEVBQWI7QUFDQTtBQUVEOztBQUVEdUIsTUFBSzFGLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCMkYsSUFBL0I7QUFDQUQsTUFBSzFGLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCMkYsSUFBL0I7QUFDQUQsTUFBSzFGLGdCQUFMLENBQXNCLE1BQXRCLEVBQThCMkYsSUFBOUI7QUFDQTs7a0JBRWNKLFMiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk1MjJkOTVmN2UyMTI2MjBlOGY4IiwiaW1wb3J0ICcuLi9zdHlsZS9tYWluLnNhc3MnO1xuaW1wb3J0IHRvZ2dsZU1lbnUgZnJvbSBcIi4vbW9kdWxlcy90b2dnbGVNZW51XCI7XG5pbXBvcnQgZm9ybSBmcm9tIFwiLi9tb2R1bGVzL2Zvcm1cIjtcbmltcG9ydCBjdXN0b21TZWxlY3RDb3VudHJ5IGZyb20gXCIuL21vZHVsZXMvY3VzdG9tU2VsZWN0XCI7XG5pbXBvcnQgZGF0ZVRvZ2dsZSBmcm9tIFwiLi9tb2R1bGVzL2RhdGVUb2dnbGVcIjtcbmltcG9ydCBjdXN0b21TZWxlY3RUcmF2ZWwgZnJvbSBcIi4vbW9kdWxlcy9jdXN0b21TZWxlY3RUcmF2ZWxcIjtcbmltcG9ydCBzZW5kRm9ybSBmcm9tIFwiLi9tb2R1bGVzL3NlbmRGb3JtXCI7XG5pbXBvcnQgdmFsaWRhdGVGb3JtIGZyb20gXCIuL21vZHVsZXMvdmFsaWRhdGVGb3JtXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG4gIHRvZ2dsZU1lbnUoKTtcbiAgZm9ybSgpO1xuICBjb25zdCBjb3VudHJ5U2VsZWN0ID0gbmV3IGN1c3RvbVNlbGVjdENvdW50cnkoe1xuICAgIGJ0bjogJ2NvdW50cnktYnRuJyxcbiAgICBsaXN0OiAnY291bnRyeS1saXN0J1xuICB9KTtcbiAgY291bnRyeVNlbGVjdC5pbml0KCk7XG5cblxuICBwaWNrbWV1cC5kZWZhdWx0cy5sb2NhbGVzWydydSddID0ge1xuICAgIGRheXM6IFsn0JLQvtGB0LrRgNC10YHQtdC90YzQtScsICfQn9C+0L3QtdC00LXQu9GM0L3QuNC6JywgJ9CS0YLQvtGA0L3QuNC6JywgJ9Ch0YDQtdC00LAnLCAn0KfQtdGC0LLQtdGA0LMnLCAn0J/Rj9GC0L3QuNGG0LAnLCAn0KHRg9Cx0LHQvtGC0LAnXSxcbiAgICBkYXlzU2hvcnQ6IFsn0JLRgScsICfQn9C9JywgJ9CS0YInLCAn0KHRgCcsICfQp9GCJywgJ9Cf0YInLCAn0KHQsSddLFxuICAgIGRheXNNaW46IFsn0JLRgScsICfQn9C9JywgJ9CS0YInLCAn0KHRgCcsICfQp9GCJywgJ9Cf0YInLCAn0KHQsSddLFxuICAgIG1vbnRoczogWyfQr9C90LLQsNGA0YwnLCAn0KTQtdCy0YDQsNC70YwnLCAn0JzQsNGA0YInLCAn0JDQv9GA0LXQu9GMJywgJ9Cc0LDQuScsICfQmNGO0L3RjCcsICfQmNGO0LvRjCcsICfQkNCy0LPRg9GB0YInLCAn0KHQtdC90YLRj9Cx0YDRjCcsICfQntC60YLRj9Cx0YDRjCcsICfQndC+0Y/QsdGA0YwnLCAn0JTQtdC60LDQsdGA0YwnXSxcbiAgICBtb250aHNTaG9ydDogWyfQr9C90LInLCAn0KTQtdCyJywgJ9Cc0LDRgCcsICfQkNC/0YAnLCAn0JzQsNC5JywgJ9CY0Y7QvScsICfQmNGO0LsnLCAn0JDQstCzJywgJ9Ch0LXQvScsICfQntC60YInLCAn0J3QvtGPJywgJ9CU0LXQuiddXG4gIH07XG4gIHBpY2ttZXVwKCcuY2FsZW5kYXInLCB7XG4gICAgZmxhdCA6IHRydWUsXG4gICAgbW9kZSA6ICdyYW5nZScsXG4gICAgbG9jYWxlOiAncnUnLFxuICAgIHByZXY6ICc8aW1nIHNyYz1cImltYWdlcy9hcnJvdy5wbmdcIj4nLFxuICAgIG5leHQ6ICc8aW1nIHNyYz1cImltYWdlcy9hcnJvdy5wbmdcIj4nXG4gIH0pO1xuXG4gIGRhdGVUb2dnbGUoKTtcbiAgY3VzdG9tU2VsZWN0VHJhdmVsKCk7XG4gIHNlbmRGb3JtKCk7XG4gIHZhbGlkYXRlRm9ybSgpO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS9tYWluLnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnRuJyksXG4gICAgICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtd3JhcCcpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1idG5fYWN0aXZlJyk7XG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdwb3B1cC13cmFwX2FjdGl2ZScpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZU1lbnU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21vZHVsZXMvdG9nZ2xlTWVudS5qcyIsImNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZighdGFyZ2V0LmNsb3Nlc3QoJy5mb3JtLWl0ZW1fX2xhYmVsJykgJiYgIXRhcmdldC5jbG9zZXN0KCcuY29uc2VudF9fdGl0bGUnKSl7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KCcuZm9ybS1pdGVtX19jaGVja2JveCcpIHx8IHRhcmdldC5jbG9zZXN0KCcuY29uc2VudF9fY2hlY2tib3gnKSkgcmV0dXJuO1xuICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21vZHVsZXMvZm9ybS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVNlbGVjdENvdW50cnkge1xuICBjb25zdHJ1Y3Rvcih7YnRuLCBsaXN0LCBpc0lubmVyfSkge1xuICAgIHRoaXMuYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnRuKTtcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0KTtcbiAgICB0aGlzLmNvdW50cmllcyA9IHRoaXMubGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCcpO1xuICB9XG4gIHRvZ2dsZUxpc3QoKXtcbiAgICB0aGlzLmxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnbGlzdF9vcGVuZWQnKTtcbiAgICB0aGlzLmJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdjdXN0b21zZWxlY3RfX3RpdGxlX2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgaWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgNTc2KXtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWZvb3Rlcl9fbGluaycpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxuICBzaG93Q291bnRyeUJsb2NrKGUpe1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIEFycmF5LmZyb20odGhpcy5jb3VudHJpZXMpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZih0YXJnZXQuY2xvc2VzdCgnLmxpc3RfX3RpdGxlJykgPT09IGl0ZW0ucXVlcnlTZWxlY3RvcignLmxpc3RfX3RpdGxlJykpe1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3RpdGxlX29wZW5lZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd0aXRsZV9vcGVuZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG4gIHNob3dDaG9zZW5Db3VudHJ5KGUpe1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmKCF0YXJnZXQuY2xvc2VzdCgnLmxpc3RfX2NvdW50cnknKSkgcmV0dXJuO1xuICAgIHRoaXMudG9nZ2xlTGlzdCgpO1xuICAgIHRoaXMuYnRuLnRleHRDb250ZW50ID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICB9XG4gIGluaXQoKXtcbiAgICB0aGlzLmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlTGlzdC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgdGhpcy5zaG93Q291bnRyeUJsb2NrKGUpO1xuICAgICAgdGhpcy5zaG93Q2hvc2VuQ291bnRyeShlKTtcbiAgICB9KVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21vZHVsZXMvY3VzdG9tU2VsZWN0LmpzIiwiY29uc3QgZGF0ZVRvZ2dsZSA9ICgpID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGVuZGFyLWJ0bicpLFxuICAgICAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGVuZGFyLWNudCcpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdjdXN0b21zZWxlY3RfX3RpdGxlX2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgaWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgNTc2KXtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWZvb3Rlcl9fbGluaycpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRlVG9nZ2xlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tb2R1bGVzL2RhdGVUb2dnbGUuanMiLCJjb25zdCBjdXN0b21TZWxlY3RUcmF2ZWwgPSAoKSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmF2ZWwtdHlwZS1idG4nKSxcbiAgICAgICAgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmF2ZWwtdHlwZS1jbnQnKTtcblxuICBjb25zdCB0b2dnbGVDbnQgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnY3VzdG9tc2VsZWN0X190aXRsZV9hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGlmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDU3Nil7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1mb290ZXJfX2xpbmsnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9XG4gIH07XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNudCk7XG5cbiAgY29uc3QgY2hvc2VUeXBlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmF2ZWxfX2xpc3QnKTtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgIGlmKCF0YXJnZXQuY2xvc2VzdCgnLnRyYXZlbF9fdHlwZScpKSByZXR1cm47XG4gICAgICBidG4udGV4dENvbnRlbnQgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICB0b2dnbGVDbnQoKTtcbiAgICB9KTtcbiAgfTtcbiAgY2hvc2VUeXBlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21TZWxlY3RUcmF2ZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21vZHVsZXMvY3VzdG9tU2VsZWN0VHJhdmVsLmpzIiwiY29uc3Qgc2VuZEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHBvc3REYXRhID0gKGJvZHkpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goJy4vc2VydmVyLnBocCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9hcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICB9KTtcbiAgfTtcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnZm9ybScpIHJldHVybjtcbiAgICBsZXQgaXNGaWxsZWQgPSBmYWxzZTtcbiAgICBBcnJheS5mcm9tKGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dF9yZXF1aXJlZCcpKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnNlbnRfX2NoZWNrYm94JykgJiYgIWl0ZW0uY2hlY2tlZCl7XG4gICAgICAgIGl0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjb25zZW50X190aXRsZV9yZXF1aXJlZCcpO1xuICAgICAgICBpc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnY29uc2VudF9fY2hlY2tib3gnKSAmJiBpdGVtLmNoZWNrZWQpe1xuICAgICAgICBpdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY29uc2VudF9fdGl0bGVfcmVxdWlyZWQnKTtcbiAgICAgICAgaXNGaWxsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSBpZighaXRlbS52YWx1ZSl7XG4gICAgICAgIGl0ZW0uc3R5bGUuYm9yZGVyQ29sb3IgPSAnI0NCMDAzNyc7XG4gICAgICAgIGlmKGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uc3R5bGUuYm9yZGVyQ29sb3IgPSAnJztcbiAgICAgICAgaWYoaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBpc0ZpbGxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoIWlzRmlsbGVkKSByZXR1cm47XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGxldCBib2R5ID0ge307XG4gICAgZm9yKGxldCB2YWx1ZSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpe1xuICAgICAgYm9keVt2YWx1ZVswXV0gPSB2YWx1ZVsxXTtcbiAgICB9XG4gICAgcG9zdERhdGEoYm9keSlcbiAgICAgIC50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKXtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0YXR1cyBub3QgMjAwJyk7XG4gICAgICAgIH1cbiAgICAgICAgZS50YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gJycpO1xuXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRGb3JtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tb2R1bGVzL3NlbmRGb3JtLmpzIiwiaW1wb3J0IG1hc2tQaG9uZSBmcm9tIFwiLi9tYXNrUGhvbmVcIjtcblxuY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xuICBjb25zdCBydXNUZXh0SW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI25hbWUsICNwbGFjZScpLFxuICAgICAgICBwaG9uZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lJyksXG4gICAgICAgIHRleHROdW1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJyk7XG5cbiAgcnVzVGV4dElucHV0cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZS50YXJnZXQ7XG4gICAgICBpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlLnJlcGxhY2UoL1te0LAt0Y/RkSBdL2ksICcnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdGV4dE51bUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldDtcbiAgICBpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlLnJlcGxhY2UoL1thLXpdL2ksICcnKTtcbiAgfSk7XG5cbiAgbWFza1Bob25lKCcjcGhvbmUnKTtcbn07XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZUZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21vZHVsZXMvdmFsaWRhdGVGb3JtLmpzIiwiZnVuY3Rpb24gbWFza1Bob25lKHNlbGVjdG9yLCBtYXNrZWQgPSAnKzcgKF9fXykgX19fLV9fLV9fJykge1xyXG5cdGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHJcblx0ZnVuY3Rpb24gbWFzayhldmVudCkge1xyXG5cdFx0Y29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XHJcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IG1hc2tlZCxcclxuXHRcdFx0ZGVmID0gdGVtcGxhdGUucmVwbGFjZSgvXFxEL2csIFwiXCIpLFxyXG5cdFx0XHR2YWwgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcclxuXHRcdGxldCBpID0gMCxcclxuXHRcdFx0bmV3VmFsdWUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9bX1xcZF0vZywgZnVuY3Rpb24gKGEpIHtcclxuXHRcdFx0XHRyZXR1cm4gaSA8IHZhbC5sZW5ndGggPyB2YWwuY2hhckF0KGkrKykgfHwgZGVmLmNoYXJBdChpKSA6IGE7XHJcblx0XHRcdH0pO1xyXG5cdFx0aSA9IG5ld1ZhbHVlLmluZGV4T2YoXCJfXCIpO1xyXG5cdFx0aWYgKGkgIT0gLTEpIHtcclxuXHRcdFx0bmV3VmFsdWUgPSBuZXdWYWx1ZS5zbGljZSgwLCBpKTtcclxuXHRcdH1cclxuXHRcdGxldCByZWcgPSB0ZW1wbGF0ZS5zdWJzdHIoMCwgdGhpcy52YWx1ZS5sZW5ndGgpLnJlcGxhY2UoL18rL2csXHJcblx0XHRcdGZ1bmN0aW9uIChhKSB7XHJcblx0XHRcdFx0cmV0dXJuIFwiXFxcXGR7MSxcIiArIGEubGVuZ3RoICsgXCJ9XCI7XHJcblx0XHRcdH0pLnJlcGxhY2UoL1srKCldL2csIFwiXFxcXCQmXCIpO1xyXG5cdFx0cmVnID0gbmV3IFJlZ0V4cChcIl5cIiArIHJlZyArIFwiJFwiKTtcclxuXHRcdGlmICghcmVnLnRlc3QodGhpcy52YWx1ZSkgfHwgdGhpcy52YWx1ZS5sZW5ndGggPCA1IHx8IGtleUNvZGUgPiA0NyAmJiBrZXlDb2RlIDwgNTgpIHtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGV2ZW50LnR5cGUgPT0gXCJibHVyXCIgJiYgdGhpcy52YWx1ZS5sZW5ndGggPCA1KSB7XHJcblx0XHRcdHRoaXMudmFsdWUgPSBcIlwiO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG1hc2spO1xyXG5cdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIG1hc2spO1xyXG5cdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgbWFzayk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hc2tQaG9uZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbW9kdWxlcy9tYXNrUGhvbmUuanMiXSwic291cmNlUm9vdCI6IiJ9