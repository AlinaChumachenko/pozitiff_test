import React, { useState } from "react";
import { UserForm } from "@/components/UserForm/UserForm.js";

export const ButtonModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button type="button" onClick={handleOpenModal} width={200} height={50}>
        SEE MORE PROJECTS
      </button>
      {isOpen && <UserForm closeModal={() => setIsOpen(false)} />}
    </div>
  );
};
