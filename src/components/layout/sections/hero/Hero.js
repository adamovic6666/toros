import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${classes.Hero}`}>
      <div className={classes.Parallax}></div>
      <h1>
        <span>Identify</span> <span>opportunity.</span> <span>manage </span>
        <span>risk.</span>
      </h1>
    </div>
  );
};

export default Hero;
