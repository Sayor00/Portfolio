// src/utils/validation.js
export const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };
  
  export const validateForm = ({ name, email, message }) => {
    const errors = {};
  
    if (!name.trim()) {
      errors.name = 'Name is required.';
    }
  
    if (!email) {
      errors.email = 'Email is required.';
    } else if (!validateEmail(email)) {
      errors.email = 'Email is invalid.';
    }
  
    if (!message.trim()) {
      errors.message = 'Message is required.';
    }
  
    return errors;
  };
  