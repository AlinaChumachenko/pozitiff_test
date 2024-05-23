import React from "react";
import Image from "next/image";
import IconClose from "@/images/closex.svg";

export const ButtonCloseModal = ({ onClick }) => {
  return (
    <div>
      <button type="button" onClick={onClick} width={50} height={50}>
        <Image priority src={IconClose} alt="Close" />
      </button>
    </div>
  );
};
