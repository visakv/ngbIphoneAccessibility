"use strict";
(self["webpackChunkduet_angular_template"] = self["webpackChunkduet_angular_template"] || []).push([["common"],{

/***/ 6328:
/*!*************************************************************************************!*\
  !*** ./node_modules/@duetds/components/lib/esm/action-arrow-down-small-82273dc8.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ actionArrowDownSmall)
/* harmony export */ });
/*!
 * Built with Duet Design System
 */
var actionArrowDownSmall={"title":"action-arrow-down-small","tags":"action arrow down small caret","svg":"<svg fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M12 19.5a2.3 2.3 0 0 1-1.729-.78L.46 7.568a1.847 1.847 0 0 1 2.773-2.439l8.579 9.752a.25.25 0 0 0 .376 0l8.579-9.752a1.847 1.847 0 1 1 2.773 2.439l-9.808 11.148A2.31 2.31 0 0 1 12 19.5z\"/></svg>"};




/***/ }),

/***/ 9981:
/*!*************************************************************************************!*\
  !*** ./node_modules/@duetds/components/lib/esm/action-new-window-small-1945be91.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ actionNewWindowSmall)
/* harmony export */ });
/*!
 * Built with Duet Design System
 */
var actionNewWindowSmall={"title":"action-new-window-small","tags":"arrow open new window tab external linksquare box rectangle action small","svg":"<svg fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M10.5 2a1.5 1.5 0 0 1 .14 3H3.75c-.38 0-.7.28-.74.65l-.01.1v14.5c0 .38.28.7.65.74l.1.01h14.5c.38 0 .7-.28.74-.65l.01-.1v-6.89a1.5 1.5 0 0 1 3 0v6.89A3.75 3.75 0 0 1 18.25 24H3.75A3.75 3.75 0 0 1 0 20.25V5.75A3.75 3.75 0 0 1 3.75 2zm12-2c.78 0 1.42.6 1.5 1.36V7.5a1.5 1.5 0 0 1-3 .14V5.12l-5.44 5.44a1.5 1.5 0 0 1-2.22-2l.1-.12L18.88 3H16.5A1.5 1.5 0 0 1 15 1.64V1.5c0-.78.6-1.42 1.36-1.5h.14z\"/></svg>"};




/***/ }),

/***/ 4122:
/*!****************************************************************************!*\
  !*** ./node_modules/@duetds/components/lib/esm/common-strings-97e04e4b.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ DuetStringsExternalDefaults)
/* harmony export */ });
/*!
 * Built with Duet Design System
 */
const DuetStringsExternalDefaults = {
  fi: "Avautuu uuteen ikkunaan",
  sv: "Öppnas i nytt fönster",
  en: "Opens in a new window",
};




/***/ }),

/***/ 7681:
/*!*************************************************************************!*\
  !*** ./node_modules/@duetds/components/lib/esm/focus-utils-ea33cb8a.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FocusGuard),
/* harmony export */   "f": () => (/* binding */ focusElement)
/* harmony export */ });
/* harmony import */ var _index_54e0bce3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-54e0bce3.js */ 3669);
/*!
 * Built with Duet Design System
 */


const focusElement = (element) => {
  if ("setFocus" in element) {
    element.setFocus();
  }
  else {
    element.focus();
  }
};
const FocusGuard = ({ moveFocusTo }) => {
  return (0,_index_54e0bce3_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "duet-focus-guard", "aria-hidden": "true", tabIndex: 0, onFocus: () => focusElement(moveFocusTo) });
};




/***/ }),

/***/ 1069:
/*!*************************************************************************!*\
  !*** ./node_modules/@duetds/components/lib/esm/form-search-ea8e19ae.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ formSearch)
/* harmony export */ });
/*!
 * Built with Duet Design System
 */
