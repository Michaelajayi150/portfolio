import React from "react";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-icons">
        <a href="tel: +2349065766263" className="icon">
          <BsIcons.BsTelephoneFill className="phone" />
        </a>
        <a href="mailto:ajayimichael150@gmail.com" className="icon">
          <HiIcons.HiMail className="mail" />
        </a>
        <a href="/" className="icon">
          <BsIcons.BsTwitter className="twitter" />
        </a>
        <a href="/" className="icon">
          <BsIcons.BsInstagram className="instagram" />
        </a>
      </div>
      <div className="contact-items">
        <a href="tel: +2349065766263" id="phone" className="item phone">
          <strong>Phone Number</strong>
          <br />
          <em>+234 906 </em>
        </a>
        <a
          href="mailto:ajayimichael150@gmail.com"
          id="mail"
          className="item mail"
        >
          <strong>Mail</strong>
          <br />
          <em>ajayimichael150@gmail.com</em>
        </a>
        <a href="/" id="twitter" className="item twitter">
          <strong>Twitter</strong>
          <br />
          <em>ajayimichael150@gmail.com</em>
        </a>
        <a href="/" id="instagram" className="item instagram">
          <strong>Instagram</strong>
          <br />
          <em>ajayimichael150@gmail.com</em>
        </a>
      </div>
    </div>
  );
}

export default Contact;
