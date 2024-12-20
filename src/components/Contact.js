// src/components/Contact.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import { validateForm } from '../utils/validation';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 transition-colors duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                errors.name
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              } bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors duration-300`}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                errors.email
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              } bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors duration-300`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                errors.message
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              } bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors duration-300`}
              placeholder="Your message..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-center text-gray-700 dark:text-gray-300 transition-colors duration-300">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
