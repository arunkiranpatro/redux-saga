(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src_components_PureComponents_TransactionsTab_js"],{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/array-sort/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-sort/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * array-sort <https://github.com/jonschlinkert/array-sort>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var defaultCompare = __webpack_require__(/*! default-compare */ "./node_modules/default-compare/index.js");
var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");
var get = __webpack_require__(/*! get-value */ "./node_modules/get-value/index.js");

/**
 * Sort an array of objects by one or more properties.
 *
 * @param  {Array} `arr` The Array to sort.
 * @param  {String|Array|Function} `props` One or more object paths or comparison functions.
 * @param  {Object} `opts` Pass `{ reverse: true }` to reverse the sort order.
 * @return {Array} Returns a sorted array.
 * @api public
 */

function arraySort(arr, props, opts) {
  if (arr == null) {
    return [];
  }

  if (!Array.isArray(arr)) {
    throw new TypeError('array-sort expects an array.');
  }

  if (arguments.length === 1) {
    return arr.sort();
  }

  var args = flatten([].slice.call(arguments, 1));

  // if the last argument appears to be a plain object,
  // it's not a valid `compare` arg, so it must be options.
  if (typeOf(args[args.length - 1]) === 'object') {
    opts = args.pop();
  }
  return arr.sort(sortBy(args, opts));
}

/**
 * Iterate over each comparison property or function until `1` or `-1`
 * is returned.
 *
 * @param  {String|Array|Function} `props` One or more object paths or comparison functions.
 * @param  {Object} `opts` Pass `{ reverse: true }` to reverse the sort order.
 * @return {Array}
 */

function sortBy(props, opts) {
  opts = opts || {};

  return function compareFn(a, b) {
    var len = props.length, i = -1;
    var result;

    while (++i < len) {
      result = compare(props[i], a, b);
      if (result !== 0) {
        break;
      }
    }
    if (opts.reverse === true) {
      return result * -1;
    }
    return result;
  };
}

/**
 * Compare `a` to `b`. If an object `prop` is passed, then
 * `a[prop]` is compared to `b[prop]`
 */

function compare(prop, a, b) {
  if (typeof prop === 'function') {
    // expose `compare` to custom function
    return prop(a, b, compare.bind(null, null));
  }
  // compare object values
  if (prop && typeof a === 'object' && typeof b === 'object') {
    return compare(null, get(a, prop), get(b, prop));
  }
  return defaultCompare(a, b);
}

/**
 * Flatten the given array.
 */

function flatten(arr) {
  return [].concat.apply([], arr);
}

/**
 * Expose `arraySort`
 */

module.exports = arraySort;


/***/ }),

/***/ "./src/components/ClassComponents/TransactionsList.js":
/*!************************************************************!*\
  !*** ./src/components/ClassComponents/TransactionsList.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.e, __webpack_require__.t, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _UILibrary_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../UILibrary/Loading */ "./src/components/UILibrary/Loading.js");
/* harmony import */ var _UILibrary_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../UILibrary/Table */ "./src/components/UILibrary/Table.js");
/* harmony import */ var _UILibrary_TableColumn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../UILibrary/TableColumn */ "./src/components/UILibrary/TableColumn.js");
/* harmony import */ var _UILibrary_TableRows__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../UILibrary/TableRows */ "./src/components/UILibrary/TableRows.js");
/* harmony import */ var _UILibrary_TableRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../UILibrary/TableRow */ "./src/components/UILibrary/TableRow.js");
/* harmony import */ var _store_actions_txnsListActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/txnsListActions */ "./src/store/actions/txnsListActions.js");
/* harmony import */ var _UILibrary_TableColumns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../UILibrary/TableColumns */ "./src/components/UILibrary/TableColumns.js");
















var Moment = react__WEBPACK_IMPORTED_MODULE_6___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_moment_locale_es-us_js-node_modules_react-moment_dist_index_js"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_es-us_js_")]).then(__webpack_require__.t.bind(__webpack_require__, /*! react-moment */ "./node_modules/react-moment/dist/index.js", 7));
});

var TransactionsList =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TransactionsList, _React$Component);

  function TransactionsList(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TransactionsList);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TransactionsList).call(this, props));
    _this.renderTablebody = _this.renderTablebody.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.renderTableHeader = _this.renderTableHeader.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TransactionsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getTxnslist();
    }
  }, {
    key: "renderTablebody",
    value: function renderTablebody(txns) {
      var childBody = txns.map(function (result, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableRows__WEBPACK_IMPORTED_MODULE_12__.default, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableRow__WEBPACK_IMPORTED_MODULE_13__.default, null, react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react__WEBPACK_IMPORTED_MODULE_6__.Suspense, {
          fallback: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_Loading__WEBPACK_IMPORTED_MODULE_9__.default, null)
        }, react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Moment, {
          format: "DD-MM-YYYY hh:mm a"
        }, result.TransactionDate))), react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableRow__WEBPACK_IMPORTED_MODULE_13__.default, null, result.TransactionID), react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableRow__WEBPACK_IMPORTED_MODULE_13__.default, null, result.TransactionType), react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableRow__WEBPACK_IMPORTED_MODULE_13__.default, null, result.CounterpartyEmail), react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableRow__WEBPACK_IMPORTED_MODULE_13__.default, null, result.NetAmount.AmountCurrency), react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableRow__WEBPACK_IMPORTED_MODULE_13__.default, null, result.TransLogBalanceCurrency));
      });
      return childBody;
    }
  }, {
    key: "renderTableHeader",
    value: function renderTableHeader(props) {
      return react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableColumns__WEBPACK_IMPORTED_MODULE_15__.default, props, react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableColumn__WEBPACK_IMPORTED_MODULE_11__.default, {
        id: "TransactionDate",
        sortable: true
      }, "Transaction Date"), react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableColumn__WEBPACK_IMPORTED_MODULE_11__.default, {
        id: "TransactionID",
        sortable: true
      }, "Transaction ID"), react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableColumn__WEBPACK_IMPORTED_MODULE_11__.default, {
        id: "TransactionType",
        sortable: true
      }, "Transaction Type"), react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableColumn__WEBPACK_IMPORTED_MODULE_11__.default, {
        id: "CounterpartyEmail"
      }, "Counter Party Email"), react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableColumn__WEBPACK_IMPORTED_MODULE_11__.default, {
        id: "NetAmount.Amount",
        sortable: true
      }, "Net Amount"), react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_TableColumn__WEBPACK_IMPORTED_MODULE_11__.default, {
        id: "TransLogBalanceCurrency"
      }, "Net Balance"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$txnslist = this.props.txnslist,
          txns = _this$props$txnslist.txns,
          isLoading = _this$props$txnslist.isLoading;
      var body = "No results found";

      if (isLoading) {
        body = react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_Loading__WEBPACK_IMPORTED_MODULE_9__.default, null);
      } else if (txns.length > 0) {
        body = react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_UILibrary_Table__WEBPACK_IMPORTED_MODULE_10__.default, {
          data: txns,
          renderTableHeader: this.renderTableHeader,
          renderTableBody: this.renderTablebody,
          sortColumn: "TransactionDate",
          sortDirection: "desc"
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, body);
    }
  }]);

  return TransactionsList;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));

