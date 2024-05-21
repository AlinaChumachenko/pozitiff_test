import { ButtonPopup } from "@/Button/ButtonPopup";

export const VocalipBlock = () => {
  return (
    <div>
      <ButtonPopup />
      <h2>VOCALIP</h2>
      <img
        src="../../../public/ill_hero.png"
        alt=""
        className={css.userAvatar}
        width={555}
      />
    </div>
  );
};
