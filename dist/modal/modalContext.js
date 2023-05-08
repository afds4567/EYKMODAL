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
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
export var ModalStateContext = createContext(null);
export var ModalDispatchContext = createContext(null);
export function ModalContextProvider(_a) {
    var children = _a.children;
    var _b = useState(true), isModalOpen = _b[0], setIsModalOpen = _b[1];
    return (_jsx(ModalStateContext.Provider, __assign({ value: { isModalOpen: isModalOpen } }, { children: _jsx(ModalDispatchContext.Provider, __assign({ value: { setIsModalOpen: setIsModalOpen } }, { children: children })) })));
}
export function useModalState() {
    var state = useContext(ModalStateContext);
    if (!state)
        throw new Error("ModalProvider not found");
    return state;
}
export function useModalDispatch() {
    var dispatch = useContext(ModalDispatchContext);
    if (!dispatch)
        throw new Error("ModalProvider not found");
    return dispatch;
}
