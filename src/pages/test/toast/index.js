import React from 'react';
import Toasts from '../../../components/common/toast/toasts';
import { useToastContext } from '../../../components/common/toast/toastContext';

const AppExample = () => {
  const { addToast } = useToastContext();

  return (
    <div className="p-5">
      <button className="bg-green-500 p-2 rounded" onClick={() => addToast('New toast added!')}>
        Add Toast
      </button>
    </div>
  );
};

// test

export default AppExample;