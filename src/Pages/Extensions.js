import { Link, NavLink } from "react-router-dom";
import classes from "./Extensions.module.css";
import logo from "../clet_logo.webp";
import chrome from "../chrome.png";
import brave from "../brave-icon.png";
import edge from "../edge-icon.png";
import firefox from "../firefox-icon.png";

function Extensions() {
  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <nav>
          <ul>
            <li className={classes.firstQuery}>
              <NavLink to="/register"> Buy a Clet name</NavLink>
            </li>
            <li className={classes.secondQuery}>
              <NavLink to="/register"> Buy </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className={classes.extensionsCTA}>
        <h3>THE ULTIMATE CRYPTO NAME RESOLVER</h3>
        <h1>DOWNLOAD CLET</h1>
        <p>Detected Chrome browser</p>
        <a
          href="shorturl.at/jtJPT"
          target="_blank"
          rel="noreferrer noopener"
          className={classes.downloadBtn}
        >
          <img src={chrome} alt="chrome-icon" /> Download for Chrome
        </a>
        <p>Not Chrome? Download Clet Extension from the options below</p>
        <div className={classes.extensionsLink}>
          <a href="https://cutt.ly/RFWyR1n">
            <img src={chrome} alt="chrome-icon" />
          </a>
          <a href="https://cutt.ly/pFWyHRK">
            <img src={firefox} alt="firefox-icon" />
          </a>
          <a href="https://cutt.ly/pFWyHRK">
            <img src={edge} alt="edge-icon" />
          </a>
          <a href="https://cutt.ly/pFWyHRK">
            <img src={brave} alt="brave-icon" />
          </a>
        </div>
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

export default Extensions;
