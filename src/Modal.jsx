import React, { useState } from "react";

const Modal = () => {
  const [active, setActive] = useState(false);
  const toggleModal = () => {
    setActive(!active);
  };
  return (
    <>
      <button onClick={() => toggleModal()}>open modal</button>
      {/* <!-- The Modal --> */}

      {active && <div className="modal">hello!!</div>}
    </>
  );
};

export default Modal;
