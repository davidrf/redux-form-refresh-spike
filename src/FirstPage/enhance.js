import { compose, withProps, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';

export const initialValues = () => {

  return {
    firstTitle: 'first',
  };
};

export const onSubmit = ({ history }) => () => {
  history.push('/second');
};

export default compose(
  withProps(props => ({ initialValues: initialValues(props) })),
  withHandlers({ onSubmit }),
  reduxForm({
    destroyOnUnmount: false,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    form: 'hi',
  }),
);
