import React, { useRef } from "react";
import Footer from "../components/footer";
import emailjs from "@emailjs/browser";



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y110tpr", "template_xmrgjwu", form.current, {
        publicKey: `M-YhRMostTfAzTINQ`,
      })
      .then(
        () => {
          console.log("Sent!");
          e.target.reset();
        },
        (error) => {
          console.log("Error, please try again.", error.text);
        }
      );
  };

  return (
    <>
    <body className="contact-page">
      <div className="contact-container">

        <div className="contact-link poppins-extralight">
        <h1>
          Contact me!
        </h1>
        <span>Oficial Email</span>
        <a href="https://mail.google.com/mail/u/0/">larissaprofissa@gmail.com</a>
        </div>

        <div className="contact-form-box">
        <form ref={form} onSubmit={sendEmail} className="contact-form poppins-extralight">
          
          <input className="text-field poppins-regular" type="text" name="user_name" placeholder="Your name"/>
          
          <input className="text-field poppins-regular" type="text" name="user_phone" placeholder="Contact number"/>
          
          <input className="text-field poppins-regular" type="email" name="user_email" placeholder="Email"/>
          
          <textarea className="poppins-regular" name="message" placeholder="Your message here!" rows={1}/>
          <button type="submit" className="poppins-regular" >Send</button>
        </form>
        </div>
      </div>
      <Footer />
      </body>
    </>
  );
};
export default Contact;
