import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useBottomPage() {
  const [isBottomPage, setIsBottomPage] = useState<boolean>(false);
  const pathname = usePathname();

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

  // I added a second hook here to detect when there is a page transition. I discovered that when I scroll to the bottom of the page and click on another link on the nav bar, the corresponding page does not show up immediately, only the footer shows. You need to delay running any logic (e.g., "hide nav if at bottom") until the page has fully laid out.
  useEffect(() => {
    window.scrollTo(0, 0);

    // Wait for layout paint
    const timeout = setTimeout(() => {
      setIsBottomPage(false);
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return { isBottomPage };
}
