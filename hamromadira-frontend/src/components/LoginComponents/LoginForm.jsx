/* eslint-disable react/no-unescaped-entities */
import warning from "../../assets/Icons/warning.png";
import "./Login.css";

export default function LoginForm() {
  return (
    <div className="main-container wrapper">
      <div className="container-right">
        <h3>LOGIN</h3>
        <div className="form-title">Please Login To Continue</div>
        <form>
          <div className="form-input username">
            <input type="text" name="" id="" placeholder="username/email" />
            <img
              className="error-img"
              src={warning}
              alt=""
              width="25px"
              height="25px"
            />
          </div>
          <div className="form-input password">
            <input type="password" name="" id="" placeholder="password" />
            <img
              className="error-img"
              src={warning}
              alt=""
              width="25px"
              height="25px"
            />
          </div>
          <button className="login-btn" type="button">
            LOGIN
          </button>
        </form>
        <div className="create-account">
          Don't Have An Account ? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
