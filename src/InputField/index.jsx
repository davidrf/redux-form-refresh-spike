import React from 'react';

export const InputField = ({ input, meta }) => {


  return (
    <div>
      {meta.dirty && 'DIRTY'}
      <input {...input} type="text" />
    </div>
  );
};

export default InputField;
