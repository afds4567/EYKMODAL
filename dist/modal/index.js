var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import useModal from "./useModal";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  overflow: ", ";\n"], ["\n  display: ", ";\n  overflow: ", ";\n"])), function (props) { return (props.isOpenModal ? "block" : "none"); }, function (props) { return (props.isOpenModal ? "hidden" : "auto"); });
var BackDrop = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  z-index: 998;\n  background: rgba(0, 0, 0, 0.35);\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  z-index: 998;\n  background: rgba(0, 0, 0, 0.35);\n"])));
var ModalContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-radius: 5% 5% 0px 0px;\n  z-index: 999;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"], ["\n  border-radius: 5% 5% 0px 0px;\n  z-index: 999;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"])));
var Modal = function (_a) {
    var children = _a.children;
    var _b = useModal(), isModalOpen = _b.isModalOpen, closeModal = _b.closeModal;
    return (_jsxs(Wrapper, __assign({ isOpenModal: isModalOpen }, { children: [_jsx(BackDrop, { onClick: closeModal }), _jsx(ModalContainer, { children: children })] })));
};
export default Modal;
var templateObject_1, templateObject_2, templateObject_3;
