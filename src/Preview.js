"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var utils_1 = require("./utils");
//@ts-ignore
var cancel_svg_1 = __importDefault(require("./assets/cancel.svg"));
//@ts-ignore
var remove_svg_1 = __importDefault(require("./assets/remove.svg"));
//@ts-ignore
var restart_svg_1 = __importDefault(require("./assets/restart.svg"));
var iconByFn = {
    cancel: { backgroundImage: "url(" + cancel_svg_1.default + ")" },
    remove: { backgroundImage: "url(" + remove_svg_1.default + ")" },
    restart: { backgroundImage: "url(" + restart_svg_1.default + ")" },
};
var Preview = /** @class */ (function (_super) {
    __extends(Preview, _super);
    function Preview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Preview.prototype.render = function () {
        var _a = this.props, className = _a.className, imageClassName = _a.imageClassName, style = _a.style, imageStyle = _a.imageStyle, _b = _a.fileWithMeta, cancel = _b.cancel, remove = _b.remove, restart = _b.restart, _c = _a.meta, _d = _c.name, name = _d === void 0 ? '' : _d, _e = _c.percent, percent = _e === void 0 ? 0 : _e, _f = _c.size, size = _f === void 0 ? 0 : _f, previewUrl = _c.previewUrl, status = _c.status, duration = _c.duration, validationError = _c.validationError, isUpload = _a.isUpload, canCancel = _a.canCancel, canRemove = _a.canRemove, canRestart = _a.canRestart, minSizeBytes = _a.extra.minSizeBytes;
        var title = (name || '?') + ", " + utils_1.formatBytes(size);
        if (duration)
            title = title + ", " + utils_1.formatDuration(duration);
        if (status === 'error_file_size' || status === 'error_validation') {
            return (react_1.default.createElement("div", { className: className, style: style },
                react_1.default.createElement("span", { className: "dzu-previewFileNameError" }, title),
                status === 'error_file_size' && react_1.default.createElement("span", null, size < minSizeBytes ? 'File too small' : 'File too big'),
                status === 'error_validation' && react_1.default.createElement("span", null, String(validationError)),
                canRemove && react_1.default.createElement("span", { className: "dzu-previewButton", style: iconByFn.remove, onClick: remove })));
        }
        if (status === 'error_upload_params' || status === 'exception_upload' || status === 'error_upload') {
            title = title + " (upload failed)";
        }
        if (status === 'aborted')
            title = title + " (cancelled)";
        return (react_1.default.createElement("div", { className: className, style: style },
            previewUrl && react_1.default.createElement("img", { className: imageClassName, style: imageStyle, src: previewUrl, alt: title, title: title }),
            !previewUrl && react_1.default.createElement("span", { className: "dzu-previewFileName" }, title),
            react_1.default.createElement("div", { className: "dzu-previewStatusContainer" },
                isUpload && (react_1.default.createElement("progress", { max: 100, value: status === 'done' || status === 'headers_received' ? 100 : percent })),
                status === 'uploading' && canCancel && (react_1.default.createElement("span", { className: "dzu-previewButton", style: iconByFn.cancel, onClick: cancel })),
                status !== 'preparing' && status !== 'getting_upload_params' && status !== 'uploading' && canRemove && (react_1.default.createElement("span", { className: "dzu-previewButton", style: iconByFn.remove, onClick: remove })),
                ['error_upload_params', 'exception_upload', 'error_upload', 'aborted', 'ready'].includes(status) &&
                    canRestart && react_1.default.createElement("span", { className: "dzu-previewButton", style: iconByFn.restart, onClick: restart }))));
    };
    return Preview;
}(react_1.default.PureComponent));
// @ts-ignore
Preview.propTypes = {
    className: prop_types_1.default.string,
    imageClassName: prop_types_1.default.string,
    style: prop_types_1.default.object,
    imageStyle: prop_types_1.default.object,
    fileWithMeta: prop_types_1.default.shape({
        file: prop_types_1.default.any.isRequired,
        meta: prop_types_1.default.object.isRequired,
        cancel: prop_types_1.default.func.isRequired,
        restart: prop_types_1.default.func.isRequired,
        remove: prop_types_1.default.func.isRequired,
        xhr: prop_types_1.default.any,
    }).isRequired,
    // copy of fileWithMeta.meta, won't be mutated
    meta: prop_types_1.default.shape({
        status: prop_types_1.default.oneOf([
            'preparing',
            'error_file_size',
            'error_validation',
            'ready',
            'getting_upload_params',
            'error_upload_params',
            'uploading',
            'exception_upload',
            'aborted',
            'error_upload',
            'headers_received',
            'done',
        ]).isRequired,
        type: prop_types_1.default.string.isRequired,
        name: prop_types_1.default.string,
        uploadedDate: prop_types_1.default.string.isRequired,
        percent: prop_types_1.default.number,
        size: prop_types_1.default.number,
        lastModifiedDate: prop_types_1.default.string,
        previewUrl: prop_types_1.default.string,
        duration: prop_types_1.default.number,
        width: prop_types_1.default.number,
        height: prop_types_1.default.number,
        videoWidth: prop_types_1.default.number,
        videoHeight: prop_types_1.default.number,
        validationError: prop_types_1.default.any,
    }).isRequired,
    isUpload: prop_types_1.default.bool.isRequired,
    canCancel: prop_types_1.default.bool.isRequired,
    canRemove: prop_types_1.default.bool.isRequired,
    canRestart: prop_types_1.default.bool.isRequired,
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
    }).isRequired,
};
exports.default = Preview;
