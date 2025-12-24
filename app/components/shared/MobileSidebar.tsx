"use client";

import { useEffect, useRef, useCallback } from "react";

import Link from "next/link";

import { X } from "lucide-react";

import { NAV_LINKS } from "@/app/constants/nav";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSidebar = ({ isOpen, onClose }: Props) => {
  const sidebarRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && sidebarRef.current) {
        const focusableElements = sidebarRef.current.querySelectorAll<HTMLElement>(
          'button, a, input, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    },
    [isOpen, onClose],
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      closeButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const overlayClass = `absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out ${
    isOpen ? "opacity-100" : "opacity-0"
  }`;

  const panelClass = `relative w-75 h-full bg-white shadow-xl flex flex-col p-6 transition-transform duration-300 ease-out will-change-transform ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-label="모바일 메뉴"
      className={`fixed inset-0 z-50 flex justify-end transition-[visibility] duration-300 ${
        isOpen ? "visible" : "invisible delay-300"
      }`}
    >
      <button
        type="button"
        className={overlayClass}
        onClick={onClose}
        aria-label="메뉴 닫기"
        tabIndex={-1}
      />

      <aside ref={sidebarRef} className={panelClass}>
        <header className="flex justify-end mb-10">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 text-gray-main hover:bg-slate-100 rounded-full transition-colors"
            aria-label="메뉴 닫기"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </header>

        <nav aria-label="모바일 메뉴">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-2xl font-bold text-gray-main hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};
