import React from "react";

export default function useKeydown(key, callback) {
  React.useEffect(() => {
    const keydownHandler = (event) => {
      if (event.key == key) {
        callback();
      }
    };

    window.addEventListener("keydown", keydownHandler);

    return () => window.removeEventListener("keydown", keydownHandler);
  }, [key, callback]);
}
