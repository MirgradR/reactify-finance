import { useEffect, useState } from "react";

export const useKeyPress = (targetKey) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === targetKey) {
        setIsKeyPressed(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === targetKey) {
        setIsKeyPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey]);

  return isKeyPressed;
};
