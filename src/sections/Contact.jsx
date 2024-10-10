import React, { useRef, useState } from "react";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formref = useRef();
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  //service_y5vjowj
  //template_0mpfod7
  const handler = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs
      .send(
        "service_y5vjowj",
        "template_md56yub",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: "Fadil",
        },
        "JH6H_VZ1y6lh5iCI-"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setdata({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col ">
        <img
          src="assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container ">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>
          <form
            onSubmit={handlesubmit}
            ref={formref}
            className="mt-12 flex flex-col space-y-3"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type=" text"
                name="name"
                value={data.name}
                placeholder="Fadil"
                required
                className="field-input"
                onChange={handler}
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type=" email"
                name="email"
                value={data.email}
                placeholder="fadilshereefmx@gmail.com"
                required
                className="field-input"
                onChange={handler}
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={data.message}
                placeholder="Hi, I would like to discuss..."
                required
                rows="5"
                className="field-input"
                onChange={handler}
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending" : "Send Message"}
              <img
                src="assets/arrow-up.png"
                className="field-btn_arrow"
                alt=""
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
