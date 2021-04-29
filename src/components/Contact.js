import React, { useState } from "react";
import "./Contact.css";

var errorMsg;
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(name, email, message);
  };

  const emailValidatorHandler = (evt) => {
    if (evt.target.value === "") {
      setIsValidEmail(false);
      errorMsg = "Email cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(evt.target.value)) {
      setIsValidEmail(false);
      errorMsg = "Email is invalid";
    } else {
      setIsValidEmail(true);
    }
  };

  return (
    <>
      <header>
        <h1>Contact Us</h1>
      </header>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          className="form-item"
          onInput={(e) => setName(e.target.value)}
          placeholder="Your name.."
        />
        <br />

        <div>
          <input
            id="email"
            type="email"
            className="form-item"
            onInput={(e) => setEmail(e.target.value)}
            onChange={emailValidatorHandler}
            placeholder="Your email.."
          />
          {!isValidEmail && <p className="Error-text">{errorMsg}</p>}
        </div>
        <br />

        <textarea
          id="message"
          rows="5"
          onInput={(e) => setMessage(e.target.value)}
          className="form-item"
          placeholder="Message.."
        />
        <br />

        <input
          className="complete-btn"
          type="submit"
          disabled={!isValidEmail}
        />
      </form>
    </>
  );
};

export default Contact;
