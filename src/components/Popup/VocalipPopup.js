import { useState } from "react";

import { ButtonClosePopup } from "@/components/Button/ButtonClosePopup.js";
import { ButtonProdject } from "@/components/Button/ButtonProdject.js";

export const VocalipPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
      <ButtonClosePopup />
      <h2>VOCALIP</h2>
      <p>Description about project</p>
      <p>Website design & code</p>
      <ButtonProdject />
    </div>
  );
};
