import React, { useState } from 'react';
import "@picocss/pico/css/pico.min.css";


function ModelButton() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        style={{
          backgroundColor: "pink",
          border: "2px solid hotpink",
          color: "white",
          fontWeight: "bold",
        }}
        onClick={handleButtonClick}
      >
        Click here to find out a mist about you!
      </button>
      {showModal && (
        <div className="modal">
          {/* <div className="modal-content">
            <h2>You are awesome</h2>
            <button onClick={handleModalClose}>Close Modal</button>
          </div> */}
          <dialog open>
            <article>
              <h3>Confirm your action!</h3>
              <p>
                Mauris non nibh vel nisi sollicitudin malesuada. Donec ut
                sagittis erat. Praesent eu eros felis. Ut consectetur placerat
                pulvinar.
              </p>
              <footer>
                <button onClick={handleModalClose}>Close Modal</button>
              </footer>
            </article>
          </dialog>
        </div>
      )}
    </div>
  );
}

export default ModelButton;
