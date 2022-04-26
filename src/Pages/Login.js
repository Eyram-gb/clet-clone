import logo from "../clet_logo.webp";
import crypto from "../crypto-login.svg";
import classes from "./login.module.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
      </header>
      <div className={classes.registerContainer}>
        <div>
          <div>
            <h2>Sign In</h2>
            <div className={classes.formContainer}>
              <form action="">
                <div className={classes.formItemContainer}>
                  <label htmlFor="">Email Address</label>
                  <input type="text" />
                </div>
                <div className={classes.formItemContainer}>
                  <label htmlFor="">Password</label>
                  <input type="text" />
                </div>

                <button className={classes.submitButton}>Log In</button>

                <p>
                  Don't have an account yet? <Link to="/register">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <img src={crypto} alt="Crypto" />
      </div>

      <footer className={classes.footer}>
        <div>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Docs</li>
            <li>Privacy</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Login;
