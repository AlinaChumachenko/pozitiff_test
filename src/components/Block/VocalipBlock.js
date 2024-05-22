import Image from "next/image";
import background from "@/images/ill_hero.png";
import { ButtonPopup } from "@/components/Button/ButtonPopup.js";

export const VocalipBlock = () => {
  return (
    <div>
      <ButtonPopup />
      <h2>VOCALIP</h2>
      <Image src={background} alt="Schedule" width={555} height={226} />
    </div>
  );
};
