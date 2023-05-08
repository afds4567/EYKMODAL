/// <reference types="react" />
interface ModalState {
    isModalOpen: boolean;
}
interface ModalAction {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const ModalStateContext: import("react").Context<ModalState | null>;
export declare const ModalDispatchContext: import("react").Context<ModalAction | null>;
export declare function ModalContextProvider({ children, }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function useModalState(): ModalState;
export declare function useModalDispatch(): ModalAction;
export {};
