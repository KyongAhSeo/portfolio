import emailjs from "emailjs-com";
import "./contactForm.scss";
import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_8s9xnyv", e.target, "user_I37jU39lmOxksuHEVT2Ag").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    setResult(true);
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="text" placeholder="Name" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <textarea placeholder="Message" name="message"></textarea>
      <button type="submit">Send</button>
      {result && <span>감사합니다. 빠르게 연락드리겠습니다!</span>}
    </form>
  );
}
