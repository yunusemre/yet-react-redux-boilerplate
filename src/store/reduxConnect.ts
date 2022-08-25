import { connect } from 'react-redux';

export function connectToRedux ({
  component,
  stateProps = () => ({}),
  dispatchProps = () => ({}),
}: any): any {
  const mapStateToProps: any = () => stateProps;
  const mapDispatchToProps: any = dispatchProps;
  return connect(mapStateToProps, mapDispatchToProps)(component);
}
