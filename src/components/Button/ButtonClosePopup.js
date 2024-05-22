import React, { useState } from "react";
import Image from "next/image";
import IconDash from "@/images/dash.svg";

export const ButtonClosePopup = ({ isOpen, toggleOpen }) => {
  return (
    <div>
      <button type="button" onClick={toggleOpen} width={50} height={50}>
        <Image priority src={IconDash} alt="Dash" />
      </button>
    </div>
  );
};
