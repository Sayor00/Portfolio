// src/components/Testimonials.js
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import testimonials from '../data/testimonials';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextTestimonial = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Testimonials
        </motion.h2>
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonials[current].message}"</p>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{testimonials[current].name}</h3>
                <span className="text-gray-600 dark:text-gray-400">{testimonials[current].position}</span>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-600 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none"
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-600 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none"
            aria-label="Next Testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
