"use client";

import { VocalipBlock } from "@/components/Block/VocalipBlock.js";
import { LogicomBlock } from "@/components/Block/LogicomBlock.js";
import { CoralBlock } from "@/components/Block/CoralBlock.js";
import { GoodbodiBlock } from "@/components/Block/GoodbodiBlock.js";
import { ModalBlock } from "@/components/Block/ModalBlock.js";


export default function Home() {
  return (
    <main>
      <div className="container mx-auto mt-32">
        <VocalipBlock />
        <LogicomBlock />
        <CoralBlock />
        <GoodbodiBlock />
        <ModalBlock />
        
      </div>
    </main>
  );
}
