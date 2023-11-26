import "./signUp.css";
import warning from "../../assets/Icons/warning.png";

export default function SignUpForm() {
  return (
    <div className="container-right">
      <h3>SIGN UP</h3>
      <form>
        <div className="form-input full-name">
          <input type="text" placeholder="full name" />
          <img
            className="error-img"
            src={warning}
            alt=""
            width="25px"
            height="25px"
          />
        </div>
        <div className="form-input username">
          <input type="text" name="" id="" placeholder="username" />
          <img
            className="error-img"
            src={warning}
            alt=""
            width="25px"
            height="25px"
          />
        </div>
        <div className="form-input email">
          <input type="email" name="" id="" placeholder="myemail@email.com" />
          <img
            className="error-img"
            src={warning}
            alt=""
            width="25px"
            height="25px"
          />
        </div>
        <div className="form-input phone">
          <input type="text" placeholder="phone" />
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
        <div className="form-input gender-dropdown">
          <select name="gender">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="others" selected>
              others...
            </option>
          </select>
        </div>
        <button className="signup-btn" type="button">
          SIGN UP
        </button>
      </form>
      <div className="already-created">
        Already Have An Account ? <a href="/login">Log in</a>
      </div>
    </div>
  );
}
