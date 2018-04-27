import { connect } from 'react-redux';

const mapStateToProps = state => ({ form: state.form.hi });

export default connect(mapStateToProps);
