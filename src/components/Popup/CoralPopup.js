import React from "react";

import { ButtonClosePopup } from "@/components/Button/ButtonClosePopup.js";
import { ButtonProdject } from "@/components/Button/ButtonProdject.js";

export const CoralPopup = ({ isOpen, closePopup }) => {
  return (
    <div
      className="absolute w-full h-full mx-auto bg-lime-500 transition-all duration-100"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="flex items-center justify-between">
        <ButtonClosePopup toggleOpen={closePopup} />
        <h3 className="text-right mt-12 mr-12 mb-2.5 text-3xl tracking-wide text-white">
          Coral Coalition
        </h3>
      </div>
      <p className="text-right mr-12 mb-16 leading-6 text-white">
        Description about project
      </p>
      <h2 className="flex px-16 mb-24 text-center mx-auto text-5xl text-white">
        Website design & code
      </h2>
      <ButtonProdject />
    </div>
  );
};
