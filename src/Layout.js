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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Layout = function (props) {
    var input = props.input, previews = props.previews, submitButton = props.submitButton, dropzoneProps = props.dropzoneProps, files = props.files, maxFiles = props.extra.maxFiles;
    return (react_1.default.createElement("div", __assign({}, dropzoneProps),
        previews,
        files.length < maxFiles && input,
        files.length > 0 && submitButton));
};
Layout.propTypes = {
    input: prop_types_1.default.node,
    previews: prop_types_1.default.arrayOf(prop_types_1.default.node),
    submitButton: prop_types_1.default.node,
    dropzoneProps: prop_types_1.default.shape({
        ref: prop_types_1.default.any.isRequired,
        className: prop_types_1.default.string.isRequired,
        style: prop_types_1.default.object,
        onDragEnter: prop_types_1.default.func.isRequired,
        onDragOver: prop_types_1.default.func.isRequired,
        onDragLeave: prop_types_1.default.func.isRequired,
        onDrop: prop_types_1.default.func.isRequired,
    }).isRequired,
    files: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
    extra: prop_types_1.default.shape({
        active: prop_types_1.default.bool.isRequired,
        reject: prop_types_1.default.bool.isRequired,
        dragged: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
        accept: prop_types_1.default.string.isRequired,
        multiple: prop_types_1.default.bool.isRequired,
        minSizeBytes: prop_types_1.default.number.isRequired,
        maxSizeBytes: prop_types_1.default.number.isRequired,
        maxFiles: prop_types_1.default.number.isRequired,
        onFiles: prop_types_1.default.func.isRequired,
        onCancelFile: prop_types_1.default.func.isRequired,
        onRemoveFile: prop_types_1.default.func.isRequired,
        onRestartFile: prop_types_1.default.func.isRequired,
    }).isRequired,
};
exports.default = Layout;
