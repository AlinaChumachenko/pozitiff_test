import React, { useState } from "react";
import Image from "next/image";
import background from "@/images/ill_hero.png";
import { VocalipPopup } from "@/components/Popup/VocalipPopup";
import { ButtonPopup } from "@/components/Button/ButtonPopup";

export const VocalipBlock = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const hundleTogglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  return (
    <div>
      <ButtonPopup toggleOpen={() => setIsPopupOpen(true)} />
      <VocalipPopup isOpen={isPopupOpen} closePopup={hundleTogglePopup} />
      <h2>VOCALIP</h2>
      <Image src={background} alt="Schedule" width={555} height={226} />
    </div>
  );
};
