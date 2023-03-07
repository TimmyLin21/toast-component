import React from "react";
import useKeydown from "../../hooks/useKeydown";

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
    const nextList = [...toasts, { message, variant, id: crypto.randomUUID() }];
    setToasts(nextList);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((item) => item.id !== id);
    setToasts(nextToasts);
  }

  const handleDismissAllToasts = React.useCallback((e) => {
    setToasts([]);
  }, []);

  useKeydown("Escape", handleDismissAllToasts);

  return (
    <ToastsContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
