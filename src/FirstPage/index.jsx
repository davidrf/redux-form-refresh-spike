import React from 'react';
import { Field } from 'redux-form';
import enhance from './enhance';
import InputField from '../InputField';

export const FirstPage = ({
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <h1>First Page</h1>
    <Field component={InputField} type="text" name="firstTitle" />
    <Field component="textarea" name="firstDesc" />
    <button>Submit</button>
  </form>
);

export default enhance(FirstPage);
