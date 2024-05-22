"use client";
import React, { useState } from "react";
import Image from "next/image";
import IconPlus from "@/images/plus.svg";
import { CoralPopup } from "@/components/Popup/CoralPopup.js";

export const ButtonPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <div>
      <button type="button" onClick={handleButtonClick} width={50} height={50}>
        <Image priority src={IconPlus} alt="Plus" />
      </button>
      {isPopupOpen && <CoralPopup />}
    </div>
  );
};
