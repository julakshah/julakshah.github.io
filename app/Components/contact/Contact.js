import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch!</h2>
      <div className="contact__container">
        <div className="contact__container-info">
          <h2 className="container__title">Ways To Reach Me</h2>
          <div className="info grid">
            <div className="info__method">
              <p className="contact__method">Personal Email</p>
              <p className="contact">julakshah@gmail.com</p>
            </div>
            <div className="info__method">
              <p className="contact__method">Message me on LinkedIn</p>
              <p className="contact">linkedin.com/in/julakshah</p>
            </div>
          </div>
          <p className="contact__note">
            {" "}
            Thank you for reaching out! I'll get back to you as soon as I can.
          </p>
          <a href="#work" className="btn">
            Back To Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
