import { MouseEventHandler, useEffect, useState } from "react";

interface WindowSize {
  showUpButton: boolean;
  handleUpClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export const useWindowSize = (): WindowSize => {
  const [showUpButton, setShowUpButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setShowUpButton(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleUpClick: MouseEventHandler<HTMLDivElement> | undefined = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return { showUpButton, handleUpClick };
}
