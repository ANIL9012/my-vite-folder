import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/edusity_assets/msg-icon.png";
import mail_icon from "../../assets/edusity_assets/mail-icon.png";
import phone_icon from "../../assets/edusity_assets/phone-icon.png";
import location_icon from "../../assets/edusity_assets/location-icon.png";
import white_arrow from "../../assets/edusity_assets/white-arrow.png";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "184ab00c-5466-4382-8d1d-3450af6103e7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Feel free a reach out through contact form or find our contact
            information below. Your feedback, question, and suggestion are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              {" "}
              <img src={mail_icon} alt="" /> Contact@AnilKumar.dev
            </li>
            <li>
              {" "}
              <img src={phone_icon} alt="" /> +1 941-189-4517
            </li>
            <li>
              {" "}
              <img src={location_icon} alt="" />
              77 Massachusetts Ave Cambridge <br />
              MA 02139, United States
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="" className="form-lable">
              Your name
            </label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter your name"
              required
            />

            <label htmlFor="">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id=""
              placeholder="Enter your phone numer"
              required
            />

            <label htmlFor="">Enter your message here</label>
            <textarea
              name="message"
              rows="6"
              id=""
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit now <img src={white_arrow} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}

export default Contact;
