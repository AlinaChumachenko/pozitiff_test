import Image from "next/image";
import background from "path";
// import ButtonPopup from "../Button/ButtonPopup.js";

export const VocalipBlock = () => {
  return (
    <div>
      <h2>VOCALIP</h2>
      <Image src={background} alt="Schedule" width={555} height={226} />
    </div>
  );
};
