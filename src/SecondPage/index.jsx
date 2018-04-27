import React from 'react';
import { Field } from 'redux-form';
import enhance from './enhance';
import InputField from '../InputField';

export const SecondPage = ({
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <h1>Second Page</h1>
    <Field component={InputField} type="text" name="secondTitle" />
    <Field component="textarea" name="secondDesc" />
    <button>Submit</button>
  </form>
);

export default enhance(SecondPage);
