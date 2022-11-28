import classes from "./Contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={`${classes.ContactWrapper}`}>
      <span id="contact"></span>
      <div className={classes.ContactImage}></div>
      <div className={classes.DetailsWrapper}>
        <div className={classes.Logo}>
          <p>
            <span>Toros</span>
            <br /> <span>Advisory</span>
          </p>
        </div>
        <span>Registered address</span>
        <p>
          3rd Floor Chancery House St Nicholas Way Sutton SM1 1JB United Kingdom
        </p>
        <div className={classes.LinksWrapper}>
          <a
            href="https://www.linkedin.com/company/toros-advisory/people/"
            target="_blank"
          >
            <Image
              height={40}
              width={40}
              alt="card-image"
              src="/assets/linkedIn.png"
            />
          </a>
          <a href="mailto:arm@torosadvisory.com">
            <Image
              height={40}
              width={40}
              alt="card-image"
              src="/assets/email.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
