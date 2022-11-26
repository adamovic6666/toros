import Link from "next/link";
import Image from "next/image";
import { isWindow } from "../../utils/utils";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <span>Toros</span>
      <span>Advisory</span>
    </div>
  );
};

export default Logo;
