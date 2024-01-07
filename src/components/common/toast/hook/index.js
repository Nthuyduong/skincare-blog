import { useState, useCallback } from 'react';

let id = 1;

export const useToast = ({ duration, position } = {
    duration: 5000,
    position: 'bottom-right'
}) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((content) => {
    const toastId = id++;
    setToasts(toasts => [
      ...toasts,
      {
        id: toastId,
        content
      }
    ]);

    setTimeout(() => {
      setToasts(toasts => toasts.filter(t => t.id !== toastId));
    }, duration);
  }, []);

  const removeToast = useCallback(id => {
    setToasts(toasts => toasts.filter(t => t.id !== id));
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
    duration,
    position
  };
};