TransactionsList.propTypes = {
  txnslist: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    txns: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array),
    isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
  }),
  getTxnslist: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    txnslist: state.txnslist,
    errors: state.errors
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(mapStateToProps, {
  getTxnslist: _store_actions_txnsListActions__WEBPACK_IMPORTED_MODULE_14__.getTxnslist
})(TransactionsList));

/***/ }),

/***/ "./src/components/PureComponents/TransactionsTab.js":
/*!**********************************************************!*\
  !*** ./src/components/PureComponents/TransactionsTab.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ClassComponents_TransactionsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ClassComponents/TransactionsList */ "./src/components/ClassComponents/TransactionsList.js");



var TransactionTab = function TransactionTab() {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ClassComponents_TransactionsList__WEBPACK_IMPORTED_MODULE_1__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionTab);

/***/ }),

/***/ "./src/components/UILibrary/Table.js":
/*!*******************************************!*\
  !*** ./src/components/UILibrary/Table.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var array_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! array-sort */ "./node_modules/array-sort/index.js");
/* harmony import */ var array_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(array_sort__WEBPACK_IMPORTED_MODULE_3__);





function Table(props) {
  var _props$onSort = props.onSort,
      onSort = _props$onSort === void 0 ? onSortDefault : _props$onSort,
      renderTableHeader = props.renderTableHeader,
      renderTableBody = props.renderTableBody;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.sortColumn),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      sortColumn = _useState2[0],
      setSortColumn = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.sortDirection),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      sortDirection = _useState4[0],
      setSortDirection = _useState4[1];

  function onSortDefault(column) {
    var data = props.data;

    if (column === sortColumn) {
      var direction = sortDirection === 'desc' ? 'asc' : 'desc';
      var reverse = direction === 'desc';
      data = array_sort__WEBPACK_IMPORTED_MODULE_3___default()(data, column, {
        reverse: reverse
      });
      setSortColumn(column);
      setSortDirection(direction);
    } else {
      data = array_sort__WEBPACK_IMPORTED_MODULE_3___default()(data, column, {
        reverse: true
      });
      setSortColumn(column);
      setSortDirection('desc');
    }
  }

  var config = {
    onSort: onSort,
    sortColumn: sortColumn,
    sortDirection: sortDirection
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("table", {
    className: "table-container"
  }, renderTableHeader(config), react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, renderTableBody(props.data)));
}

Table.propTypes = {
  sortColumn: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  sortDirection: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  renderTableBody: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  renderTableHeader: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  data: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array.isRequired),
  onSort: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./src/components/UILibrary/TableColumn.js":
/*!*************************************************!*\
  !*** ./src/components/UILibrary/TableColumn.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var TableColumn = function TableColumn(props) {
  var children = props.children,
      id = props.id,
      onSort = props.onSort,
      sortable = props.sortable;
  var className = "table-col";
  var onClick;
  var ariaSort;
  var sortIcon;
  var rest;

  function sortColumn(e) {
    onSort(e.target.id);
  }

  if (sortable) {
    className += " sortable";
    onClick = sortColumn;
    props.sortColumn === id ? props.sortDirection === "desc" ? (sortIcon = "\u2193", ariaSort = "descending") : (sortIcon = "\u2191", ariaSort = "ascending") : sortIcon = "";
  }

  rest = {
    className: className,
    onClick: onClick,
    "aria-sort": ariaSort
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    id: id
  }, rest), children, sortIcon);
};

TableColumn.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)]).isRequired,
  id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  onSort: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  sortable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  sortColumn: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  sortDirection: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableColumn);

/***/ }),

/***/ "./src/components/UILibrary/TableColumns.js":
/*!**************************************************!*\
  !*** ./src/components/UILibrary/TableColumns.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var TableColumns = function TableColumns(props) {
  var children = props.children,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, ["children"]);

  var links = react__WEBPACK_IMPORTED_MODULE_2___default().Children.map(children, function (child) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(child, _objectSpread({}, rest));
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, links));
};

TableColumns.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node)]).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableColumns);

/***/ }),

/***/ "./src/components/UILibrary/TableRow.js":
/*!**********************************************!*\
  !*** ./src/components/UILibrary/TableRow.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TableRow = function TableRow(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "table-details"
  }, children);
};

TableRow.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)]).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableRow);

/***/ }),

/***/ "./src/components/UILibrary/TableRows.js":
/*!***********************************************!*\
  !*** ./src/components/UILibrary/TableRows.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TableRows = function TableRows(props) {
  var children = props.children;
  var links = react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {});
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, links);
};

TableRows.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)]).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableRows);

/***/ }),

/***/ "./src/store/actions/txnsListActions.js":
/*!**********************************************!*\
  !*** ./src/store/actions/txnsListActions.js ***!
  \**********************************************/
/*! namespace exports */
/*! export getTxnslist [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTxnslist": () => /* binding */ getTxnslist
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/store/constants.js");
/* harmony import */ var _errorActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorActions */ "./src/store/actions/errorActions.js");
/* harmony import */ var _mockdata_TxnsLog_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mockdata/TxnsLog.json */ "./src/mockdata/TxnsLog.json");



var getTxnslist = function getTxnslist() {
  return function (dispatch) {
    (0,_errorActions__WEBPACK_IMPORTED_MODULE_1__.default)();
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.GET_TXNSLIST,
      payload: _mockdata_TxnsLog_json__WEBPACK_IMPORTED_MODULE_2__/* .default.pxResults */ .pxResults
    });
  };
};

/***/ }),

/***/ "./node_modules/default-compare/index.js":
/*!***********************************************!*\
  !*** ./node_modules/default-compare/index.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

/**
 * Basic sort algorithm that has similar behavior to `Array.prototype.sort`
 * for null and undefined, but also allows sorting by an object property.
 *
 * @param {Mixed} `a` First value to compare.
 * @param {Mixed} `b` Second value to compare.
 * @param {String} `prop` Optional property to use when comparing objects. If specified must be a string.
 * @return {Number} Returns 1 when `a` should come after `b`, -1 when `a` should come before `b`, and 0 when `a` and `b` are equal.
 * @api public
 */

