import React from 'react';
import enhance from './enhance';

const style = {
  backgroundColor: 'beige',
  fontSize: 20,
};

export const FormState = props => <pre style={style}>{JSON.stringify(props.form, null, 2)}</pre>;

export default enhance(FormState);
