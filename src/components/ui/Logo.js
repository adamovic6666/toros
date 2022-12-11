import classes from "./Logo.module.css";
import Image from "next/image";

const Logo = ({ isWhite }) => {
  return (
    <div
      className={`${classes.Logo} ${
        !isWhite ? classes.RegularColor : classes.White
      }`}
    >
      <Image src="/assets/logo.png" width={150} height={23} />
    </div>
  );
};

export default Logo;
