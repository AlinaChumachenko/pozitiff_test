import React from "react";
import { ButtonCloseModal } from "@/components/Button/ButtonCloseModal";

export const UserForm = ({ isOpen, closeModal }) => {
  const handleSubmit = (event) => {
    preventDefault();
  };
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <h1>Send</h1>
      <ButtonCloseModal toggleOpen={closeModal} />
      <form onSubmit={handleSubmit}>
        <label>
          Name * :
          <input
            type="text"
            name="name"
            placeholder="Your Name..."
            pattern="^(?! )[^0-9]+$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            // autofocus
          />
        </label>
        <label>
          Email * :
          <input
            type="email"
            name="email"
            placeholder="Your Email ..."
            pattern="^[^\s]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix."
          />
        </label>
        <label>
          Phone number * :
          <input
            type="tel"
            name="tel"
            placeholder="Your Contact Number +XXXXXXX..."
            pattern="^\+\d{7,}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            rows="8"
            placeholder="Enter you message here..."
          ></textarea>
        </label>
      </form>
    </div>
  );
};
