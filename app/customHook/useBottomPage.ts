import { useEffect, useState } from "react";

export function useBottomPage() {
  const [isBottomPage, setIsBottomPage] = useState<boolean>(false);

  function handleScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = window.document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight - 200) {
      // i deducted 200 because i don't want the page to go exactly at the bottom
      setIsBottomPage(true);
    } else {
      setIsBottomPage(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isBottomPage };
}
