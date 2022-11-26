import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${classes.Hero}`}>
      <div className={classes.Parallax}></div>
      <h1>IDENTIFY OPPORTUNITY, MANAGE RISK.</h1>
    </div>
  );
};

export default Hero;
