import { createContext, useContext, useEffect, useState } from 'react';

export const ToastContext = createContext({
  type: null,
  message: '',
  open: false,
});

ToastContext.displayName = 'ToastAuth';

export const ToastProvider = ({ children }) => {
  const [type, setType] = useState(null);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const setToast = (message, type = 'success') => {
    setMessage(message);
    setType(type);
    setOpen(true);
  };
  const reset = () => {
    setOpen(false);
    setMessage('');
    setType(null);
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        reset();
      }, 5000);
    }
  }, [open]);

  const data = { type, message, open, setToast, setOpen };
  return <ToastContext.Provider value={data}>{children}</ToastContext.Provider>;
};

export default function useToast() {
  return useContext(ToastContext);
}
