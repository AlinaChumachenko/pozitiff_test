import { useState } from "react";

import { ButtonClosePopup } from "@/components/Button/ButtonClosePopup.js";
import { ButtonProdject } from "@/components/Button/ButtonProdject.js";

export const GoodbodiPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
      <ButtonClosePopup />
      <h2>GOODBODI</h2>
      <p>Description about project</p>
      <p>Website design & code</p>
      <ButtonProdject />
    </div>
  );
};
