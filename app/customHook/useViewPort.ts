"use client";

import { useEffect, useState } from "react";

function useViewPort(screenSize: number) {
  const [size, setSize] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = function () {
        if (window.innerWidth < screenSize) {
          setSize(true);
        } else {
          setSize(false);
        }
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [size, screenSize]);
  return { size };
}

export default useViewPort;
