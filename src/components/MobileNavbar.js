import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../clet_logo.webp";
import classes from "./MobileNavbar.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

function MobileNavbar(props) {
  const navigate = useNavigate();
  const animateFrom = { opacity: 0, x: -300 };
  const animateTo = { opacity: 1, x: 0 };

  return (
    <motion.section
      className={classes.mobileNavbar}
      initial={animateFrom}
      animate={animateTo}
    >
      <header className={classes.header}>
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <AiOutlineCloseCircle
          color="white"
          size="30px"
          cursor="pointer"
          onClick={() => props.isMobile && props.closeModal()}
          initial={animateTo}
          animate={animateFrom}
        />
      </header>
      <div className={classes.btnLinks}>
        <button onClick={() => navigate("/extensions")}>Clet Extension</button>
        <button onClick={() => navigate("/register")}>Sign Up</button>
        <button onClick={() => navigate("/login")}>Log in</button>
      </div>
    </motion.section>
  );
}

export default MobileNavbar;
