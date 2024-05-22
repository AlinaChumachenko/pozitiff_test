import React, { useState } from "react";
import Image from "next/image";
import background from "@/images/coral.png";
import { ButtonPopup } from "@/components/Button/ButtonPopup.js";
import { CoralPopup } from "@/components/Popup/CoralPopup.js";

export const CoralBlock = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const hundleTogglePopup = () => {
    setIsPopupOpen((prev) => !prev);
    console.log(setIsPopupOpen);
  };
  return (
    <div>
      <ButtonPopup toggleOpen={() => setIsPopupOpen(true)} />
      <CoralPopup isOpen={isPopupOpen} closePopup={hundleTogglePopup} />
      <h2>Coral Coalition</h2>
      <Image src={background} alt="Coral" width={555} height={476} />
    </div>
  );
};
