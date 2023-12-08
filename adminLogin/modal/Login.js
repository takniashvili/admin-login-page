import "../adminLogin.css";
import adminCheckbox from "../../../../images/adminChechkbox.png";
import passwordEye from "../../../../images/eye.png";

export default function Login({ openEmailModal }) {
  return (
    <>
      <div className="shesvla-text"> შესვლა </div>
      <div className="momxmarebeli-text">მომხმარებელი</div>
      <input type="text" className="momxmarebeli-input" />
      <div>
        <div className="parolebi-texts">
          პაროლი{" "}
          {/* <div className="dagaviwyda-paroli-text" onClick={openEmailModal}>
            დაგავიწყდა პაროლი?
          </div> */}
        </div>
        <div className="password-eye">
          <input type="password" className="paroli-input" />
          <img className="eye-icon" src={passwordEye} alt="eye-icon" />{" "}
        </div>
        <div className="checkbox-damaxsovreba">
          {" "}
          <img src={adminCheckbox} alt="admin-checkbox" />{" "}
          <div> დამახსოვრება </div>{" "}
        </div>
      </div>
      <button className="shesvla-btn"> შესვლა </button>
    </>
  );
}
