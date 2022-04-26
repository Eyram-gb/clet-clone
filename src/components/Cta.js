import { Link } from "react-router-dom";
import crypto from "../crypto.svg";
import classes from "./Cta.module.css";

function Cta() {
  return (
    <main>
      <div className={classes.cta}>
        <h1>Get a Name For All Your Crypto Addresses Now!!</h1>

        <p>Own a unique name that maps to all your crypto addresses</p>
        <p className={classes.examples}>
          (Get .btc, .eth, .bnb, .ada, +12 others){" "}
        </p>

        <Link to="register">Let's Go </Link>
      </div>
      <div>
        <img src={crypto} alt="Crypto" className={classes.img} />
      </div>
    </main>
  );
}

export default Cta;
