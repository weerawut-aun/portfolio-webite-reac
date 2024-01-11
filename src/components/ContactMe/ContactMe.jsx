import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";

import imgEmail from "../../assets/email-icon.png";
import imgGithub from "../../assets/github-icon.png";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={imgEmail} text="weerawutaun@gmail.com" />
          <ContactInfoCard
            iconUrl={imgGithub}
            text="https://github.com/weerawut-aun"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
