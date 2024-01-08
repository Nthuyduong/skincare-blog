import React from 'react';

const Toast = ({ id, content, removeToast }) => (
  <div className="bg-black dark:bg-white text-white dark:text-black p-2 mb-3 rounded " onClick={() => removeToast(id)}>
    {content}
  </div>
);

export default Toast;