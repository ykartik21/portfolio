import React, { useRef } from "react";
import "./Conatct.css";
import {
  AiOutlineMail,
  AiFillPhone,
  AiOutlineLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  //initialising refernce hooks
  const formRef = useRef();

  //handleSubmit function

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_aemxadb",
        "template_e0r1ttc",
        formRef.current,
        "5mngjew2g7DeROmMh"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    //

    <div className="contact-container" id="contact-container">
      <div className="contact-container-one">
        <div className="contact-container-titles">
          <h5 className="contact-container-title-heading">CONTACT US</h5>
          <h1 className="contact-container-title-heading-two">
            Ways To Contact Me
          </h1>
        </div>
        <div className="contact-info-container">
          <div className="contact-item">
            <AiOutlineMail className="contact-item-icon" />
            ykartik21@gmail.com
          </div>
          <div className="contact-item">
            <AiFillPhone className="contact-item-icon" />
            +919259138676
          </div>
          <div className="contact-item">
            <AiFillPhone className="contact-item-icon" />
            +917217368655
          </div>
          <div className="contact-item">
            <AiOutlineLinkedin className="contact-item-icon" />
            <a href="https://www.linkedin.com/in/kartiksays/">Linkedin</a>
          </div>
          <div className="contact-item">
            <AiFillGithub className="contact-item-icon" />
            <a href="https://github.com/ykartik21">Github</a>
          </div>
        </div>
      </div>
      <div className="cotact-form-container">
        <h1 className="contact-form-container-heading-one">
          Let's discuss your project
        </h1>
        <h5 className="contact-form-container-heading-two">
          Whats your story? Get in touch. Always available for freelancing if
          the
          <br />
          right project comes along me.
        </h5>

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            className="contact-form-input"
          />
          <input
            type="text"
            placeholder="Subject"
            name="user_subject"
            className="contact-form-input"
          />
          <input
            type="text"
            placeholder="Email"
            name="user_email"
            className="contact-form-input"
          />
          <textarea
            rows="5"
            placeholder="Message"
            name="message"
            className="contact-form-text"
          />
          <button className="contact-form-container-button"> Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
