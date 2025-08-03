import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaInstagram, FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';

function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isHuman, setIsHuman] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setIsHuman(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isHuman) {
      toast.error('Please confirm you are not a robot.', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
      return;
    }

    const serviceID = 'service_3xgexj4';
    const templateID = 'template_39iy38c';
    const publicKey = '93aw2A5xVym7kiQ9f';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: 'toast-yellow',
          bodyClassName: 'toast-body-yellow',
          theme: 'colored'
        });
        setFormData({ username: '', email: '', subject: '', message: '' });
        setIsHuman(false);
      })
      .catch(() => {
        toast.error('Failed to send message.', {
          position: 'top-right',
          autoClose: 3000,
          className: 'toast-yellow',
          bodyClassName: 'toast-body-yellow',
          theme: 'colored'
        });
      });
  };

  return (
    <div id="contact" className="relative top-[350px] flex justify-center px-4">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-8 md:gap-10 p-10">

        {/* Left Box */}
        <div className="w-full md:w-[50%] h-auto p-6 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[30px] text-center md:text-left">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FED035]">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-4 text-[#928D9B]">
            Have a question, feedback, or just want to say hi? Feel free to reach out! I'm open to working together or helping with any design or development needs.          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a href="https://www.linkedin.com/in/sachin-thilakarathna-b7827727b/" className="text-[#797874] hover:text-white text-xl" target="_blank" rel="noopener noreferrer" title='Sachin thilakarathna on Linkedin'><FaLinkedin /></a>
            <a href="https://www.behance.net/tss11" className="text-[#797874] hover:text-white text-xl" target="_blank" rel="noopener noreferrer" title='Sachin thilakarathna on Behance' ><FaBehance /></a>
            <a href="https://github.com/SachinThilakarathna" className="text-[#797874] hover:text-white text-xl" target="_blank" rel="noopener noreferrer" title='Sachin thilakarathna on Github'><FaGithub /></a>
            <a href="https://www.instagram.com/sachn.thilakarathna/?hl=en" className="text-[#797874] hover:text-white text-xl" target="_blank" rel="noopener noreferrer" title='Sachin thilakarathna on Instagram'><FaInstagram /></a>
            {/* <a href="https://twitter.com/your_username" className="text-[#797874] hover:text-white text-xl" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a> */}
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-[50%] p-6 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[30px] space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#1D253B] text-white placeholder-gray-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#1D253B] text-white placeholder-gray-400 outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#1D253B] text-white placeholder-gray-400 outline-none"
          />
          <textarea
            name="message"
            placeholder="Say something..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#1D253B] text-white placeholder-gray-400 outline-none resize-none"
          />
          <label className="flex items-center gap-2 text-[#DCD5EB]">
            <input
              type="checkbox"
              checked={isHuman}
              onChange={handleCheckboxChange}
              className="w-4 h-4 rounded border-gray-300 bg-gray-700 text-[#FED035] focus:ring-0"
              required
            />
            I'm not a robot
          </label>
          <button
            type="submit"
            disabled={!isHuman}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-200
              ${isHuman ? 'bg-[#5A45FF] hover:bg-[#4433cc] text-white' : 'bg-gray-600 cursor-not-allowed text-gray-300'}`}
          >
            Send
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Contact;
