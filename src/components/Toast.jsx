import React from 'react';
import { Check, Copy } from 'lucide-react';

export default function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-2.5 bg-emerald-500 text-black px-4 py-2.5 rounded-xl font-mono text-xs font-bold shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
      <Check className="w-4 h-4 stroke-[3]" />
      <span>{message}</span>
    </div>
  );
}
