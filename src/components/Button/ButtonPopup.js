import React from "react";
import Image from "next/image";
import IconPlus from "@/images/plus.svg";

export const ButtonPopup = ({ isOpen }) => {
  return (
    <div>
      <button type="button" onClick={isOpen} width={50} height={50}>
        <Image priority src={IconPlus} alt="Plus" />
      </button>
    </div>
  );
};
