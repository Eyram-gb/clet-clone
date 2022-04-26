import logo from "../clet_logo.webp";
import crypto from "../crypto-register.svg";
import classes from "./Register.module.css";

import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <img src={logo} alt="" className={classes.logo} />
        </Link>
      </header>
      <div className={classes.registerContainer}>
        <div>
          <h2>Create Account</h2>
          <div className={classes.formContainer}>
            <form action="">
              <div className={classes.formItemContainer}>
                <label htmlFor="">Full Name</label>
                <input type="text" />
              </div>
              <div className={classes.formItemContainer}>
                <label htmlFor="">Email Address</label>
                <input type="text" />
              </div>
              <div className={classes.formItemContainer}>
                <label htmlFor="">Password</label>
                <input type="text" />
              </div>
              <div className={classes.formItemContainer}>
                <label htmlFor="">Confirm Password</label>
                <input type="text" />
              </div>
              <button className={classes.submitButton}>Create Account</button>

              <p>
                Already have an account? <Link to="/login">Log In</Link>
              </p>
            </form>
          </div>
        </div>
        <img src={crypto} alt="Crypto" className={classes.img} />
      </div>

      <footer>
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

export default Register;
