import Image from "next/image";
import background from "@/images/asset.png";
import { ButtonPopup } from "@/components/Button/ButtonPopup.js";

export const GoodbodiBlock = () => {
  return (
    <div>
      <ButtonPopup />
      <h2>GOODBODI</h2>
      <Image src={background} alt="Schedule" width={250} height={251} />
    </div>
  );
};
