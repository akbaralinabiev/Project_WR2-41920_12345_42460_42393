import { useState } from "react";
import "./contact.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

import { default as message } from "../../assets/images/contact/message.svg";
import { default as phone } from "../../assets/images/contact/phone.svg";

const Contact = ({ openCart }) => {
  const location = useLocation();
  const selectedPackage = location.state?.package;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    services: [],
    message: '',
  });


  const servicesList = [
    'Mobile App Development',
    'Frontend Development',
    'UI/UX Design',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const alreadySelected = prev.services.includes(service);
      return {
        ...prev,
        services: alreadySelected
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      alert(result.message || 'Form submitted!');
    } catch (error) {
      alert('Error submitting form.');
    }
  };

  return (
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
      <form onSubmit={handleSubmit} >
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

      <p className="text-sm font-medium mt-4">Services you are interested on:</p>
      <div className="space-y-4">
        {servicesList.map((service) => (
          <label
            key={service}
            className="flex items-center justify-between p-4 border rounded-xl cursor-pointer hover:bg-gray-50"
          >
            <div className="font-semibold">{service}</div>
            <input
              type="checkbox"
              checked={formData.services.includes(service)}
              onChange={() => handleServiceToggle(service)}
              className="w-5 h-5"
            />
          </label>
        ))}
      </div>

      <textarea
        name="description"
        placeholder="Please tell us little bit more about your project."
        className="w-full p-3 border rounded-md mt-4"
        rows="4"
        value={formData.description}
        onChange={handleChange}
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default Contact;