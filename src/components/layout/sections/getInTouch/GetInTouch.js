import classes from "./GetInTouch.module.css";
import { useState } from "react";

const GetInTouch = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      fullname,
      email,
      subject,
      message,
    };

    // await fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <div className={classes.GetInTouch}>
      <h3>Get in touch</h3>
      <p>
        To hear more about our services, and to discuss potential projects,
        please get in touch
      </p>
      <form className={classes.Form} action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Full name"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
          />
        </div>
        <div>
          <input
            placeholder="E-mail"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Message Subject"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Type your message here"
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <button>Send</button>
      </form>
    </div>
  );
};

export default GetInTouch;
