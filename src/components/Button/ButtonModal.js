import React from "react";
import { UserForm } from "@/components/UserForm/UserForm.js";

export const ButtonModal = ({ toggleOpen }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => toggleOpen()}
        width={200}
        height={50}
      >
        SEE MORE PROJECTS
      </button>
    </div>
  );
};
