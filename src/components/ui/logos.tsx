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
    </div>
  );
}
