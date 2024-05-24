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
    <div className="max-w-lg h-119 mx-auto bg-fuchsia-50">
      <GoodbodiPopup isOpen={isPopupOpen} closePopup={hundleTogglePopup} />
      <div className="flex items-center justify-between">
        <ButtonPopup toggleOpen={() => setIsPopupOpen(true)} />

        <h3 className="text-right mr-12">GOODBODI</h3>
      </div>
      <div className="flex justify-center py-28">
        <Image src={background} alt="Circles" width={250} height={250} />
      </div>
    </div>
  );
};
