import React from "react";
import Image from "next/image";
import IconPlus from "@/images/plus.svg";

export const ButtonPopup = ({ toggleOpen }) => {
  return (
    <div>
      <button type="button" onClick={() => toggleOpen()} width={50} height={50}>
        <Image priority src={IconPlus} alt="Plus" />
      </button>
    </div>
  );
};
