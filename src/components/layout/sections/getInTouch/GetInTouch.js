import classes from "./GetInTouch.module.css";

const GetInTouch = () => {
  return (
    <div className={classes.GetInTouch}>
      <h3>Get in touch</h3>
      <p>
        To hear more about our services, and to discuss potential projects,
        please get in touch
      </p>
      <form className={classes.Form} action="">
        <div>
          <input type="text" placeholder="Full name" />
        </div>
        <div>
          <input type="text" placeholder="E-mail" />
        </div>
        <div>
          <input type="text" placeholder="Message Subject" />
        </div>
        <div>
          <textarea type="text" placeholder="Type your message here" />
        </div>
        <button>Send</button>
      </form>
    </div>
  );
};

export default GetInTouch;
