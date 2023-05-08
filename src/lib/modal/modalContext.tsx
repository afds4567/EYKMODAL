import { createContext, useContext, useState } from "react";

interface ModalState {
  isModalOpen: boolean;
}

interface ModalAction {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalStateContext = createContext<ModalState | null>(null);
export const ModalDispatchContext = createContext<ModalAction | null>(null);

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <ModalStateContext.Provider value={{ isModalOpen }}>
      <ModalDispatchContext.Provider value={{ setIsModalOpen }}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

export function useModalState() {
  const state = useContext(ModalStateContext);
  if (!state) throw new Error("ModalProvider not found");
  return state;
}

export function useModalDispatch() {
  const dispatch = useContext(ModalDispatchContext);
  if (!dispatch) throw new Error("ModalProvider not found");
  return dispatch;
}
