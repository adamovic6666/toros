import classes from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <p>Copyright © 2022 Toros Advisory Limited. All rights reserved.</p>

        <Link href="/politika-privatnosti">Privacy policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
