import { useEffect, useRef } from "react";

function FixedOnScroll() {
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function stickyFn(entries: IntersectionObserverEntry[]) {
      const documentEL = document.documentElement.childNodes[1]
        ?.childNodes[1] as HTMLElement;

      const [entry] = entries;
      if (!entry.isIntersecting) {
        documentEL.classList.add("md:auto-fixed");
        documentEL.classList.remove("md:mt-14");
      } else {
        documentEL.classList.remove("md:auto-fixed");
        documentEL.classList.add("md:mt-14");
      }
    }

    new IntersectionObserver(stickyFn, {
      root: null,
      threshold: 0,
      rootMargin: `-590px`,
    }).observe(targetRef.current!);
  }, [targetRef]);

  return { targetRef };
}

export default FixedOnScroll;
