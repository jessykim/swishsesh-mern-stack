// RunField contains logic to render a single
// label and text input
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
