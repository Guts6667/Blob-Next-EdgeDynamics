import Networks from "../Networks";
import styles from "./Contact.module.scss";
``;
import { useState } from "react";
export default function Contact() {
  const [displayForm, setDisplayForm] = useState(true);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(Object.fromEntries(formData)).toString(),
    })
      .then(() => {
        setDisplayForm(false);
        setEmailSent(true);
      })
      .catch((error) => {
        console.log(error);
        setEmailSent(false);
        setDisplayForm(true);
      });
  };
  return (
    <section id="contact" className={styles.container__contact}>
      <div className={styles.container__contact_title}>
        <h2>WANT TO JOIN US?</h2>
        <span className="section_title">Complete the form just below</span>
      </div>
      {displayForm && emailSent === false ? (
        <form
          name="contact"
          onSubmit={handleSubmit}
          method="POST"
          data-netlify="true"
          netlify
        >
          <input type={"text"} placeholder={"John Doe"} name="name" required />
          <input
            type={"email"}
            placeholder={"Your Email"}
            name="email"
            required
          />
          <input type={"text"} placeholder={"Subject"} name="subject" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder={"Your Message"}
            required
          ></textarea>
          <button type="submit">
            <span>Send message</span>
          </button>
          <input type="hidden" name="form-name" value="contact" hidden />
        </form>
      ) : (
        <div className={styles.form_thanks}>
          <span>
            Your emails has been sent!
            <br />
            Thanks for reaching out!
          </span>
        </div>
      )}
      <Networks />
    </section>
  );
}
