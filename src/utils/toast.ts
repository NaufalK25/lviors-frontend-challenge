import { ToastOptions, toast } from 'react-toastify';

const basicOptionToast: ToastOptions = {
  position: 'top-right',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light'
};

export const createSuccessToast = (message: string) => {
  toast.success(message, basicOptionToast);
};

export const createErrorToast = (message: string) => {
  toast.error(message, basicOptionToast);
};
