import React from "react";
import { ReactComponent as IconPlas } from "@/public/plus.svg";

const ButtonPopup = () => {
  return (
    <div>
      <button className={css.iconBtn} type="button" onClick={onShowPopup}>
        <IconPlas />
      </button>
    </div>
  );
};
export default ButtonPopup;
