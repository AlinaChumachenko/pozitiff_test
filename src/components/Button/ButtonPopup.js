import React from "react";
import Image from "next/image";
import IconPlus from "@/images/plus.svg";

export const ButtonPopup = ({ toggleOpen }) => {
  return (
    <div>
      <button
        className="w-12 h-12 bg-lime-500 flex justify-center items-center"
        type="button"
        onClick={() => toggleOpen()}
        width={50}
        height={50}
      >
        <Image priority className="w-6 h-6" src={IconPlus} alt="Plus" />
      </button>
    </div>
  );
};
