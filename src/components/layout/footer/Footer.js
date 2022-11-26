import classes from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <p>Toros Advisory Limited 2022 © All rights reserved.</p>
        <Link href="/politika-privatnosti">Privacy policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
