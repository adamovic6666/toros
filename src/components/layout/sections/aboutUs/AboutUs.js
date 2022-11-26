import classes from "./AboutUs.module.css";

const About = () => {
  return (
    <div className={classes.About}>
      <span id="about"></span>
      <div className={classes.AboutHeadingWrapper}>
        <h3>
          Toros Advisory helps organisations enter new markets, form
          partnerships, and defend deal value.
        </h3>
      </div>
      <div className={classes.AboutTextWrapper}>
        <div>
          <p>
            Toros Advisory helps clients identify opportunity and manage risk in
            markets around the world. We help organisations enter new markets,
            form partnerships, and defend deal value.
          </p>
          <p>
            We update clients on policy outlook and political risk in a wide
            range of sectors, and help companies complete major M&A
            transactions, providing stakeholder mapping and reputational due
            diligence. We've worked on investment projects totalling billions of
            dollars. and use a global network and qualitative research to
            provide actionable insight. With the global hunt for yield sending
            investors to new emerging and frontier markets, and customers and
            investors rightly insisting on high ESG standards, our work has
            never been in more demand.
          </p>
          <p>We'll help you make better decisions.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
