import React from "react";

import { ButtonProdject } from "@/components/Button/ButtonProdject.js";
import { ButtonClosePopup } from "@/components/Button/ButtonClosePopup";

export const VocalipPopup = ({ isOpen, closePopup }) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <ButtonClosePopup toggleOpen={closePopup} />
      <h3>VOCALIP</h3>
      <p>Description about project</p>
      <h2>Website design & code</h2>
      <ButtonProdject />
    </div>
  );
};
