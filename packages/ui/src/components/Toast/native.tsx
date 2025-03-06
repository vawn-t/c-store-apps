import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
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
  const opacity = useState(new Animated.Value(0))[0];

  const show = useCallback(
    (options: ToastOptions | string) => {
      const toastOptions =
        typeof options === 'string' ? { message: options } : options;

      setToast({
        duration: 3000,
        position: 'top',
        type: 'info',
        ...toastOptions,
      });

      setVisible(true);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    },
    [opacity]
  );

  const hide = useCallback(() => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
    });
  }, [opacity]);

  useEffect(() => {
    if (visible && toast?.duration) {
      const timer = setTimeout(() => {
        hide();
        toast.onClose?.();
      }, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [visible, toast, hide]);

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
        <Animated.View
          style={[
            styles.container,
            { backgroundColor: getBackgroundColor(), opacity },
            toast.position === 'bottom' ? styles.bottom : styles.top,
          ]}
        >
          <Text style={styles.title}>{toast.message}</Text>
          {toast.description && (
            <Text style={styles.description}>{toast.description}</Text>
          )}
        </Animated.View>
      )}
    </ToastContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    right: 20,
    padding: 15,
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 9999,
  },
  top: {
    top: 40,
  },
  bottom: {
    bottom: 40,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  description: {
    color: 'white',
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default {
  Provider: ToastProvider,
  useToast,
};
