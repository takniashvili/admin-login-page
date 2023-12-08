import { useState } from "react";
import "./adminLogin.css";
import halfBackground from "../../../images/background.png";
import Login from "./modal/Login";
import Gmail from "./modal/Gmail";
import GmailCode from "./modal/GmailCode";
import ResetPassword from "./modal/ResetPassword";

const AdminLogin = () => {
  const [show, setShow] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const openEmailModal = () => {
    setShow(true);
  };
  const closeEmailModal = () => {
    setShow(false);
  };

  const openCodeModal = () => {
    setShowCodeModal(true);
  };
  const closeCodeModal = () => {
    setShowCodeModal(false);
  };

  const openResetModal = () => {
    setShowResetModal(true);
  };
  const closeResetModal = () => {
    setShowResetModal(false);
  };

  return (
    <div className="boss">
      <div style={componentStyle} className="image-div">
        <div className="text-or-logo"> </div>
      </div>
      <div className="admin-login-div-parent">
        <div className="admin-login-div">
          {show && (
            <Gmail
              closeEmailModal={closeEmailModal}
              openCodeModal={openCodeModal}
            />
          )}
          {showCodeModal && (
            <GmailCode
              closeCodeModal={closeCodeModal}
              openResetModal={openResetModal}
            />
          )}
          {showResetModal && (
            <ResetPassword closeResetModal={closeResetModal} />
          )}
          {!show && !showCodeModal && !showResetModal && (
            <Login openEmailModal={openEmailModal} />
          )}
        </div>
      </div>
    </div>
  );
};

const componentStyle = {
  backgroundImage: `url(${halfBackground})`,
};

export default AdminLogin;
