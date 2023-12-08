import React from "react";

export default function GmailCode({ closeCodeModal, openResetModal }) {
  const handleCodeConfirmation = () => {
    closeCodeModal();
    openResetModal();
  };
  return (
    <>
      <div className="shesvla-text"> კოდი </div>
      <div className="momxmarebeli-text"> შეიყვანეთ კოდი </div>
      <input type="email" className="momxmarebeli-input" />

      <button onClick={handleCodeConfirmation} className="shesvla-btn">
        {" "}
        დადასტურება{" "}
      </button>
    </>
  );
}
