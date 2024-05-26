import React from "react";

import { ButtonClosePopup } from "@/components/Button/ButtonClosePopup.js";
import { ButtonProdject } from "@/components/Button/ButtonProdject.js";

export const LogicomPopup = ({ isOpen, closePopup }) => {
  return (
    <div
      className="absolute w-full h-full mx-auto p-12 bg-lime-500 bg-opacity-50 transition-all duration-100"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <ButtonClosePopup toggleOpen={closePopup} />
      <div className="text-right">
        <h3 className="text-3xl tracking-wide text-white mb-2.5">LOGICOM</h3>

        <p className="leading-6 text-white mb-16">Description about project</p>
      </div>
      <h2 className="flex text-center mx-auto text-5xl text-white mb-[180px]">
        Website design & code
      </h2>
      <ButtonProdject />
    </div>
  );
};
