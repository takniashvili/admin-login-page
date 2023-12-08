import React from "react";

const Gmail = ({ closeEmailModal, openCodeModal }) => {
  return (
    <>
      <div className="shesvla-text"> პაროლის აღდგენა </div>
      <div className="momxmarebeli-text"> ელ-ფოსტა </div>
      <input type="email" className="momxmarebeli-input" />

      <button
        onClick={() => {
          closeEmailModal();
          openCodeModal();
        }}
        className="shesvla-btn"
      >
        {" "}
        გაგზავნა{" "}
      </button>
    </>
  );
};

export default Gmail;
