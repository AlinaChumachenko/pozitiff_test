import { VocalipBlock } from "@/components/Block/VocalipBlock.js";
import { LogicomBlock } from "@/components/Block/LogicomBlock.js";
import { CoralBlock } from "@/components/Block/CoralBlock.js";
import { GoodbodiBlock } from "@/components/Block/GoodbodiBlock.js";
import { ButtonModal } from "@/components/Button/ButtonModal.js";

export default function Home() {
  return (
    <main>
      <VocalipBlock />
      <LogicomBlock />
      <CoralBlock />
      <GoodbodiBlock />
      <ButtonModal />
    </main>
  );
}
