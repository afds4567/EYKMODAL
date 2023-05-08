import { useModalDispatch, useModalState } from "./modalContext";

function useModal() {
  const ModalState = useModalState();
  const ModalDispatch = useModalDispatch();

  const openModal = () => {
    ModalDispatch.setIsModalOpen(true);
  };
  const closeModal = () => {
    ModalDispatch.setIsModalOpen(false);
  };

  return { isModalOpen: ModalState.isModalOpen, openModal, closeModal };
}

export default useModal;
