import styled from "styled-components";
import useModal from "./useModal";

interface ModalProps {
  isOpenModal: boolean;
}

const Wrapper = styled.div<ModalProps>`
  display: ${(props) => (props.isOpenModal ? "block" : "none")};
  overflow: ${(props) => (props.isOpenModal ? "hidden" : "auto")};
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 998;
  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  border-radius: 5% 5% 0px 0px;
  z-index: 999;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Modal = ({ children }: React.PropsWithChildren) => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <Wrapper isOpenModal={isModalOpen}>
      <BackDrop onClick={closeModal}></BackDrop>
      <ModalContainer>{children}</ModalContainer>
    </Wrapper>
  );
};

export default Modal;
