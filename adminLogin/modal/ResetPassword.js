import adminCheckbox from "../../../../images/adminChechkbox.png";

const ResetPassword = ({ closeResetModal }) => {
  return (
    <>
      <div className="shesvla-text"> ახალი პაროლი </div>
      <div className="momxmarebeli-text"> ახალი პაროლი </div>
      <input type="password" className="momxmarebeli-input" />
      <div>
        <div className="parolebi-texts"> პაროლის გამეორება </div>
        <input type="password" className="paroli-input" />
        <div className="checkbox-damaxsovreba">
          {" "}
          <img src={adminCheckbox} alt="admin-checkbox" />{" "}
          <div> დამახსოვრება </div>{" "}
        </div>
      </div>
      <button onClick={closeResetModal} className="shesvla-btn">
        {" "}
        შესვლა{" "}
      </button>
    </>
  );
};

export default ResetPassword;
