import Image from "next/image";
import IconDash from "@/images/dash.svg";


export const ButtonClosePopup = () => {
  return (
    <div>
      <button type="button">
        <Image priority src={IconDash} alt="Dash" />
      </button>
    </div>
  );
};
