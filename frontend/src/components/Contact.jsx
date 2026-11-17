import { useState } from "react";
import styles from "../modules/Contact.module.css";
import handleMessage from "../services/contactService";

import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Send,
  CheckCircle2,
} from "lucide-react";

// Contact information
const CONTACT = {
  email: "kalam1010hj@gmail.com",
  phone: "+91 7013741498",
  whatsapp: "917013741498",
};

function Contact() {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validationError, setValidationError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const phoneHref = CONTACT.phone
    ? `tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`
    : null;

  const whatsappNumber = CONTACT.whatsapp.replace(/\D/g, "");

  const whatsappHref = /^\d{10,15}$/.test(whatsappNumber)
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi, I came across your portfolio and would like to connect."
      )}`
    : null;

  function handleOnchange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setValidationError("");
    setError(false);
    setSubmitted(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    setValidationError("");
    setError(false);
    setSubmitted(false);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      setValidationError("Please enter your name.");
      return;
    }

    if (!email) {
      setValidationError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setValidationError("Please enter a valid email address.");
      return;
    }

    if (!message) {
      setValidationError("Please enter your message.");
      return;
    }

    setSubmitting(true);

    try {
      await handleMessage({
        name,
        email,
        message,
      });

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>

        {/* ==========================
            SECTION HEADER
        ========================== */}

        <div className={styles.sectionHeader}>
          <div className={styles.sectionNumber}>
            <span>04 / CONTACT</span>
          </div>

          <div className={styles.heading}>
            <h2>
              Have something
              <br />
              <span>in mind?</span>
            </h2>

            <p>
              Whether it's a job opportunity, freelance project,
              or collaboration, I'm always open to a conversation.
            </p>
          </div>
        </div>


        {/* ==========================
            PRIMARY EMAIL CONTACT
        ========================== */}

        <div className={styles.emailCard}>

          <div className={styles.emailTop}>
            <div className={styles.emailIcon}>
              <Mail size={23} strokeWidth={1.7} />
            </div>

            <span className={styles.preferredBadge}>
              Preferred contact
            </span>
          </div>

          <div className={styles.emailContent}>
            <span className={styles.cardLabel}>
              EMAIL ME DIRECTLY
            </span>

            <h3>
              The easiest way
              <br />
              to reach me.
            </h3>

            <a
              href={`mailto:${CONTACT.email}`}
              className={styles.emailAddress}
            >
              {CONTACT.email}
              <ArrowUpRight
                size={23}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </a>

            <p>
              For opportunities, project discussions, or just
              getting in touch.
            </p>
          </div>

          <div className={styles.emailBottom}>
            <a
              href={`mailto:${CONTACT.email}`}
              className={styles.emailButton}
            >
              <Mail size={17} strokeWidth={1.8} />
              <span>Send an email</span>
              <ArrowUpRight size={17} />
            </a>

            <span className={styles.emailNote}>
              Opens your email application
            </span>
          </div>
        </div>


        {/* ==========================
            OTHER CONTACT METHODS
        ========================== */}

        <div className={styles.otherContactHeader}>
          <h3>Other ways to connect</h3>
          <p>Choose what works best for you.</p>
        </div>

        <div className={styles.contactMethods}>

          {/* PHONE CARD */}

          <div className={styles.methodCard}>
            <div className={styles.methodTop}>
              <div className={styles.methodIcon}>
                <Phone size={21} strokeWidth={1.8} />
              </div>

              <span className={styles.methodCategory}>
                PHONE
              </span>
            </div>

            <div className={styles.methodContent}>
              <h3>Give me a call</h3>

              <p>
                Prefer speaking directly?
                Feel free to reach out by phone.
              </p>

              <div className={styles.methodValue}>
                {CONTACT.phone || "Phone number not added"}
              </div>
            </div>

            <div className={styles.methodBottom}>
              {phoneHref ? (
                <a href={phoneHref} className={styles.methodLink}>
                  Call now
                  <ArrowUpRight size={18} />
                </a>
              ) : (
                <span className={styles.unavailable}>
                  Contact details coming soon
                </span>
              )}
            </div>
          </div>


          {/* WHATSAPP CARD */}

          <div className={styles.methodCard}>
            <div className={styles.methodTop}>
              <div className={styles.methodIcon}>
                <MessageCircle
                  size={21}
                  strokeWidth={1.8}
                />
              </div>

              <span className={styles.methodCategory}>
                WHATSAPP
              </span>
            </div>

            <div className={styles.methodContent}>
              <h3>Let's chat</h3>

              <p>
                Have a quick question or want to
                discuss something? Message me on WhatsApp.
              </p>

              <div className={styles.methodValue}>
                {CONTACT.phone || "WhatsApp contact"}
              </div>
            </div>

            <div className={styles.methodBottom}>
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.methodLink}
                >
                  Open WhatsApp
                  <ArrowUpRight size={18} />
                </a>
              ) : (
                <span className={styles.unavailable}>
                  WhatsApp link coming soon
                </span>
              )}
            </div>
          </div>

        </div>


        {/* ==========================
            OPTIONAL CONTACT FORM
        ========================== */}

        <div className={styles.messageSection}>

          <div className={styles.messageSectionHeader}>
            <div>
              <span className={styles.formEyebrow}>
                ANOTHER OPTION
              </span>

              <h3>Prefer leaving a message?</h3>

              <p>
                You can also send a message directly
                through this website.
              </p>
            </div>

            <button
              type="button"
              className={`${styles.formToggle} ${
                showForm ? styles.formToggleActive : ""
              }`}
              onClick={() => setShowForm((prev) => !prev)}
              aria-expanded={showForm}
              aria-controls="portfolio-contact-form"
            >
              <span>
                {showForm ? "Close form" : "Write a message"}
              </span>

              <ChevronDown size={19} />
            </button>
          </div>


          {showForm && (
            <div
              id="portfolio-contact-form"
              className={styles.formContainer}
            >
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
              >

                {/* Success Message */}

                {isSubmitted && (
                  <div
                    className={styles.successMessage}
                    role="status"
                  >
                    <CheckCircle2 size={20} />

                    <div>
                      <strong>Message sent successfully.</strong>
                      <p>
                        Thanks for reaching out.
                        I'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}


                {/* Error Message */}

                {error && (
                  <div
                    className={styles.errorMessage}
                    role="alert"
                  >
                    <strong>Unable to send your message.</strong>
                    <p>
                      Please try again or contact me directly
                      through email.
                    </p>
                  </div>
                )}


                {/* Validation Error */}

                {validationError && (
                  <div
                    className={styles.errorMessage}
                    role="alert"
                  >
                    <p>{validationError}</p>
                  </div>
                )}


                {/* NAME & EMAIL */}

                <div className={styles.formRow}>

                  <div className={styles.inputGroup}>
                    <label htmlFor="contact-name">
                      Your name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleOnchange}
                      maxLength={150}
                      disabled={isSubmitting}
                    />
                  </div>


                  <div className={styles.inputGroup}>
                    <label htmlFor="contact-email">
                      Email address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleOnchange}
                      disabled={isSubmitting}
                    />
                  </div>

                </div>


                {/* MESSAGE */}

                <div className={styles.inputGroup}>
                  <label htmlFor="contact-message">
                    Your message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Tell me what you have in mind..."
                    value={formData.message}
                    onChange={handleOnchange}
                    disabled={isSubmitting}
                  />
                </div>


                {/* SUBMIT */}

                <div className={styles.formFooter}>

                  <p>
                    Your message will be sent directly
                    to my inbox.
                  </p>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    <span>
                      {isSubmitting
                        ? "Sending..."
                        : "Send message"}
                    </span>

                    {isSubmitting ? (
                      <span className={styles.spinner} />
                    ) : (
                      <Send size={17} />
                    )}
                  </button>

                </div>

              </form>
            </div>
          )}

        </div>


        {/* ==========================
            BOTTOM
        ========================== */}

        <div className={styles.bottom}>
          <span className={styles.bottomLine}></span>

          <span>
            Let's make something useful together.
          </span>

          <ArrowRight size={16} />
        </div>

      </div>
    </section>
  );
}

export default Contact;