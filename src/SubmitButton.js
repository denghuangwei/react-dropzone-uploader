"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var SubmitButton = function (props) {
    var className = props.className, buttonClassName = props.buttonClassName, style = props.style, buttonStyle = props.buttonStyle, disabled = props.disabled, content = props.content, onSubmit = props.onSubmit, files = props.files;
    var _disabled = files.some(function (f) { return ['preparing', 'getting_upload_params', 'uploading'].includes(f.meta.status); }) ||
        !files.some(function (f) { return ['headers_received', 'done'].includes(f.meta.status); });
    var handleSubmit = function () {
        onSubmit(files.filter(function (f) { return ['headers_received', 'done'].includes(f.meta.status); }));
    };
    return (react_1.default.createElement("div", { className: className, style: style },
        react_1.default.createElement("button", { className: buttonClassName, style: buttonStyle, onClick: handleSubmit, disabled: disabled || _disabled }, content)));
};
SubmitButton.propTypes = {
    className: prop_types_1.default.string,
    buttonClassName: prop_types_1.default.string,
    style: prop_types_1.default.object,
    buttonStyle: prop_types_1.default.object,
    disabled: prop_types_1.default.bool.isRequired,
    content: prop_types_1.default.node,
    onSubmit: prop_types_1.default.func.isRequired,
    files: prop_types_1.default.arrayOf(prop_types_1.default.object).isRequired,
    extra: prop_types_1.default.shape({
        active: prop_types_1.default.bool.isRequired,
        reject: prop_types_1.default.bool.isRequired,
        dragged: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
        accept: prop_types_1.default.string.isRequired,
        multiple: prop_types_1.default.bool.isRequired,
        minSizeBytes: prop_types_1.default.number.isRequired,
        maxSizeBytes: prop_types_1.default.number.isRequired,
        maxFiles: prop_types_1.default.number.isRequired,
    }).isRequired,
};
exports.default = SubmitButton;