module.exports = function defaultCompare(a, b, prop) {
  if (prop != null && typeOf(prop) !== 'string') {
    throw new TypeError('expected "prop" to be undefined or a string');
  }

  var typeA = typeOf(a);
  var typeB = typeOf(b);

  if (prop) {
    if (typeA === 'object') {
      a = a[prop];
      typeA = typeOf(a);
    }
    if (typeB === 'object') {
      b = b[prop];
      typeB = typeOf(b);
    }
  }

  if (typeA === 'null') {
    return typeB === 'null' ? 0 : (typeB === 'undefined' ? -1 : 1);
  } else if (typeA === 'undefined') {
    return typeB === 'null' ? 1 : (typeB === 'undefined' ? 0 : 1);
  } else if (typeB === 'null' || typeB === 'undefined') {
    return -1;
  } else {
    return a < b ? -1 : (a > b ? 1 : 0);
  }
};


/***/ }),

/***/ "./node_modules/get-value/index.js":
/*!*****************************************!*\
  !*** ./node_modules/get-value/index.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = function(obj, prop, a, b, c) {
  if (!isObject(obj) || !prop) {
    return obj;
  }

  prop = toString(prop);

  // allowing for multiple properties to be passed as
  // a string or array, but much faster (3-4x) than doing
  // `[].slice.call(arguments)`
  if (a) prop += '.' + toString(a);
  if (b) prop += '.' + toString(b);
  if (c) prop += '.' + toString(c);

  if (prop in obj) {
    return obj[prop];
  }

  var segs = prop.split('.');
  var len = segs.length;
  var i = -1;

  while (obj && (++i < len)) {
    var key = segs[i];
    while (key[key.length - 1] === '\\') {
      key = key.slice(0, -1) + '.' + segs[++i];
    }
    obj = obj[key];
  }
  return obj;
};

function isObject(val) {
  return val !== null && (typeof val === 'object' || typeof val === 'function');
}

function toString(val) {
  if (!val) return '';
  if (Array.isArray(val)) {
    return val.join('.');
  }
  return val;
}


/***/ }),

/***/ "./node_modules/kind-of/index.js":
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  var type = typeof val;

  // primitivies
  if (type === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (type === 'string' || val instanceof String) {
    return 'string';
  }
  if (type === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (type === 'function' || val instanceof Function) {
    if (typeof val.constructor.name !== 'undefined' && val.constructor.name.slice(0, 9) === 'Generator') {
      return 'generatorfunction';
    }
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }
  if (type === '[object Promise]') {
    return 'promise';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }
  
  if (type === '[object Map Iterator]') {
    return 'mapiterator';
  }
  if (type === '[object Set Iterator]') {
    return 'setiterator';
  }
  if (type === '[object String Iterator]') {
    return 'stringiterator';
  }
  if (type === '[object Array Iterator]') {
    return 'arrayiterator';
  }
  
  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  return val.constructor
    && typeof val.constructor.isBuffer === 'function'
    && val.constructor.isBuffer(val);
}


/***/ }),

/***/ "./src/mockdata/TxnsLog.json":
/*!***********************************!*\
  !*** ./src/mockdata/TxnsLog.json ***!
  \***********************************/
