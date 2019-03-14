webpackHotUpdate(6,{

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1174);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(482);

var _factory = __webpack_require__(998);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(999);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\blockchain\\Perk_UP\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: '',
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _context.prev = 1;
                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;
                _context.next = 7;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                  from: accounts[0]
                });

              case 7:
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);

                _this.setState({ errorMessage: _context.t0.message });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 9]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'Create a Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'wei',
        labelPosition: 'right',
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Create')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJmYWN0b3J5Iiwid2ViMyIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwic2V0U3RhdGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7Ozs7OztJQUVYLEE7Ozs7Ozs7Ozs7Ozs7OztzTkFDSixBOzJCQUFRLEFBQ2UsQUFDckI7b0JBRk0sQSxBQUVRO0FBRlIsQUFDTixhQUlKLEE7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBRFMsQUFDVCxBQUFNOztnQ0FERztnQ0FBQTt1QkFJYyxjQUFBLEFBQUssSUFKbkIsQUFJYyxBQUFTOzttQkFBMUI7QUFKRyxvQ0FBQTtnQ0FBQTt5Q0FLSCxBQUFRLFFBQVIsQUFDSCxlQUFlLE1BQUEsQUFBSyxNQURqQixBQUN1QixxQkFEdkIsQUFFSDt3QkFDTyxTQVJELEFBS0gsQUFFRSxBQUNFLEFBQVM7QUFEWCxBQUNKLGlCQUhFOzttQkFMRztnQ0FBQTtBQUFBOzttQkFBQTtnQ0FBQTtnREFXTDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQVh6QixBQVdMLEFBQWMsQUFBb0I7O21CQVg3QjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQWVBO21CQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFFQSxzQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx5Q0FBQSxBQUFDO2VBQUQsQUFDUSxBQUNOO3VCQUZGLEFBRWdCLEFBQ2Q7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLHFCQUFxQixNQUFBLEFBQU0sT0FBcEQsQUFBUyxBQUFjLEFBQW9DO0FBSnZFOztvQkFBQTtzQkFISixBQUNFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFWRixBQVVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQWZKLEFBQ0UsQUFHQSxBQVdFLEFBSUw7Ozs7O0FBekN1QixBLEFBNEMxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRjovYmxvY2tjaGFpbi9QZXJrX1VQIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "F:\\blockchain\\Perk_UP\\pages\\campaigns\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\blockchain\\Perk_UP\\pages\\campaigns\\new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43MGZmZGM4OTg4MTdlYjA0NTJkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz81MTg5MjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcblxyXG5jbGFzcyBDYW1wYWlnbk5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiAnJyxcclxuICAgIGVycm9yTWVzc2FnZTogJydcclxuICB9O1xyXG5cclxub25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxudHJ5IHtcclxuICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgYXdhaXQgZmFjdG9yeS5tZXRob2RzXHJcbiAgICAuY3JlYXRlQ2FtcGFpZ24odGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9uKVxyXG4gICAgLnNlbmQoe1xyXG4gICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgPGgzPkNyZWF0ZSBhIENhbXBhaWduPC9oMz5cclxuXHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+TWluaW11bSBDb250cmlidXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPVwid2VpXCJcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBtaW5pbXVtQ29udHJpYnV0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT5DcmVhdGU8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbk5ldztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFBQTtBQUtBO0FBR0E7QUFBQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBV0E7QUFDQTtBQURBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUpBOztBQUFBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=