import React from "react";

export default function useKeydown(key, callback) {
  const handleKeyDown = React.useCallback(
    (e) => {
      if (e.key === key) {
        callback();
      }
    },
    [key, callback]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
}
