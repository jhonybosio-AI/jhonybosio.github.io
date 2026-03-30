import React from "react";

export function Blue3Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 font-outfit font-black tracking-tighter ${className}`}>
      <span className="text-white">BLUE</span>
      <span className="text-gold-400">3</span>
      <span className="ml-1 text-[8px] text-gray-500 uppercase tracking-widest font-bold">Investimentos</span>
    </div>
  );
}

export function XPLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 font-inter font-black tracking-tighter ${className}`}>
      <span className="text-white tracking-widest">XP</span>
      <div className="w-1.5 h-6 bg-gold-400 -skew-x-12 ml-1" />
      <span className="ml-1 text-[8px] text-gray-500 uppercase tracking-widest font-bold">Investimentos</span>
    </div>
  );
}
