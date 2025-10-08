import { useEffect, useRef } from "react";

function FixedOnScroll() {
  const targetRef = useRef<HTMLDivElement>(null);

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
    const offsetElement = document.querySelector(".header") as HTMLElement; // Adjust selector
    const offsetHeight = offsetElement?.offsetHeight ?? 0;

    // Dynamically set rootMargin using offsetHeight
    const observer = new IntersectionObserver(stickyFn, {
      root: null,
      threshold: 0,
      rootMargin: `-${offsetHeight}px`,
    });

    // Start observing
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };

    // new IntersectionObserver(stickyFn, {
    //   root: null,
    //   threshold: 0,
    //   rootMargin: `-590px`,
    // }).observe(targetRef.current!);
  }, [targetRef]);

  return { targetRef };
}

export default FixedOnScroll;
