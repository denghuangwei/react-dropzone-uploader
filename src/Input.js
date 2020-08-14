"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Input = function (props) {
    var className = props.className, labelClassName = props.labelClassName, labelWithFilesClassName = props.labelWithFilesClassName, style = props.style, labelStyle = props.labelStyle, labelWithFilesStyle = props.labelWithFilesStyle, getFilesFromEvent = props.getFilesFromEvent, accept = props.accept, multiple = props.multiple, disabled = props.disabled, content = props.content, withFilesContent = props.withFilesContent, onFiles = props.onFiles, files = props.files;
    return (react_1.default.createElement("label", { className: files.length > 0 ? labelWithFilesClassName : labelClassName, style: files.length > 0 ? labelWithFilesStyle : labelStyle },
        files.length > 0 ? withFilesContent : content,
        react_1.default.createElement("input", { className: className, style: style, type: "file", accept: accept, multiple: multiple, disabled: disabled, onChange: function (e) { return __awaiter(void 0, void 0, void 0, function () {
                var target, chosenFiles;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            target = e.target;
                            return [4 /*yield*/, getFilesFromEvent(e)];
                        case 1:
                            chosenFiles = _a.sent();
                            onFiles(chosenFiles);
                            //@ts-ignore
                            target.value = null;
                            return [2 /*return*/];
                    }
                });
            }); } })));
};
Input.propTypes = {
    className: prop_types_1.default.string,
    labelClassName: prop_types_1.default.string,
    labelWithFilesClassName: prop_types_1.default.string,
    style: prop_types_1.default.object,
    labelStyle: prop_types_1.default.object,
    labelWithFilesStyle: prop_types_1.default.object,
    getFilesFromEvent: prop_types_1.default.func.isRequired,
    accept: prop_types_1.default.string.isRequired,
    multiple: prop_types_1.default.bool.isRequired,
    disabled: prop_types_1.default.bool.isRequired,
    content: prop_types_1.default.node,
    withFilesContent: prop_types_1.default.node,
    onFiles: prop_types_1.default.func.isRequired,
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
exports.default = Input;
