import Loader from '.';

export const LoaderWrapper = ({ children, loaded }: any) => {
  return (
    <div className="position-relative loader-wrapper">
      {loaded && <Loader />}
      {children}
    </div>
  );
};
