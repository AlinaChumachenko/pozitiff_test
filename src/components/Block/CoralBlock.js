// "use client";
import React from "react";
import Image from "next/image";
import background from "@/images/coral.png";
import { ButtonPopup } from "@/components/Button/ButtonPopup.js";

export const CoralBlock = () => {
  return (
    <div>
      <ButtonPopup />
      <h2>Coral Coalition</h2>
      <Image src={background} alt="Coral" width={555} height={476} />
    </div>
  );
};
