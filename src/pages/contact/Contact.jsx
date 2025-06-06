import React, { useState } from "react";
import "./contact.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

import { default as message } from "../../assets/images/contact/message.svg";
import { default as phone } from "../../assets/images/contact/phone.svg";
import { Footer } from "../../components/export.js";
import facebook from '../../assets/images/contact/facebook.svg';
import twitter from '../../assets/images/contact/twitter.svg';
import instagram from '../../assets/images/contact/instagram.svg';
import linkedin from '../../assets/images/contact/linkedin.svg';

import behance from '../../assets/images/contact/behance.svg';
import dribble from '../../assets/images/contact/dribble.svg';
import whatsapp from '../../assets/images/contact/whatsapp.svg';
import telegram from '../../assets/images/contact/telegram.svg';

import arrow from '../../assets/images/contact/arrow.svg';
// Importing service icons
import mobile from '../../assets/images/contact/mobile.svg';
import frontend from '../../assets/images/contact/frontend.svg';
import uiux from '../../assets/images/contact/uiux.svg';

const Contact = ({ openCart }) => {
  const location = useLocation();
  const selectedPackage = location.state?.package;
  const [showSuccess, setShowSuccess] = React.useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    services: [],
    description: '',
  });

  const [openIndex, setOpenIndex] = useState(null);


  const servicesList = [
    {
      label: "Mobile App Development",
      icon: mobile,
    },
    {
      label: "Frontend Development",
      icon: frontend,
    },
    {
      label: "UI/UX Design",
      icon: uiux,
    },
  ];

  const faqs = [
    {
      question: "What services do you offer for web and mobile app design?",
      answer: "- We provide comprehensive services, including UI/UX design, responsive web design, mobile app design, and interactive prototyping to ensure a seamless and visually appealing user experience.",
    },
    {
      question: "Do you offer help with urgent projects?",
      answer: "- We understand the importance of meeting tight deadlines. Our team is well-equipped to handle urgent projects, ensuring a rapid and efficient turnaround without compromising on the quality of work. Contact us with your specific requirements, and we'll work together to meet your project's urgent needs.",
    },
    {
      question: "Can you integrate e-commerce features into our website or app?",
      answer: "- Absolutely! We specialize in integrating secure and user-friendly e-commerce features into websites and mobile apps to enhance your online business presence.",
    },
    {
      question: "What technologies do you use for web and mobile app development?",
      answer: "- We leverage cutting-edge technologies and frameworks, ensuring your projects are built with the latest tools to deliver high-performance, scalable, and innovative solutions.",
    },
    {
      question: "How do you approach user testing in the design process?",
      answer: "- User testing is integral to our design process. We conduct usability tests, gather feedback, and iterate to refine the design, ensuring it aligns with user expectations and preferences.",
    },
    {
      question: "What support and maintenance services do you offer post-launch?",
      answer: "- Our commitment extends beyond the launch. We provide ongoing support, updates, and maintenance to ensure your website or app remains secure, up-to-date, and operates smoothly over time.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceToggle = (serviceLabel) => {
    setFormData(prev => {
      const services = prev.services.includes(serviceLabel)
        ? prev.services.filter(s => s !== serviceLabel)
        : [...prev.services, serviceLabel];
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: '',
          services: [],
          description: ''
        });

        // Show success message or animation here
        setShowSuccess(true);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  React.useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="contact-main-container">
      <div className="contact">
        {/* Navbar Component */}
        <Navbar openCart={openCart} />
        {selectedPackage && <p>Selected Package: {selectedPackage}</p>}
        <div className="contact-header-bg">
          <div className="contact-header">
            <div className="contact-header-text">
              <h5>Contact Us</h5>
              <h1>Let’s work together</h1>
              <p>
                Ready to turn ideas into reality? Reach out, share your vision, and let the collaboration begin. Your success starts with a message.
              </p>
            </div>
          </div>
          <div className="contactus-process_container">
            <div className="contactus-process_container-box">
              <img src={message} alt="" />
              <div className="contactus-process_container-box-text">

                <a href="mailto:contact@appbuild.agency " className="contact-email-link">contact@appbuild.agency</a>
                <h3>Send us a message!</h3>
              </div>
            </div>
            <div className="contactus-process_container-box">
              <img src={phone} alt="" />
              <div className="contactus-process_container-box-text">
                <a href="tel:+1234567890" className="contact-phone-link">+48 885 730 500</a>
                <h3>Call us!</h3>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">

          <div className="form-columns">
            <div className="form-column-1">
              <div className="form-group">
                <label htmlFor="Enter your email" className="sr-only">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-3 border rounded-md"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Enter your email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="p-3 border rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-column-2">
              <div className="form-group">
                <label htmlFor="Company name" className="sr-only">Compnay</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  className="p-3 border rounded-md"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Enter your budget" className="sr-only">Budget</label>
                <input
                  type="text"
                  name="budget"
                  placeholder="5.000 $ - 15.000 $"
                  className="p-3 border rounded-md"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>


          <p className="text-sm">Services you are interested on:</p>
          <div className="services-box">
            {servicesList.map(service => (
              <label
                key={service.label}
                className="flex items-center justify-between border border-[#E1E0FF] rounded-xl p-4 mb-4 bg-[#FBFBFE] shadow-sm cursor-pointer hover:shadow-md transition"
              >
                <div className="services-list">
                  <div className="services-list-items">
                    <img src={service.icon} alt={service.label} className="w-12 h-12" />
                    <span className="text-[#1A1A40] font-semibold text-lg">{service.label}</span>
                  </div>
                  <div className="checkbox-wrapper-13">
                    <input
                      id={`service-${service.label.replace(/\s+/g, '-')}`}
                      type="checkbox"
                      checked={formData.services.includes(service.label)}
                      onChange={() => handleServiceToggle(service.label)}
                      className="checkbox"
                    />
                  </div>
                </div>
              </label>
            ))}
          </div>
          <textarea
            className="textarea"
            name="description"
            placeholder="Please tell us little bit more about your project."
            rows="4"
            value={formData.description}
            onChange={handleChange}
            ></textarea>

          <div className="contact-form-submit">
            <button
            type="submit"
            className="submit"
            >
            Submit
          </button>
            {showSuccess && (
              <div className="success-message">
                Your message has been sent! 🎉
              </div>
            )}
          </div>
        </form>
        <div className="social-media-container">
          <div className="home-process_header">
            <h5 className="bouncing">Follow us</h5>
            <h1>
              Stay connected for insightful development content.
            </h1>
          </div>
          <div className="social-media-frame">
            <div className="social-media-row-1">
              <div className="social-media-box">
                <img src={facebook} alt="" />
                <h2>Facebook</h2>
                <div className="contactus-btn-white-bg">
                  <a href="#0" rel="noopener noreferrer">Follow Us</a>
                </div>
              </div>
              <div className="social-media-box">
                <img src={twitter} alt="" />
                <h2>Twitter</h2>
                <div className="contactus-btn-white-bg">
                  <a href="#0" rel="noopener noreferrer">Follow Us</a>
                </div>
              </div>
              <div className="social-media-box">
                <img src={instagram} alt="" />
                <h2>Instagram</h2>
                <div className="contactus-btn-white-bg">
                  <a href="#0" rel="noopener noreferrer">Follow Us</a>
                </div>
              </div>
              <div className="social-media-box">
                <img src={linkedin} alt="" />
                <h2>Linkedin</h2>
                <div className="contactus-btn-white-bg">
                  <a href="#0" rel="noopener noreferrer">Follow Us</a>
                </div>
              </div>
            </div>
            <div className="social-media-row-1">
              <div className="social-media-box">
                <img src={behance} alt="" />
                <h2>Behance</h2>
                <div className="contactus-btn-white-bg">
                  <a href="#0" rel="noopener noreferrer">Follow Us</a>
                </div>
              </div>
              <div className="social-media-box">
                <img src={dribble} alt="" />
                <h2>Dribble</h2>
                <div className="contactus-btn-white-bg">
                  <a href="#0" rel="noopener noreferrer">Follow Us</a>
                </div>
              </div>
              <div className="social-media-box">
                <img src={whatsapp} alt="" />
                <h2>WhatsApp</h2>
                <div className="contactus-btn-white-bg">
                  <a href="#0" rel="noopener noreferrer">Follow Us</a>
                </div>
              </div>
              <div className="social-media-box">
                <img src={telegram} alt="" />
                <h2>Telegram</h2>
                <div className="contactus-btn-white-bg">
                  <a href="#0" rel="noopener noreferrer">Follow Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-container">
          <div className="home-process_header">
            <h5 className="bouncing">Frequently Asked Questions</h5>
            <h1>
              Have a questions ? We have answers
            </h1>
            <p>Explore our FAQ for swift responses to commonly raised questions, ensuring clarity and ease of understanding</p>
          </div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <div className="faq-main" onClick={() => toggleFAQ(index)}>
                <div className="faq-question" >
                  {faq.question}
                  <div className="faq-arrow-container">
                    <img src={arrow} className="faq-arrow" alt="" />
                  </div>
                </div>
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div >
  );
};

export default Contact;
