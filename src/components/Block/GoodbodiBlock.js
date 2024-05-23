import React, { useState } from "react";
import Image from "next/image";
import background from "@/images/asset.png";
import { ButtonPopup } from "@/components/Button/ButtonPopup.js";
import { GoodbodiPopup } from "@/components/Popup/GoodbodiPopup.js";

export const GoodbodiBlock = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const hundleTogglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  return (
    <div>
      <ButtonPopup toggleOpen={() => setIsPopupOpen(true)} />
      <GoodbodiPopup isOpen={isPopupOpen} closePopup={hundleTogglePopup} />
      <h2>GOODBODI</h2>
      <Image src={background} alt="Circles" width={250} height={2} />
    </div>
  );
};
