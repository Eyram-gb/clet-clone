import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div>&copy; Clet Name Service</div>
      <div>
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Docs</li>
          <li>Privacy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
