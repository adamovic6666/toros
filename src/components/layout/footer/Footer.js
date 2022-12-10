import classes from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <p>
          <span>Copyright © 2022 Toros Advisory Limited.</span>{" "}
          <span>All rights reserved.</span>{" "}
        </p>
        <Link href="/privacy-policy">Privacy policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
