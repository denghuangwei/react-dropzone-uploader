"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilesFromEvent = exports.mergeStyles = exports.defaultClassNames = exports.resolveValue = exports.accepts = exports.formatDuration = exports.formatBytes = void 0;
exports.formatBytes = function (b) {
    var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var l = 0;
    var n = b;
    while (n >= 1024) {
        n /= 1024;
        l += 1;
    }
    return "" + n.toFixed(n >= 10 || l < 1 ? 0 : 1) + units[l];
};
exports.formatDuration = function (seconds) {
    var date = new Date(0);
    date.setSeconds(seconds);
    var dateString = date.toISOString().slice(11, 19);
    if (seconds < 3600)
        return dateString.slice(3);
    return dateString;
};
// adapted from: https://github.com/okonet/attr-accept/blob/master/src/index.js
// returns true if file.name is empty and accept string is something like ".csv",
// because file comes from dataTransferItem for drag events, and
// dataTransferItem.name is always empty
exports.accepts = function (file, accept) {
    if (!accept || accept === '*')
        return true;
    var mimeType = file.type || '';
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return accept
        .split(',')
        .map(function (t) { return t.trim(); })
        .some(function (type) {
        if (type.charAt(0) === '.') {
            return file.name === undefined || file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        else if (type.endsWith('/*')) {
            // this is something like an image/* mime type
            return baseMimeType === type.replace(/\/.*$/, '');
        }
        return mimeType === type;
    });
};
exports.resolveValue = function (value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (typeof value === 'function')
        return value.apply(void 0, args);
    return value;
};
exports.defaultClassNames = {
    dropzone: 'dzu-dropzone',
    dropzoneActive: 'dzu-dropzoneActive',
    dropzoneReject: 'dzu-dropzoneActive',
    dropzoneDisabled: 'dzu-dropzoneDisabled',
    input: 'dzu-input',
    inputLabel: 'dzu-inputLabel',
    inputLabelWithFiles: 'dzu-inputLabelWithFiles',
    preview: 'dzu-previewContainer',
    previewImage: 'dzu-previewImage',
    submitButtonContainer: 'dzu-submitButtonContainer',
    submitButton: 'dzu-submitButton',
};
exports.mergeStyles = function (classNames, styles, addClassNames) {
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    var resolvedClassNames = __assign({}, exports.defaultClassNames);
    var resolvedStyles = __assign({}, styles);
    for (var _a = 0, _b = Object.entries(classNames); _a < _b.length; _a++) {
        var _c = _b[_a], key = _c[0], value = _c[1];
        resolvedClassNames[key] = exports.resolveValue.apply(void 0, __spreadArrays([value], args));
    }
    for (var _d = 0, _e = Object.entries(addClassNames); _d < _e.length; _d++) {
        var _f = _e[_d], key = _f[0], value = _f[1];
        resolvedClassNames[key] = resolvedClassNames[key] + " " + exports.resolveValue.apply(void 0, __spreadArrays([value], args));
    }
    for (var _g = 0, _h = Object.entries(styles); _g < _h.length; _g++) {
        var _j = _h[_g], key = _j[0], value = _j[1];
        resolvedStyles[key] = exports.resolveValue.apply(void 0, __spreadArrays([value], args));
    }
    return { classNames: resolvedClassNames, styles: resolvedStyles };
};
exports.getFilesFromEvent = function (event) {
    var items = null;
    if ('dataTransfer' in event) {
        var dt = event.dataTransfer;
        // NOTE: Only the 'drop' event has access to DataTransfer.files, otherwise it will always be empty
        if ('files' in dt && dt.files.length) {
            items = dt.files;
        }
        else if (dt.items && dt.items.length) {
            items = dt.items;
        }
    }
    else if (event.target && event.target.files) {
        items = event.target.files;
    }
    return Array.prototype.slice.call(items);
};
