import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toaster from "toastify-react";
import "../App.css"
const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
  process.env;

export default function Email(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form.current,
        REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          toastFailure();
        }
      );
    e.target.reset();
    props.setState((prevState) => !prevState);
    toast();
  };

  function toast() {
    toaster.success("Message Sent!");
  }

  function toastFailure() {
    toaster.error("Err, please try again.");
  }
  return (
    <div>
      {props.state && (
        <form className="email-form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>E-mail</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="form-submit" type="submit" value="SEND" />
        </form>
      )}
    </div>
  );
}
