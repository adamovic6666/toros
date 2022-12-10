import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${classes.Hero}`}>
      <div className={classes.Parallax}></div>
      <h1>
        <span>Identify opportunity.</span> <span>manage risk.</span>{" "}
      </h1>
    </div>
  );
};

export default Hero;
