import { compose, lifecycle, withProps, withHandlers, withStateHandlers } from 'recompose';
import { reduxForm } from 'redux-form';

export const setSecondTitle = () => () => ({ secondTitle: 'second' });

function componentDidMount() {
  this.timeoutId = setTimeout(this.props.setSecondTitle, 2000);
}

function componentWillUnmount() {
  this.timeoutId && clearTimeout(this.timeoutId);
}

export const initialValues = ({ secondTitle }) => {
  console.log(secondTitle);
  if (secondTitle) {
    return { secondTitle };
  }
  return { secondTitle: '' };
};

export const onSubmit = ({ history }) => () => {
  history.push('/');
};

export default compose(
  withStateHandlers({ secondTitle: undefined }, { setSecondTitle }),
  lifecycle({ componentDidMount, componentWillUnmount }),
  withProps(props => ({ initialValues: initialValues(props) })),
  withHandlers({ onSubmit }),
  reduxForm({
    destroyOnUnmount: false,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    form: 'hi',
  }),
);
