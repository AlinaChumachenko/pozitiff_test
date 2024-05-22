import IconDash from "@/images/dash.svg";
import Image from "next/image";

export const ButtonPopup = () => {
  return (
    <div>
      <button type="button">
        <Image priority src={IconDash} alt="Dash" />
      </button>
    </div>
  );
};
