import styles from "../modules/Contact.module.css";
import { useState } from "react";
import handleMessage from "../services/contactService";
function Contact() {
  let [validationError, setValidationError] = useState(false);
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  let [isSubmitted, setSubmitted] = useState(false);
  let [error, setError] = useState(false);
  function handleOnchange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setError(false);

    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(event) {
  event.preventDefault();

  setSubmitted(false);
  setError(false);
  setValidationError("");

  if (!formData.name.trim()) {
    setValidationError("Please enter your name.");
    return;
  }

  if (!formData.email.trim()) {
    setValidationError("Please enter your email address.");
    return;
  }

  if (!formData.message.trim()) {
    setValidationError("Please enter a message.");
    return;
  }

  handleMessage(formData)
    .then((data) => {
      console.log(data);
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    })
    .catch((error) => {
      console.log(error);
      setError(true);
    });
}
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>04 — Contact</span>

          <div className={styles.headingContent}>
            <h2>
              Let's build
              <span> something.</span>
            </h2>

            <p>
              Have an idea, a project, or an opportunity in mind? I'd love to
              hear about it.
            </p>
          </div>
        </div>

        {/* Contact Content */}
        <div className={styles.contactGrid}>
          {/* Left */}
          <div className={styles.intro}>
            <span className={styles.introLabel}>GET IN TOUCH</span>

            <h3>
              Let's turn your
              <br />
              <span>ideas into reality.</span>
            </h3>

            <p>
              Whether you're looking to build something from scratch, improve an
              existing product, or simply want to talk about an idea, feel free
              to reach out.
            </p>

            <a href="mailto:kalam1010hj@gmail.com" className={styles.email}>
              <span>kalam1010hj@gmail.com</span>
              <span className={styles.emailArrow}>↗</span>
            </a>

            {/* Social Links */}
            <div className={styles.socials}>
              <a href="#" target="_blank" rel="noreferrer">
                GitHub
                <span>↗</span>
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                LinkedIn
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className={styles.formWrapper}>
            <form
              className={styles.form}
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              {isSubmitted && (
                <div className={styles.successMessage}>
                  <div className={styles.messageIcon}>✓</div>

                  <div>
                    <span className={styles.messageLabel}>Message sent</span>
                    <p>Thanks for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {error && (
                <div className={styles.errorMessage}>
                  <div className={styles.messageIcon}>!</div>

                  <div>
                    <span className={styles.messageLabel}>Unable to send</span>
                    <p>
                      Something went wrong while sending your message. Please
                      try again.
                    </p>
                  </div>
                </div>
              )}
              {validationError && (
  <div className={styles.validationMessage}>
    <div className={styles.messageIcon}>!</div>

    <div>
      <span className={styles.messageLabel}>Missing information</span>
      <p>{validationError}</p>
    </div>
  </div>
)}
              <div className={styles.inputGroup}>
                <label htmlFor="name">01 — Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(event) => {
                    handleOnchange(event);
                  }}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">02 — Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(event) => {
                    handleOnchange(event);
                  }}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">03 — Message</label>

                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(event) => {
                    handleOnchange(event);
                  }}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                <span>Send message</span>
                <span className={styles.buttonArrow}>↗</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <span className={styles.line}></span>

          <p>Usually responds within 24–48 hours.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
