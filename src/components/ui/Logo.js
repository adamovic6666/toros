import classes from "./Logo.module.css";

const Logo = ({ headerIsVisible }) => {
  return (
    <div
      className={`${classes.Logo} ${
        headerIsVisible ? classes.RegularColor : classes.White
      }`}
    >
      <span>Toros</span>
      <span>Advisory</span>
    </div>
  );
};

export default Logo;
