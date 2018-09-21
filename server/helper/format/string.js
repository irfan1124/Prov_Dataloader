'use strict';

/**********************************
 * format string using validator
 * trim,empty,isNumber,isDate etc
 * Make sure all parameter value in string
 * ******************************* */

var validator = require('validator');

// STRING VALIDATORS

// check if seed is substring of str or not
var contains = function (str, seed) {
    return validator.contains(str, seed);
}

// check for valid date
var isISO8601 = function (str) {
    return validator.isISO8601(str);
}

// check for empty string
var isEmpty = function (str) {
    return validator.isEmpty(str);
}

// check for valid json string
var isJSON = function (str) {
    return validator.isJSON(str);
}

// check for valid number
var isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// check for valid uuid
var isGUID = function (str) {
    if (!str) return false;
    else if (typeof str != 'string') return false;
    return validator.isUUID(str);
}

// check for valid URL
var isURL = function (str) {
    if (!str) return false;
    return validator.isURL(str);
}

// STRING SANITIZERS

// trim passed string
var trim = function (input) {
    if (!isEmpty(input)) {
        return validator.trim(input);
    }
    return '';
};

// var toBoolean = function (input) {
//     return validator.toBoolean(input);
// }

// replace <, >, &, ', " and / with HTML entities
var escape = function (input) {
    return validator.escape(input);
}

// replaces HTML encoded entities with <, >, &, ', " and /.
var unescape = function (input) {
    return validator.unescape(input);
}

// return blank string if null
var toEmptyStr = function (input, output = '') {
    return input || output;
}

// get first character of passed string
var getFirstChar = function (input) {
    if (!input) {
        return '';
    }
    return input.charAt(0);
}

// get last character of passed string
var getLastChar = function (input) {
    if (!input) {
        return '';
    }
    return input.slice(-1);
}

// replace all occurence in string
var replaceAll = function (sourceStr, replaceStr, replaceToStr, ignore = true) {
    return sourceStr.replace(new RegExp(replaceStr.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"),
        (ignore ? "gi" : "g")), (typeof (replaceToStr) == "string") ? replaceToStr.replace(/\$/g, "$$$$") : replaceToStr);
}

let isAlphanumeric = (str) => {
    return validator.isAlphanumeric(str);
}

module.exports = {
    contains, isISO8601, isEmpty, isJSON, isNumeric, isGUID, isURL,
    trim, escape, unescape, toEmptyStr,
    getFirstChar, getLastChar, replaceAll,
    isAlphanumeric
};