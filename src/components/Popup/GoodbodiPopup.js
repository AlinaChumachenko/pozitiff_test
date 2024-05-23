import { ButtonClosePopup } from "@/components/Button/ButtonClosePopup.js";
import { ButtonProdject } from "@/components/Button/ButtonProdject.js";

export const GoodbodiPopup = ({ isOpen, closePopup }) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <ButtonClosePopup toggleOpen={closePopup} />
      <h2>GOODBODI</h2>
      <p>Description about project</p>
      <p>Website design & code</p>
      <ButtonProdject />
    </div>
  );
};
