import "./contact.scss";
import ContactForm from "../contactForm/ContactForm";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/hello.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <ContactForm />
        <div className="icons">
          <a href="https://github.com/KyongAhSeo" target="_blank" rel="noreferrer">
            <img src="assets/github.png" alt="깃허브로 이동" />
          </a>
          <a href="#intro">
            <img src="assets/top.png" alt="맨위로 이동" />
          </a>
        </div>
      </div>
    </div>
  );
}