var formSearch={"title":"form-search","tags":"form search magnifying glass","svg":"<svg fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M23.245 23.996a.743.743 0 0 1-.53-.22L16.2 17.26a9.824 9.824 0 0 1-2.553 1.579 9.766 9.766 0 0 1-7.51.069 9.745 9.745 0 0 1-5.359-5.262c-1.025-2.412-1.05-5.08-.069-7.51S3.558 1.802 5.97.777a9.744 9.744 0 0 1 7.51-.069c2.431.981 4.334 2.849 5.359 5.262s1.05 5.08.069 7.51a9.807 9.807 0 0 1-1.649 2.718l6.517 6.518a.75.75 0 0 1-.531 1.28zM9.807 1.49a8.259 8.259 0 0 0-3.25.667c-2.044.869-3.627 2.481-4.458 4.54s-.81 4.318.058 6.362a8.26 8.26 0 0 0 4.54 4.458 8.259 8.259 0 0 0 6.362-.059 8.285 8.285 0 0 0 2.594-1.736.365.365 0 0 1 .077-.076 8.245 8.245 0 0 0 1.786-2.728 8.255 8.255 0 0 0-.059-6.362 8.257 8.257 0 0 0-4.54-4.458 8.28 8.28 0 0 0-3.11-.608z\"/></svg>"};




/***/ }),

/***/ 3987:
/*!*************************************************************************!*\
  !*** ./node_modules/@duetds/components/lib/esm/input-utils-de45e099.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ cleanValue),
/* harmony export */   "r": () => (/* binding */ resetCursor)
/* harmony export */ });
/*!
 * Built with Duet Design System
 */
/**
 * This function restores cursor position after changing input
 *
 * @example
 * const resetCursor = storeAndResetCursor(this.input.selectionStart,this.input.selectionEnd)
 * this.input.changeValueAndForceUpdateOfCursoPosition()
 * resetCursor()
 */
function resetCursor(domElement) {
  if (domElement && domElement.selectionStart) {
    const start = domElement.selectionStart;
    const end = domElement.selectionEnd;
    return function () {
      if (start === end) {
        domElement.selectionStart = start;
        domElement.selectionEnd = end;
      }
      else {
        domElement.setSelectionRange(start, end);
      }
    };
  }
  return () => true;
}
/**
 * Given an input and a regex, remove any characters from the input's value
 * which match the regex, *whilst* maintaining cursor position.
 *
 * In effect, this prevent users from entering specific characters.
 *
 * @example
 * input.value = "foo123"
 * cleanValue(input, /[^0-9]/g)
 * input.value === "123"
 */
function cleanValue(input, regex) {
  const value = input.value;
  const cursor = input.selectionStart;
  const beforeCursor = value.slice(0, cursor);
  const afterCursor = value.slice(cursor, value.length);
  const filteredBeforeCursor = beforeCursor.replace(regex, "");
  const filterAfterCursor = afterCursor.replace(regex, "");
  const newValue = filteredBeforeCursor + filterAfterCursor;
  const newCursor = filteredBeforeCursor.length;
  input.value = newValue;
  input.selectionStart = input.selectionEnd = newCursor;
  return newValue;
}




/***/ }),

/***/ 3440:
/*!**********************************************************************************!*\
  !*** ./node_modules/@duetds/components/lib/esm/is-internet-explorer-62b3bdbd.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isInternetExplorer)
/* harmony export */ });
/*!
 * Built with Duet Design System
 */
function isInternetExplorer() {
  const ua = navigator.userAgent || navigator.vendor;
  return "documentMode" in document || /Edge/.test(ua);
}




/***/ }),

/***/ 3305:
/*!**********************************************************************!*\
  !*** ./node_modules/@duetds/components/lib/esm/js-utils-52e0944c.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ debounce),
/* harmony export */   "f": () => (/* binding */ fieldSorter)
/* harmony export */ });
/*!
 * Built with Duet Design System
 */
const debounce = (func, timeout = 250) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(undefined, args);
    }, timeout);
  };
};
function fieldSorter(fields) {
  return function (a, b) {
    return fields
      .map(function (o) {
      let dir = 1;
      if (o[0] === "-") {
        dir = -1;
        o = o.substring(1);
      }
      if (a[o] > b[o]) {
        return dir;
      }
      if (a[o] < b[o]) {
        return -dir;
      }
      return 0;
    })
      .reduce(function firstNonZeroValue(p, n) {
      return p ? p : n;
    }, 0);
  };
}




/***/ }),

/***/ 359:
/*!*************************************************************************!*\
  !*** ./node_modules/@duetds/components/lib/esm/token-utils-e9a69acf.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getColorByName)
/* harmony export */ });
/* harmony import */ var _tokens_module_49cbf963_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens.module-49cbf963.js */ 2370);
/*!
 * Built with Duet Design System
 */


