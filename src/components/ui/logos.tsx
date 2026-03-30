import React from "react";

export function BrandLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        className="text-white font-black text-2xl tracking-tighter"
        style={{ fontFamily: 'var(--font-outfit)' }}
      >
        JHONY<span className="text-blue3-sky">BOSIO</span>
      </span>
      <div className="flex flex-col -ml-1">
        <span className="text-[7px] text-blue3-sky font-bold uppercase tracking-[0.2em] leading-none">
          Investimentos
        </span>
      </div>
    </div>
  );
}
