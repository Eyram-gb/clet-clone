import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from "../clet_logo.webp";
import MobileNavbar from "./MobileNavbar";

function MainHeader() {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <header className={classes.header}>
      {open && <MobileNavbar isMobile={true} closeModal={closeModal} />}
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/extensions"> Clet Name Extensions</NavLink>
          </li>

          <li>
            <NavLink to="/register">Sign Up</NavLink>
          </li>

          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        </ul>
      </nav>
      {!open && (
        <HiOutlineMenuAlt3
          onClick={() => setOpen(!open)}
          className={classes.hamburger}
          size="30px"
        />
      )}
    </header>
  );
}

export default MainHeader;
