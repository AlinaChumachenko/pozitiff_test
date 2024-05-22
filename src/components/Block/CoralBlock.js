import React from "react";
import Image from "next/image";
import background from "@/images/coral.png";
import { ButtonPopup } from "@/components/Button/ButtonPopup.js";
import { CoralPopup } from "@/components/Popup/CoralPopup.js";

export const CoralBlock = () => {
  return (
    <div>
      <ButtonPopup onClick={() => setIsVisible((prev) => !prev)}>
        {" "}
        {isVisible ? "-" : "+"}
      </ButtonPopup>
      <CoralPopup />
      <h2>Coral Coalition</h2>
      <Image src={background} alt="Coral" width={555} height={476} />
    </div>
  );
};
