import React, { createContext, useContext, useState, type ReactNode } from "react";

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const showToast = (msg: string) => {
    setMessage(msg);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000); // Toast disappears after 2s
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {visible && (
        <div className="fixed bottom-8 right-8 bg-black text-white px-6 py-3 rounded-lg shadow-lg opacity-90 z-50 transition-all">
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
};
