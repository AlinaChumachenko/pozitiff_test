import Image from "next/image";
import background from "@/images/group.png";
import { ButtonPopup } from "@/components/Button/ButtonPopup.js";

export const LogicomBlock = () => {
  return (
    <div>
      <ButtonPopup />
      <h2>LOGICOM</h2>
      <Image src={background} alt="Schedule" width={267} height={215} />
    </div>
  );
};
