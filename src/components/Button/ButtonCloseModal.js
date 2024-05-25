import React from "react";
import Image from "next/image";
import IconClose from "@/images/closex.svg";

export const ButtonCloseModal = ({ toggleOpen }) => {
  return (
    <div>
      <button type="button" onClick={toggleOpen} width={110} height={100}>
        <Image className="text-black" priority src={IconClose} alt="Close" />
      </button>
    </div>
  );
};
