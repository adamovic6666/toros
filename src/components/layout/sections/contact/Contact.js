import classes from "./Contact.module.css";
import LinkedIn from "../../../svgs/LinkedIn";
import Mail from "../../../svgs/Mail";

const Contact = () => {
  return (
    <div className={`${classes.ContactWrapper}`}>
      <span id="contact"></span>
      <div className={classes.ContactImage}></div>
      <div className={classes.DetailsWrapper}>
        <div>
          <div className={classes.Logo}>
            <p>
              <span>Toros</span>
              <br /> <span>Advisory</span>
            </p>
          </div>
          <span>Registered address</span>
          <p>
            3rd Floor <br /> Chancery House <br /> St Nicholas Way <br /> Sutton{" "}
            <br /> SM1 1JB <br /> United Kingdom
          </p>
          <div className={classes.LinksWrapper}>
            <a
              href="https://www.linkedin.com/company/toros-advisory/people/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
            <a href="mailto:arm@torosadvisory.com">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
