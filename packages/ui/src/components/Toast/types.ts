export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastOptions {
  message: string;
  type?: ToastType;
  duration?: number;
  position?: 'top' | 'bottom';
  description?: string;
  onClose?: () => void;
}

export interface ToastService {
  show: (options: ToastOptions | string) => void;
  hide: () => void;
}
