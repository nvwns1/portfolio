import { useEffect, useState } from "react";

export enum WindowScreenEnum {
  Desktop,
  Tablet,
}

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.screen.width);
    };
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  let windowScreen = WindowScreenEnum.Desktop;
  if (windowWidth > 768) {
    windowScreen = WindowScreenEnum.Desktop;
  } else if (windowWidth < 768) {
    windowScreen = WindowScreenEnum.Tablet;
  }
  return { windowWidth, windowScreen };
}
