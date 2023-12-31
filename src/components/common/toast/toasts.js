import React from 'react';
import { useToastContext } from './toastContext';
import Toast from './toast';

const Toasts = () => {
  const { toasts, removeToast, position } = useToastContext();

  const getPosition = () => {
    switch (position) {
      case 'top-left':
        return 'top-1 left-1';
      case 'top-right':
        return 'top-1 right-1';
      case 'bottom-left':
        return 'bottom-1 left-1';
      case 'bottom-right':
        return 'bottom-1 right-1';
      default:
        return 'top-1 right-1';
    }
  };

  return (
    <div className={`absolute ${getPosition()}`}>
      {toasts.map(toast => (
        <Toast key={toast.id} id={toast.id} content={toast.content} removeToast={removeToast} />
      ))}
    </div>
  );
};

export default Toasts;