import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import FirstPage from '../FirstPage';
import SecondPage from '../SecondPage';
import FormState from '../FormState';

export const Routes = () => (
  <Fragment>
    <Route component={FirstPage} exact path="/" />
    <Route component={SecondPage} path="/second" />
    <FormState />
  </Fragment>
);

export default Routes;