/*! default exports */
/*! export default [provided] [no usage info] [no name, virtual] */
/*!   export pxPageCount [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export pxResultCount [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export pxResults [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 10 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 11 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 12 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 13 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 14 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 15 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 16 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 17 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 18 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 19 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 20 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 21 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 22 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 23 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 24 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 25 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 26 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 27 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 28 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 29 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export DisputeIndicator [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 30 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 31 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export DisputeIndicator [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 8 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export 9 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!         other exports [not provided] [no usage info] */
/*!       export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!         exports [not provided] [no usage info] */
/*!       export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     other exports [not provided] [no usage info] */
/*!   export pxTotalResultCount [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export pxPageCount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export pxResultCount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export pxResults [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 10 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 11 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 12 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 13 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 14 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 15 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 16 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 17 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 18 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 19 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 20 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 21 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 22 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 23 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 24 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 25 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 26 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 27 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 28 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 29 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export DisputeIndicator [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 30 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 31 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export BackupFundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export DisputeIndicator [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 8 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export 9 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Balance [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export CardLast4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterPartyAccountNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyAccountType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyName [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export CounterpartyTransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export EmailAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Fee [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export FinancialInstrument [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export FundingSource [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export GrossAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export NetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Amount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export AmountCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export Currency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export FormattedAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export LocalizedCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export PositiveTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export SFTransAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export Status [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export ToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransAmountRange [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogBalanceCurrency [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransLogNetBalance [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionFlagList [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     export TransactionID [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionNetAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export TransactionType [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export UsdEquivalent [provided] [no usage info] [missing usage info prevents renaming] */
/*!       exports [not provided] [no usage info] */
/*!     export pyCaption [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   other exports [not provided] [no usage info] */
/*! export pxTotalResultCount [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"pxPageCount\":\"1\",\"pxResultCount\":\"32\",\"pxTotalResultCount\":\"32\",\"pxResults\":[{\"CounterPartyAccountNumber\":\"2062763970225309879\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"The Artisan\",\"CounterpartyStatus\":\"open\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Null\",\"PositiveTransAmount\":\"$11.35 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$11.35 USD\",\"Status\":\"Placed\",\"ToFrom\":\"From The Artisan\",\"TransactionDate\":\"2020-02-02T14:14:28.000Z\",\"TransactionID\":\"20114507003642015\",\"TransactionNetAmount\":\"11.35\",\"TransactionType\":\"Temporary Hold\",\"TransAmountRange\":\"$11.35 USD\",\"TransLogBalance\":\"11.35\",\"TransLogBalanceCurrency\":\"$11.35 USD\",\"TransLogNetAmount\":\"11.35\",\"TransLogNetBalance\":\"$11.35 USD\",\"Balance\":{\"Amount\":\"11.35\",\"AmountCurrency\":\"11.35 USD\",\"FormattedAmount\":\"$11.35 USD\",\"LocalizedCurrency\":\"$11.35 USD\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"$0.00 USD\"},\"GrossAmount\":{\"Amount\":\"11.35\",\"AmountCurrency\":\"11.35 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$11.35 USD\",\"LocalizedCurrency\":\"$11.35 USD\"},\"NetAmount\":{\"Amount\":\"11.35\",\"AmountCurrency\":\"11.35 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$11.35 USD\",\"LocalizedCurrency\":\"$11.35 USD\"},\"TransactionFlagList\":[],\"UsdEquivalent\":{}},{\"CounterPartyAccountNumber\":\"2062763970225309879\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"The Artisan\",\"CounterpartyStatus\":\"open\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Null\",\"PositiveTransAmount\":\"$11.35 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$11.35 USD\",\"Status\":\"Placed\",\"ToFrom\":\"From The Artisan\",\"TransactionDate\":\"2020-01-25T13:14:28.000Z\",\"TransactionID\":\"20114507003635753\",\"TransactionNetAmount\":\"11.35\",\"TransactionType\":\"Temporary Hold\",\"TransAmountRange\":\"$11.35 USD\",\"TransLogBalance\":\"11.35\",\"TransLogBalanceCurrency\":\"$11.35 USD\",\"TransLogNetAmount\":\"11.35\",\"TransLogNetBalance\":\"$11.35 USD\",\"Balance\":{\"Amount\":\"11.35\",\"AmountCurrency\":\"11.35 USD\",\"FormattedAmount\":\"$11.35 USD\",\"LocalizedCurrency\":\"$11.35 USD\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"$0.00 USD\"},\"GrossAmount\":{\"Amount\":\"11.35\",\"AmountCurrency\":\"11.35 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$11.35 USD\",\"LocalizedCurrency\":\"$11.35 USD\"},\"NetAmount\":{\"Amount\":\"11.35\",\"AmountCurrency\":\"11.35 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$11.35 USD\",\"LocalizedCurrency\":\"$11.35 USD\"},\"TransactionFlagList\":[],\"UsdEquivalent\":{}},{\"CardLast4\":\"7186\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"...\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Null\",\"PositiveTransAmount\":\"$12.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$12.00 USD\",\"Status\":\"Completed\",\"ToFrom\":\"From ...\",\"TransactionDate\":\"2020-01-15T16:25:28.000Z\",\"TransactionID\":\"20114574200289376\",\"TransactionNetAmount\":\"12.00\",\"TransactionType\":\"Charge From Credit Card\",\"TransAmountRange\":\"$12.00 USD\",\"TransLogBalance\":\"14.00\",\"TransLogBalanceCurrency\":\"$14.00 USD\",\"TransLogNetAmount\":\"12.00\",\"TransLogNetBalance\":\"$12.00 USD\",\"Balance\":{\"Amount\":\"14.00\",\"AmountCurrency\":\"14.0 USD\",\"FormattedAmount\":\"$14.00 USD\",\"LocalizedCurrency\":\"$14.00 USD\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"$0.00 USD\"},\"GrossAmount\":{\"Amount\":\"12.00\",\"AmountCurrency\":\"12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$12.00 USD\",\"LocalizedCurrency\":\"$12.00 USD\"},\"NetAmount\":{\"Amount\":\"12.00\",\"AmountCurrency\":\"12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$12.00 USD\",\"LocalizedCurrency\":\"$12.00 USD\"},\"TransactionFlagList\":[],\"UsdEquivalent\":{}},{\"CardLast4\":\"7186\",\"CounterPartyAccountNumber\":\"2062763970225309879\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"The Artisan\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114507000019274\",\"DisputeIndicator\":\"pi pi-circle-filled DisputeIcon-1x\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Card\",\"FundingSource\":\"Credit Card MasterCard Credit Card XXXX-XXXX-XXXX-7186\",\"PositiveTransAmount\":\"$12.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$12.00 USD\",\"Status\":\"Held\",\"ToFrom\":\"To The Artisan\",\"TransactionDate\":\"2020-01-02T16:35:28.000Z\",\"TransactionID\":\"20114507000019273\",\"TransactionNetAmount\":\"-12.00\",\"TransactionType\":\"Credit Card Payment Sent\",\"TransAmountRange\":\"-$12.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-12.00\",\"TransLogNetBalance\":\"-$12.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"$2.00 USD\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"$0.00 USD\"},\"GrossAmount\":{\"Amount\":\"-12.00\",\"AmountCurrency\":\"-12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$12.00 USD\",\"LocalizedCurrency\":\"-$12.00 USD\"},\"NetAmount\":{\"Amount\":\"-12.00\",\"AmountCurrency\":\"-12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$12.00 USD\",\"LocalizedCurrency\":\"-$12.00 USD\"},\"TransactionFlagList\":[\"11\",\"12\",\"24\",\"39\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"7186\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"...\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Null\",\"PositiveTransAmount\":\"$12.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$12.00 USD\",\"Status\":\"Completed\",\"ToFrom\":\"From ...\",\"TransactionDate\":\"2020-01-02T16:14:28.000Z\",\"TransactionID\":\"20114574200288815\",\"TransactionNetAmount\":\"12.00\",\"TransactionType\":\"Charge From Credit Card\",\"TransAmountRange\":\"$12.00 USD\",\"TransLogBalance\":\"14.00\",\"TransLogBalanceCurrency\":\"$14.00 USD\",\"TransLogNetAmount\":\"12.00\",\"TransLogNetBalance\":\"$12.00 USD\",\"Balance\":{\"Amount\":\"14.00\",\"AmountCurrency\":\"14.0 USD\",\"FormattedAmount\":\"$14.00 USD\",\"LocalizedCurrency\":\"$14.00 USD\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"$0.00 USD\"},\"GrossAmount\":{\"Amount\":\"12.00\",\"AmountCurrency\":\"12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$12.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"12.00\",\"AmountCurrency\":\"12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$12.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[],\"UsdEquivalent\":{}},{\"CardLast4\":\"7186\",\"CounterPartyAccountNumber\":\"2062763970225309879\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"The Artisan\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114511313268042\",\"DisputeIndicator\":\"pi pi-circle-filled DisputeIcon-1x\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Card\",\"FundingSource\":\"Credit Card MasterCard Credit Card XXXX-XXXX-XXXX-7186\",\"PositiveTransAmount\":\"$12.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$12.00 USD\",\"Status\":\"Held\",\"ToFrom\":\"To The Artisan\",\"TransactionDate\":\"2020-01-02T16:14:28.000Z\",\"TransactionID\":\"20114511313268041\",\"TransactionNetAmount\":\"-12.00\",\"TransactionType\":\"Credit Card Payment Sent\",\"TransAmountRange\":\"-$12.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-12.00\",\"TransLogNetBalance\":\"-$12.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-12.00\",\"AmountCurrency\":\"-12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$12.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-12.00\",\"AmountCurrency\":\"-12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$12.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"11\",\"12\",\"24\",\"39\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"7186\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"...\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Null\",\"PositiveTransAmount\":\"$12.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$12.00 USD\",\"Status\":\"Completed\",\"ToFrom\":\"From ...\",\"TransactionDate\":\"2019-12-24T16:14:28.000Z\",\"TransactionID\":\"20114574200288347\",\"TransactionNetAmount\":\"12.00\",\"TransactionType\":\"Charge From Credit Card\",\"TransAmountRange\":\"$12.00 USD\",\"TransLogBalance\":\"14.00\",\"TransLogBalanceCurrency\":\"$14.00 USD\",\"TransLogNetAmount\":\"12.00\",\"TransLogNetBalance\":\"$12.00 USD\",\"Balance\":{\"Amount\":\"14.00\",\"AmountCurrency\":\"14.0 USD\",\"FormattedAmount\":\"$14.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"12.00\",\"AmountCurrency\":\"12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$12.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"12.00\",\"AmountCurrency\":\"12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$12.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[],\"UsdEquivalent\":{}},{\"CardLast4\":\"7186\",\"CounterPartyAccountNumber\":\"2062763970225309879\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"The Artisan\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114511313267686\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Card\",\"FundingSource\":\"Credit Card MasterCard Credit Card XXXX-XXXX-XXXX-7186\",\"PositiveTransAmount\":\"$12.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$12.00 USD\",\"Status\":\"Completed\",\"ToFrom\":\"To The Artisan\",\"TransactionDate\":\"2019-12-02T16:45:28.000Z\",\"TransactionID\":\"20114511313267685\",\"TransactionNetAmount\":\"-12.00\",\"TransactionType\":\"Credit Card Payment Sent\",\"TransAmountRange\":\"-$12.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-12.00\",\"TransLogNetBalance\":\"-$12.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-12.00\",\"AmountCurrency\":\"-12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$12.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-12.00\",\"AmountCurrency\":\"-12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$12.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"24\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"7186\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"...\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Null\",\"PositiveTransAmount\":\"$12.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$12.00 USD\",\"Status\":\"Completed\",\"ToFrom\":\"From ...\",\"TransactionDate\":\"2019-12-02T16:14:28.000Z\",\"TransactionID\":\"20114574200287597\",\"TransactionNetAmount\":\"12.00\",\"TransactionType\":\"Charge From Credit Card\",\"TransAmountRange\":\"$12.00 USD\",\"TransLogBalance\":\"14.00\",\"TransLogBalanceCurrency\":\"$14.00 USD\",\"TransLogNetAmount\":\"12.00\",\"TransLogNetBalance\":\"$12.00 USD\",\"Balance\":{\"Amount\":\"14.00\",\"AmountCurrency\":\"14.0 USD\",\"FormattedAmount\":\"$14.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"12.00\",\"AmountCurrency\":\"12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$12.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"12.00\",\"AmountCurrency\":\"12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$12.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[],\"UsdEquivalent\":{}},{\"CardLast4\":\"7186\",\"CounterPartyAccountNumber\":\"2062763970225309879\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"The Artisan\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114511313266767\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Card\",\"FundingSource\":\"Credit Card MasterCard Credit Card XXXX-XXXX-XXXX-7186\",\"PositiveTransAmount\":\"$12.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$12.00 USD\",\"Status\":\"Completed\",\"ToFrom\":\"To The Artisan\",\"TransactionDate\":\"2019-08-02T16:14:28.000Z\",\"TransactionID\":\"20114511313266766\",\"TransactionNetAmount\":\"-12.00\",\"TransactionType\":\"Credit Card Payment Sent\",\"TransAmountRange\":\"-$12.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-12.00\",\"TransLogNetBalance\":\"-$12.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-12.00\",\"AmountCurrency\":\"-12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$12.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-12.00\",\"AmountCurrency\":\"-12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$12.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"24\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"7186\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"...\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Null\",\"PositiveTransAmount\":\"$12.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$12.00 USD\",\"Status\":\"Completed\",\"ToFrom\":\"From ...\",\"TransactionDate\":\"2019-08-02T16:14:28.000Z\",\"TransactionID\":\"20114574200287041\",\"TransactionNetAmount\":\"12.00\",\"TransactionType\":\"Charge From Credit Card\",\"TransAmountRange\":\"$12.00 USD\",\"TransLogBalance\":\"14.00\",\"TransLogBalanceCurrency\":\"$14.00 USD\",\"TransLogNetAmount\":\"12.00\",\"TransLogNetBalance\":\"$12.00 USD\",\"Balance\":{\"Amount\":\"14.00\",\"AmountCurrency\":\"14.0 USD\",\"FormattedAmount\":\"$14.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"12.00\",\"AmountCurrency\":\"12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$12.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"12.00\",\"AmountCurrency\":\"12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$12.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[],\"UsdEquivalent\":{}},{\"CardLast4\":\"7186\",\"CounterPartyAccountNumber\":\"2062763970225309879\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"The Artisan\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114511313265778\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Card\",\"FundingSource\":\"Credit Card MasterCard Credit Card XXXX-XXXX-XXXX-7186\",\"PositiveTransAmount\":\"$12.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$12.00 USD\",\"Status\":\"Completed\",\"ToFrom\":\"To The Artisan\",\"TransactionDate\":\"2019-08-02T16:14:28.000Z\",\"TransactionID\":\"20114511313265777\",\"TransactionNetAmount\":\"-12.00\",\"TransactionType\":\"Credit Card Payment Sent\",\"TransAmountRange\":\"-$12.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-12.00\",\"TransLogNetBalance\":\"-$12.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-12.00\",\"AmountCurrency\":\"-12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$12.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-12.00\",\"AmountCurrency\":\"-12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$12.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"24\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"1971\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"Bank Account\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$21.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$21.00 USD\",\"Status\":\"Processing\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"From Bank Account\",\"TransactionDate\":\"2019-09-02T16:14:28.000Z\",\"TransactionID\":\"20114506999743649\",\"TransactionNetAmount\":\"21.00\",\"TransactionType\":\"Inst. Tran. Add Funds from a Bank Account\",\"TransAmountRange\":\"$21.00 USD\",\"TransLogBalance\":\"23.00\",\"TransLogBalanceCurrency\":\"$23.00 USD\",\"TransLogNetAmount\":\"21.00\",\"TransLogNetBalance\":\"$21.00 USD\",\"Balance\":{\"Amount\":\"23.00\",\"AmountCurrency\":\"23.0 USD\",\"FormattedAmount\":\"$23.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"21.00\",\"AmountCurrency\":\"21.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$21.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"21.00\",\"AmountCurrency\":\"21.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$21.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\"],\"UsdEquivalent\":{}},{\"BackupFundingSource\":\"Visa Credit Card XXXX-XXXX-XXXX-3382\",\"CardLast4\":\"1971\",\"CounterPartyAccountNumber\":\"1799949951300477773\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"Concepcion Web Design\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114506999743646\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"Instant Transfer BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$21.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$21.00 USD\",\"Status\":\"Completed\",\"ToFrom\":\"To Concepcion Web Design\",\"TransactionDate\":\"2019-09-02T16:14:28.000Z\",\"TransactionID\":\"20114506999743645\",\"TransactionNetAmount\":\"-21.00\",\"TransactionType\":\"Instant Transfer Sent\",\"TransAmountRange\":\"-$21.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-21.00\",\"TransLogNetBalance\":\"-$21.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-21.00\",\"AmountCurrency\":\"-21.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$21.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-21.00\",\"AmountCurrency\":\"-21.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$21.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\",\"24\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"1971\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"Bank Account\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$20.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$20.00 USD\",\"Status\":\"Processing\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"From Bank Account\",\"TransactionDate\":\"2019-10-02T16:14:28.000Z\",\"TransactionID\":\"20114506999741336\",\"TransactionNetAmount\":\"20.00\",\"TransactionType\":\"Inst. Tran. Add Funds from a Bank Account\",\"TransAmountRange\":\"$20.00 USD\",\"TransLogBalance\":\"22.00\",\"TransLogBalanceCurrency\":\"$22.00 USD\",\"TransLogNetAmount\":\"20.00\",\"TransLogNetBalance\":\"$20.00 USD\",\"Balance\":{\"Amount\":\"22.00\",\"AmountCurrency\":\"22.0 USD\",\"FormattedAmount\":\"$22.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"20.00\",\"AmountCurrency\":\"20.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$20.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"20.00\",\"AmountCurrency\":\"20.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$20.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\"],\"UsdEquivalent\":{}},{\"BackupFundingSource\":\"Visa Credit Card XXXX-XXXX-XXXX-3382\",\"CardLast4\":\"1971\",\"CounterPartyAccountNumber\":\"1799949951300477773\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"Concepcion Web Design\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114506999741333\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"Instant Transfer BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$20.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$20.00 USD\",\"Status\":\"Completed\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"To Concepcion Web Design\",\"TransactionDate\":\"2019-10-02T16:14:28.000Z\",\"TransactionID\":\"20114506999741332\",\"TransactionNetAmount\":\"-20.00\",\"TransactionType\":\"Instant Transfer Sent\",\"TransAmountRange\":\"-$20.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-20.00\",\"TransLogNetBalance\":\"-$20.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-20.00\",\"AmountCurrency\":\"-20.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$20.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-20.00\",\"AmountCurrency\":\"-20.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$20.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\",\"24\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"1971\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"Bank Account\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$19.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$19.00 USD\",\"Status\":\"Processing\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"From Bank Account\",\"TransactionDate\":\"2019-10-02T16:14:28.000Z\",\"TransactionID\":\"20114506999739667\",\"TransactionNetAmount\":\"19.00\",\"TransactionType\":\"Inst. Tran. Add Funds from a Bank Account\",\"TransAmountRange\":\"$19.00 USD\",\"TransLogBalance\":\"21.00\",\"TransLogBalanceCurrency\":\"$21.00 USD\",\"TransLogNetAmount\":\"19.00\",\"TransLogNetBalance\":\"$19.00 USD\",\"Balance\":{\"Amount\":\"21.00\",\"AmountCurrency\":\"21.0 USD\",\"FormattedAmount\":\"$21.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"19.00\",\"AmountCurrency\":\"19.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$19.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"19.00\",\"AmountCurrency\":\"19.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$19.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\"],\"UsdEquivalent\":{}},{\"BackupFundingSource\":\"Visa Credit Card XXXX-XXXX-XXXX-3382\",\"CardLast4\":\"1971\",\"CounterPartyAccountNumber\":\"1799949951300477773\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"Concepcion Web Design\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114506999739664\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"Instant Transfer BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$19.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$19.00 USD\",\"Status\":\"Completed\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"To Concepcion Web Design\",\"TransactionDate\":\"2019-11-02T16:14:28.000Z\",\"TransactionID\":\"20114506999739663\",\"TransactionNetAmount\":\"-19.00\",\"TransactionType\":\"Instant Transfer Sent\",\"TransAmountRange\":\"-$19.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-19.00\",\"TransLogNetBalance\":\"-$19.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-19.00\",\"AmountCurrency\":\"-19.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$19.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-19.00\",\"AmountCurrency\":\"-19.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$19.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\",\"24\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"1971\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"Bank Account\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$18.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$18.00 USD\",\"Status\":\"Processing\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"From Bank Account\",\"TransactionDate\":\"2019-11-02T16:14:28.000Z\",\"TransactionID\":\"20114506999735161\",\"TransactionNetAmount\":\"18.00\",\"TransactionType\":\"Inst. Tran. Add Funds from a Bank Account\",\"TransAmountRange\":\"$18.00 USD\",\"TransLogBalance\":\"20.00\",\"TransLogBalanceCurrency\":\"$20.00 USD\",\"TransLogNetAmount\":\"18.00\",\"TransLogNetBalance\":\"$18.00 USD\",\"Balance\":{\"Amount\":\"20.00\",\"AmountCurrency\":\"20.0 USD\",\"FormattedAmount\":\"$20.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"18.00\",\"AmountCurrency\":\"18.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$18.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"18.00\",\"AmountCurrency\":\"18.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$18.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\"],\"UsdEquivalent\":{}},{\"BackupFundingSource\":\"Visa Credit Card XXXX-XXXX-XXXX-3382\",\"CardLast4\":\"1971\",\"CounterPartyAccountNumber\":\"1799949951300477773\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"Concepcion Web Design\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114506999735158\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"Instant Transfer BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$18.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$18.00 USD\",\"Status\":\"Completed\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"To Concepcion Web Design\",\"TransactionDate\":\"2019-01-02T16:14:28.000Z\",\"TransactionID\":\"20114506999735157\",\"TransactionNetAmount\":\"-18.00\",\"TransactionType\":\"Instant Transfer Sent\",\"TransAmountRange\":\"-$18.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-18.00\",\"TransLogNetBalance\":\"-$18.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-18.00\",\"AmountCurrency\":\"-18.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$18.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-18.00\",\"AmountCurrency\":\"-18.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$18.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\",\"24\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"1971\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"Bank Account\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$17.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$17.00 USD\",\"Status\":\"Processing\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"From Bank Account\",\"TransactionDate\":\"2019-02-02T16:14:28.000Z\",\"TransactionID\":\"20114506999732425\",\"TransactionNetAmount\":\"17.00\",\"TransactionType\":\"Inst. Tran. Add Funds from a Bank Account\",\"TransAmountRange\":\"$17.00 USD\",\"TransLogBalance\":\"19.00\",\"TransLogBalanceCurrency\":\"$19.00 USD\",\"TransLogNetAmount\":\"17.00\",\"TransLogNetBalance\":\"$17.00 USD\",\"Balance\":{\"Amount\":\"19.00\",\"AmountCurrency\":\"19.0 USD\",\"FormattedAmount\":\"$19.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"17.00\",\"AmountCurrency\":\"17.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$17.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"17.00\",\"AmountCurrency\":\"17.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$17.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\"],\"UsdEquivalent\":{}},{\"BackupFundingSource\":\"Visa Credit Card XXXX-XXXX-XXXX-3382\",\"CardLast4\":\"1971\",\"CounterPartyAccountNumber\":\"1799949951300477773\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"Concepcion Web Design\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114506999732422\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"Instant Transfer BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$17.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$17.00 USD\",\"Status\":\"Completed\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"To Concepcion Web Design\",\"TransactionDate\":\"2019-03-02T16:14:28.000Z\",\"TransactionID\":\"20114506999732421\",\"TransactionNetAmount\":\"-17.00\",\"TransactionType\":\"Instant Transfer Sent\",\"TransAmountRange\":\"-$17.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-17.00\",\"TransLogNetBalance\":\"-$17.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-17.00\",\"AmountCurrency\":\"-17.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$17.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-17.00\",\"AmountCurrency\":\"-17.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$17.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\",\"24\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"1971\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"Bank Account\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$16.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$16.00 USD\",\"Status\":\"Processing\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"From Bank Account\",\"TransactionDate\":\"2019-04-02T16:14:28.000Z\",\"TransactionID\":\"20114511312981549\",\"TransactionNetAmount\":\"16.00\",\"TransactionType\":\"Inst. Tran. Add Funds from a Bank Account\",\"TransAmountRange\":\"$16.00 USD\",\"TransLogBalance\":\"18.00\",\"TransLogBalanceCurrency\":\"$18.00 USD\",\"TransLogNetAmount\":\"16.00\",\"TransLogNetBalance\":\"$16.00 USD\",\"Balance\":{\"Amount\":\"18.00\",\"AmountCurrency\":\"18.0 USD\",\"FormattedAmount\":\"$18.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"16.00\",\"AmountCurrency\":\"16.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$16.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"16.00\",\"AmountCurrency\":\"16.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$16.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\"],\"UsdEquivalent\":{}},{\"BackupFundingSource\":\"Visa Credit Card XXXX-XXXX-XXXX-3382\",\"CardLast4\":\"1971\",\"CounterPartyAccountNumber\":\"1799949951300477773\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"Concepcion Web Design\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114511312981546\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"Instant Transfer BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$16.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$16.00 USD\",\"Status\":\"Completed\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"To Concepcion Web Design\",\"TransactionDate\":\"2019-05-02T16:14:28.000Z\",\"TransactionID\":\"20114511312981545\",\"TransactionNetAmount\":\"-16.00\",\"TransactionType\":\"Instant Transfer Sent\",\"TransAmountRange\":\"-$16.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-16.00\",\"TransLogNetBalance\":\"-$16.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-16.00\",\"AmountCurrency\":\"-16.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$16.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-16.00\",\"AmountCurrency\":\"-16.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$16.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\",\"24\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"1971\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"Bank Account\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$15.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$15.00 USD\",\"Status\":\"Processing\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"From Bank Account\",\"TransactionDate\":\"2019-06-02T16:14:28.000Z\",\"TransactionID\":\"20114506999725326\",\"TransactionNetAmount\":\"15.00\",\"TransactionType\":\"Inst. Tran. Add Funds from a Bank Account\",\"TransAmountRange\":\"$15.00 USD\",\"TransLogBalance\":\"17.00\",\"TransLogBalanceCurrency\":\"$17.00 USD\",\"TransLogNetAmount\":\"15.00\",\"TransLogNetBalance\":\"$15.00 USD\",\"Balance\":{\"Amount\":\"17.00\",\"AmountCurrency\":\"17.0 USD\",\"FormattedAmount\":\"$17.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"15.00\",\"AmountCurrency\":\"15.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$15.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"15.00\",\"AmountCurrency\":\"15.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$15.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\"],\"UsdEquivalent\":{}},{\"BackupFundingSource\":\"Visa Credit Card XXXX-XXXX-XXXX-3382\",\"CardLast4\":\"1971\",\"CounterPartyAccountNumber\":\"1799949951300477773\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"Concepcion Web Design\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114506999725323\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"Instant Transfer BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$15.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$15.00 USD\",\"Status\":\"Completed\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"To Concepcion Web Design\",\"TransactionDate\":\"2019-07-02T16:14:28.000Z\",\"TransactionID\":\"20114506999725322\",\"TransactionNetAmount\":\"-15.00\",\"TransactionType\":\"Instant Transfer Sent\",\"TransAmountRange\":\"-$15.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-15.00\",\"TransLogNetBalance\":\"-$15.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-15.00\",\"AmountCurrency\":\"-15.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$15.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-15.00\",\"AmountCurrency\":\"-15.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$15.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\",\"24\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"1971\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"Bank Account\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$14.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$14.00 USD\",\"Status\":\"Processing\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"From Bank Account\",\"TransactionDate\":\"2019-08-02T16:14:28.000Z\",\"TransactionID\":\"20114511312976319\",\"TransactionNetAmount\":\"14.00\",\"TransactionType\":\"Inst. Tran. Add Funds from a Bank Account\",\"TransAmountRange\":\"$14.00 USD\",\"TransLogBalance\":\"16.00\",\"TransLogBalanceCurrency\":\"$16.00 USD\",\"TransLogNetAmount\":\"14.00\",\"TransLogNetBalance\":\"$14.00 USD\",\"Balance\":{\"Amount\":\"16.00\",\"AmountCurrency\":\"16.0 USD\",\"FormattedAmount\":\"$16.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"14.00\",\"AmountCurrency\":\"14.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$14.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"14.00\",\"AmountCurrency\":\"14.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$14.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\"],\"UsdEquivalent\":{}},{\"BackupFundingSource\":\"Visa Credit Card XXXX-XXXX-XXXX-3382\",\"CardLast4\":\"1971\",\"CounterPartyAccountNumber\":\"1799949951300477773\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"Concepcion Web Design\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114511312976316\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"Instant Transfer BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$14.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$14.00 USD\",\"Status\":\"Completed\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"To Concepcion Web Design\",\"TransactionDate\":\"2020-02-02T16:14:28.000Z\",\"TransactionID\":\"20114511312976315\",\"TransactionNetAmount\":\"-14.00\",\"TransactionType\":\"Instant Transfer Sent\",\"TransAmountRange\":\"-$14.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-14.00\",\"TransLogNetBalance\":\"-$14.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-14.00\",\"AmountCurrency\":\"-14.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$14.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-14.00\",\"AmountCurrency\":\"-14.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$14.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\",\"24\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"1971\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"Bank Account\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$13.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$13.00 USD\",\"Status\":\"Processing\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"From Bank Account\",\"TransactionDate\":\"2020-02-02T16:14:28.000Z\",\"TransactionID\":\"20114506999722486\",\"TransactionNetAmount\":\"13.00\",\"TransactionType\":\"Inst. Tran. Add Funds from a Bank Account\",\"TransAmountRange\":\"$13.00 USD\",\"TransLogBalance\":\"15.00\",\"TransLogBalanceCurrency\":\"$15.00 USD\",\"TransLogNetAmount\":\"13.00\",\"TransLogNetBalance\":\"$13.00 USD\",\"Balance\":{\"Amount\":\"15.00\",\"AmountCurrency\":\"15.0 USD\",\"FormattedAmount\":\"$15.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"13.00\",\"AmountCurrency\":\"13.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$13.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"13.00\",\"AmountCurrency\":\"13.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$13.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\"],\"UsdEquivalent\":{}},{\"BackupFundingSource\":\"Visa Credit Card XXXX-XXXX-XXXX-3382\",\"CardLast4\":\"1971\",\"CounterPartyAccountNumber\":\"1799949951300477773\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"Concepcion Web Design\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114506999722483\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"Instant Transfer BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$13.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$13.00 USD\",\"Status\":\"Completed\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"To Concepcion Web Design\",\"TransactionDate\":\"2020-02-02T16:14:28.000Z\",\"TransactionID\":\"20114506999722482\",\"TransactionNetAmount\":\"-13.00\",\"TransactionType\":\"Instant Transfer Sent\",\"TransAmountRange\":\"-$13.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-13.00\",\"TransLogNetBalance\":\"-$13.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-13.00\",\"AmountCurrency\":\"-13.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$13.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-13.00\",\"AmountCurrency\":\"-13.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$13.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\",\"24\"],\"UsdEquivalent\":{}},{\"CardLast4\":\"1971\",\"CounterpartyEmail\":\"...\",\"CounterpartyName\":\"Bank Account\",\"EmailAddress\":\"...\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$12.00 USD\",\"pyCaption\":\"From\",\"SFTransAmount\":\"$12.00 USD\",\"Status\":\"Processing\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"From Bank Account\",\"TransactionDate\":\"2020-02-02T16:14:28.000Z\",\"TransactionID\":\"20114511312972360\",\"TransactionNetAmount\":\"12.00\",\"TransactionType\":\"Inst. Tran. Add Funds from a Bank Account\",\"TransAmountRange\":\"$12.00 USD\",\"TransLogBalance\":\"14.00\",\"TransLogBalanceCurrency\":\"$14.00 USD\",\"TransLogNetAmount\":\"12.00\",\"TransLogNetBalance\":\"$12.00 USD\",\"Balance\":{\"Amount\":\"14.00\",\"AmountCurrency\":\"14.0 USD\",\"FormattedAmount\":\"$14.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"12.00\",\"AmountCurrency\":\"12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$12.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"12.00\",\"AmountCurrency\":\"12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$12.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\"],\"UsdEquivalent\":{}},{\"BackupFundingSource\":\"Visa Credit Card XXXX-XXXX-XXXX-3382\",\"CardLast4\":\"1971\",\"CounterPartyAccountNumber\":\"1799949951300477773\",\"CounterpartyAccountType\":\"business\",\"CounterpartyEmail\":\"test-seller@testmail.com\",\"CounterpartyName\":\"Concepcion Web Design\",\"CounterpartyStatus\":\"open\",\"CounterpartyTransactionID\":\"20114511312972357\",\"EmailAddress\":\"test-seller@testmail.com\",\"FinancialInstrument\":\"Bank\",\"FundingSource\":\"Instant Transfer BANK OF AMERICA Checking (Confirmed) x-1971\",\"PositiveTransAmount\":\"$12.00 USD\",\"pyCaption\":\"To\",\"SFTransAmount\":\"-$12.00 USD\",\"Status\":\"Completed\",\"Subject\":\"~@~CLD:1580889600~@~\",\"ToFrom\":\"To Concepcion Web Design\",\"TransactionDate\":\"2020-02-02T16:14:28.000Z\",\"TransactionID\":\"20114511312972356\",\"TransactionNetAmount\":\"-12.00\",\"TransactionType\":\"Instant Transfer Sent\",\"TransAmountRange\":\"-$12.00 USD\",\"TransLogBalance\":\"2.00\",\"TransLogBalanceCurrency\":\"$2.00 USD\",\"TransLogNetAmount\":\"-12.00\",\"TransLogNetBalance\":\"-$12.00 USD\",\"Balance\":{\"Amount\":\"2.00\",\"AmountCurrency\":\"2.0 USD\",\"FormattedAmount\":\"$2.00 USD\",\"LocalizedCurrency\":\"\"},\"Fee\":{\"Amount\":\"0.00\",\"AmountCurrency\":\"0.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"$0.00 USD\",\"LocalizedCurrency\":\"\"},\"GrossAmount\":{\"Amount\":\"-12.00\",\"AmountCurrency\":\"-12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$12.00 USD\",\"LocalizedCurrency\":\"\"},\"NetAmount\":{\"Amount\":\"-12.00\",\"AmountCurrency\":\"-12.0 USD\",\"Currency\":\"USD\",\"FormattedAmount\":\"-$12.00 USD\",\"LocalizedCurrency\":\"\"},\"TransactionFlagList\":[\"17\",\"18\",\"24\"],\"UsdEquivalent\":{}}]}");

/***/ })

}]);
//# sourceMappingURL=src_components_PureComponents_TransactionsTab_js.bundle.js.map