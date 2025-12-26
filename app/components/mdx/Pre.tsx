"use client";

import { useState, useRef } from "react";

import { Check, Clipboard } from "lucide-react";

export const Pre = ({ children, ...props }: React.ComponentProps<"pre">) => {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    if (preRef.current) {
      const code = preRef.current.innerText;
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 p-1.5 rounded-md bg-[#2e3646] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#3b4557] hover:text-white z-10 border border-slate-600"
        aria-label="Copy code"
      >
        {isCopied ? <Check size={16} /> : <Clipboard size={16} />}
      </button>
      <pre
        {...props}
        ref={preRef}
        className={`${props.className || ""} bg-transparent!`}
        style={{ ...props.style, backgroundColor: "transparent" }}
      >
        {children}
      </pre>
    </div>
  );
};
