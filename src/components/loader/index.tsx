import './loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <img width="50" src="/favicon.ico" alt="Loading" />
      <div className="loading" />
    </div>
  );
};

export default Loader;
