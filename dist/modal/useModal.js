import { useModalDispatch, useModalState } from "./modalContext";
function useModal() {
    var ModalState = useModalState();
    var ModalDispatch = useModalDispatch();
    var openModal = function () {
        ModalDispatch.setIsModalOpen(true);
    };
    var closeModal = function () {
        ModalDispatch.setIsModalOpen(false);
    };
    return { isModalOpen: ModalState.isModalOpen, openModal: openModal, closeModal: closeModal };
}
export default useModal;
