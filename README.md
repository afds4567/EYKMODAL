# Eyk-modal Library

This package is a module that helps you easily create modals using React.

## How to install

`npm i eykmodal`

## How to use

```
import { Modal } from "eykmodal";

export default function DetailModal() {
  return (
    <Modal>
      //contents what you want to put in modal
      <div>"HELLO"</div>
    </Modal>
  );
}

import { useModal } from "eykmodal";
import DetailModal from "./DetailModal";

function App() {
  const { openModal } = useModal();
  const handleOnclick = () => {
    openModal();
  };

  return (
    <div className="App">
      <button onClick={handleOnclick}>OPEN MODAL</button>
      <DetailModal />
    </div>
  );
}
```

## useModal Hook

```
const { isModalOpen, openModal, closeModal } = useModal();
```

| Function    | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| useModal    | Initializes the modal state and dispatch functions.                          |
| isModalOpen | A boolean value that determines if the modal is currently open or closed.    |
| openModal   | A function that sets the isModalOpen value to true, which opens the modal.   |
| closeModal  | A function that sets the isModalOpen value to false, which closes the modal. |
