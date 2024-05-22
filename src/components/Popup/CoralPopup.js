import React from "react";

import { ButtonClosePopup } from "@/components/Button/ButtonClosePopup.js";
import { ButtonProdject } from "@/components/Button/ButtonProdject.js";

export const CoralPopup = ({ isOpen, closePopup }) => {
  return (
    <div style={{ display: isOpen ? "dlock" : "none" }}>
      <ButtonClosePopup toggleOpen={closePopup} />
      <h2>Coral Coalition</h2>
      <p>Description about project</p>
      <p>Website design & code</p>
      <ButtonProdject />
    </div>
  );
};
