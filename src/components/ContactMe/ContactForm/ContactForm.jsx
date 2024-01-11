import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <textarea name="meassage" rows="3" placeholder="Meassage"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
