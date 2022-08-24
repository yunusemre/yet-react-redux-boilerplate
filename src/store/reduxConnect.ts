import { connect } from 'react-redux';

export function connectToRedux({
  component,
  stateProps = () => ({}),
  dispatchProps = () => ({}),
}: any) {
  const mapStateToProps = () => stateProps;
  const mapDispatchToProps = dispatchProps;
  return connect(mapStateToProps, mapDispatchToProps)(component);
}