const allowedThemes = ["turva"];
function isDashCase(str) {
  const dash = str.includes("-");
  const barredString = str.includes(" ") || str.includes("_");
  const barredStartingString = str.charAt(0) === "-";
  return dash && !barredString && !barredStartingString;
}
function capitalize(str = "") {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
function lowerCaseFirst(str = "") {
  return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
}
function camelize(str = "") {
  const arr = str.split("-");
  //loop through each element of the array and capitalize the first letter.'
  arr.forEach((string, index) => {
    arr[index] = capitalize(string);
  });
  return arr.join("");
}
function getTheme(theme = "") {
  if (allowedThemes.includes(theme.toLowerCase())) {
    return theme.toLowerCase();
  }
  return "";
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function hasType(t, str = "") {
  return str.indexOf(capitalizeFirstLetter(t)) === 0 || str.indexOf(t) === 0;
}
function addPrefix(prefix, str = "") {
  if (str && !isDashCase(str) && !hasType(prefix, str)) {
    return `${prefix}${capitalize(str)}`;
  }
  return str;
}
function addTheme(str, theme) {
  const hasTheme = getTheme(theme).length;
  if (hasTheme && str.indexOf(theme) === -1) {
    return `${str}${capitalize(theme)}`;
  }
  return str;
}
function getColorByName(name, theme = "") {
  if (!name) {
    return undefined;
  }
  const defaultColor = convertToColorName(name);
  const themedColor = convertToColorName(name, theme);
  // lets just try to get the color first to save some cycles
  let resolvedToken = _tokens_module_49cbf963_js__WEBPACK_IMPORTED_MODULE_0__.t[themedColor];
  if (!resolvedToken) {
    resolvedToken = _tokens_module_49cbf963_js__WEBPACK_IMPORTED_MODULE_0__.t[defaultColor];
  }
  return resolvedToken;
}
function convertToColorName(name = "", theme = "") {
  let colorResolution = name;
  const dash = isDashCase(name);
  if (dash) {
    colorResolution = camelize(colorResolution);
  }
  colorResolution = addPrefix("color", colorResolution);
  colorResolution = addTheme(colorResolution, theme);
  // takes care of the case where colorPrimaryDark ends up with ColorPrimaryDark
  colorResolution = lowerCaseFirst(colorResolution);
  return colorResolution;
}




/***/ }),

/***/ 7567:
/*!***************************************************************************!*\
  !*** ./node_modules/@duetds/components/lib/esm/watch-options-dd55bce8.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ watchForElement),
/* harmony export */   "f": () => (/* binding */ findCheckedOption),
/* harmony export */   "w": () => (/* binding */ watchForOptions)
/* harmony export */ });
/*!
 * Built with Duet Design System
 */
const watchFor = (containerEl, tagName, onChange, changeHandler, options = {
  childList: true,
  subtree: true,
}) => {
  let mutation;
  if (typeof MutationObserver !== "undefined") {
    mutation = new MutationObserver(mutationList => {
      onChange(changeHandler(mutationList, tagName));
    });
    mutation.observe(containerEl, options);
  }
  return mutation;
};
const watchForOptions = (containerEl, tagName, onChange) => {
  return watchFor(containerEl, tagName, onChange, getSelectedOption);
};
const watchForElement = (containerEl, tagName, onChange) => {
  return watchFor(containerEl, tagName, onChange, getElementItem, {
    childList: true,
    subtree: true,
  });
};
const getElementItem = (mutationList) => {
  let addedNode = false;
  let removedNode = false;
  mutationList.forEach(mut => {
    if (mut.addedNodes.length) {
      addedNode = true;
    }
    if (mut.removedNodes.length) {
      removedNode = true;
    }
  });
  return { addedNode, removedNode, mutationList };
};
const getSelectedOption = (mutationList, tagName) => {
  let newOption;
  mutationList.forEach(mut => {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < mut.addedNodes.length; i++) {
      newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
    }
  });
  return newOption;
};
const findCheckedOption = (el, tagName) => {
  if (el.nodeType !== 1) {
    return undefined;
  }
  const options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
  return options.find((o) => o.checked === true);
};




/***/ })

}]);
//# sourceMappingURL=common.js.map