// resources/js/components/PrismBackground.jsx
import React from "react";
import Prism from "./Prism";

export default function PrismBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Optional overlay to tone the animation down a bit */}
      <div className="absolute inset-0 bg-black/10" />
      {/* The prism canvas will fill this wrapper */}
      <div className="absolute inset-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        />
      </div>
    </div>
  );
}
