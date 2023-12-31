import React from 'react';

const Toast = ({ id, content, removeToast }) => (
  <div className="bg-white p-2 mb-3 rounded " onClick={() => removeToast(id)}>
    {content}
  </div>
);

export default Toast;