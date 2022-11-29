import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${classes.Hero}`}>
      <div className={classes.Parallax}></div>
      <h1>Identify opportunity. manage risk.</h1>
    </div>
  );
};

export default Hero;
