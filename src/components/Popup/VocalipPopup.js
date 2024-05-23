import React from "react";

import { ButtonProdject } from "@/components/Button/ButtonProdject.js";
import { ButtonClosePopup } from "@/components/Button/ButtonClosePopup";

export const VocalipPopup = ({ isOpen, closePopup }) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <ButtonClosePopup toggleOpen={closePopup} />
      <h2>VOCALIP</h2>
      <p>Description about project</p>
      <p>Website design & code</p>
      <ButtonProdject />
    </div>
  );
};
