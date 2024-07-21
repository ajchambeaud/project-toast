import React from "react";
import useKeydown from "../../hooks/useKeydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const createToast = (message, variant) => {
    const newToast = {
      id: window.crypto.randomUUID(),
      message,
      variant,
    };
    setToasts([...toasts, newToast]);
  };

  const escapeHandler = React.useCallback(() => setToasts([]));
  useKeydown("Escape", escapeHandler);

  return (
    <ToastContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
