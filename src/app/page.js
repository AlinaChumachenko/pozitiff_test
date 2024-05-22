"use client";

import { VocalipBlock } from "@/components/Block/VocalipBlock.js";
import { LogicomBlock } from "@/components/Block/LogicomBlock.js";
import { CoralBlock } from "@/components/Block/CoralBlock.js";
import { GoodbodiBlock } from "@/components/Block/GoodbodiBlock.js";
import { ButtonModal } from "@/components/Button/ButtonModal.js";
import { VocalipPopup } from "@/components/Popup/VocalipPopup.js";
import { LogicomPopup } from "@/components/Popup/LogicomPopup.js";
// import { CoralPopup } from "@/components/Popup/CoralPopup.js";
import { GoodbodiPopup } from "@/components/Popup/GoodbodiPopup.js";

export default function Home() {
  return (
    <main>
      <VocalipBlock />
      <LogicomBlock />
      <CoralBlock />
      <GoodbodiBlock />
      <ButtonModal />
      <VocalipPopup />
      <LogicomPopup />
      {/* <CoralPopup /> */}
      <GoodbodiPopup />
    </main>
  );
}
