import React from "react";
import { ButtonCloseModal } from "@/components/Button/ButtonCloseModal.js";
import { ButtonSendForm } from "@/components/Button/ButtonSendForm.js";

export const UserForm = ({ isOpen, closeModal }) => {
  const handleSubmit = (event) => {
    preventDefault();
  };
  return (
    <div
      className="max-w-[409px] h-96 p-5 flex flex-col justify-center items-center bg-slate-400"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="flex justify-between">
        <ButtonSendForm />
        <ButtonCloseModal toggleOpen={closeModal} />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 mt-1">
        <label>
          <input
            className="w-full h-12 p-2.5"
            type="text"
            name="name"
            placeholder="Your Name..."
            pattern="^(?! )[^0-9]+$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
        </label>
        <label>
          <input
            className="w-full h-12 p-2.5"
            type="email"
            name="email"
            placeholder="Your Email ..."
            pattern="^[^\s]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix."
          />
        </label>
        <label>
          <input
            className="w-full h-12 p-2.5"
            type="tel"
            name="tel"
            placeholder="Your Contact Number +XXXXXXX..."
            pattern="^\+\d{7,}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <label>
          <textarea
            className="w-full h-[109px] p-2.5"
            name="message"
            rows="8"
            placeholder="Enter you message here..."
          ></textarea>
        </label>
      </form>
    </div>
  );
};
