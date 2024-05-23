import React, { useState } from "react";
import Image from "next/image";
import background from "@/images/group.png";
import { ButtonPopup } from "@/components/Button/ButtonPopup.js";
import { LogicomPopup } from "@/components/Popup/LogicomPopup.js";

export const LogicomBlock = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const hundleTogglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  return (
    <div>
      <ButtonPopup toggleOpen={() => setIsPopupOpen(true)} />
      <LogicomPopup isOpen={isPopupOpen} closePopup={hundleTogglePopup} />
      <h2>LOGICOM</h2>
      <Image src={background} alt="Schedule" width={267} height={215} />
    </div>
  );
};
