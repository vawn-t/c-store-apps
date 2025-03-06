import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import { ToastOptions, ToastService } from './types';

const ToastContext = createContext<ToastService | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<ToastOptions | null>(null);
  const [visible, setVisible] = useState(false);

  const show = useCallback((options: ToastOptions | string) => {
    const toastOptions =
      typeof options === 'string' ? { message: options } : options;

    setToast({
      duration: 3000,
      position: 'top',
      type: 'info',
      ...toastOptions,
    });
    setVisible(true);
  }, []);

  const hide = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    if (visible && toast?.duration) {
      const timer = setTimeout(() => {
        setVisible(false);
        toast.onClose?.();
      }, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [visible, toast]);

  // Get color based on toast type
  const getBackgroundColor = () => {
    switch (toast?.type) {
      case 'success':
        return '#4caf50';
      case 'error':
        return '#f44336';
      case 'warning':
        return '#ff9800';
      case 'info':
      default:
        return '#4caf50';
    }
  };

  return (
    <ToastContext.Provider value={{ show, hide }}>
      {children}
      {visible && toast && (
        <div
          style={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: getBackgroundColor(),
            color: 'white',
            padding: '10px 20px',
            borderRadius: '4px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '300px',
            ...(toast.position === 'bottom'
              ? { bottom: '20px' }
              : { top: '20px' }),
          }}
        >
          <div style={{ fontWeight: 'bold' }}>{toast.message}</div>
          {toast.description && <div>{toast.description}</div>}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export default {
  Provider: ToastProvider,
  useToast,
};
