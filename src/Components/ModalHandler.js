

import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const ModalHandler = () => {
    const [status, setStatus] = useState(false);

    return (
    <div>
      {status && (
        <Modal closeModal={() => setStatus(false)}>
          <h2>What is Lorem Ipsum?</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Modal>
      )}
      <div className="modal_container">
        <h2>Hello World</h2>
        <button onClick={() => setStatus(true)}>Open Modal</button>
      </div>
    </div>
  );
}

export default ModalHandler;