import { useEffect, RefObject } from "react";

export const useTypingEffect = (
  text: string,
  visibleRef: RefObject<HTMLElement | null>,
  invisibleRef: RefObject<HTMLElement | null>,
  speed: number = 70,
) => {
  useEffect(() => {
    let start: number | null = null;
    let handle: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const nextIndex = Math.floor(progress / speed);

      if (visibleRef.current) {
        visibleRef.current.textContent = text.slice(0, nextIndex);
      }
      if (invisibleRef.current) {
        invisibleRef.current.textContent = text.slice(nextIndex);
      }

      if (nextIndex <= text.length) {
        handle = requestAnimationFrame(step);
      }
    };

    handle = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(handle);
      start = null;
    };
  }, [text, visibleRef, invisibleRef, speed]);
};
