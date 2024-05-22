import Image from "next/image";
import IconPlus from "@/images/plus.svg";

export const ButtonPopup = () => {
  return (
    <div>
      <button type="button">
        <Image priority src={IconPlus} alt="Plus" />
      </button>
    </div>
  );
};
