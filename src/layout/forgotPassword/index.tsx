import { useId } from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const labelId = useId();

  return (
    <div className="container py-5 py-sm-7">
      <Link to="/login" className="d-flex justify-content-center mb-5">
        <img className="zi-2" src="/logo.png" alt="Image Description" />
      </Link>

      <div className="mx-auto" style={{ maxWidth: '30rem' }}>
        <div className="card card-lg mb-5">
          <div className="card-body">
            <h1>Forgot Password</h1>
            <hr />
            <form className="js-validate needs-validation">
              <div className="mb-4">
                <label htmlFor={labelId + 'username'} className="form-label">
                  Your email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id={labelId + 'username'}
                  placeholder="email@address.com"
                  aria-label="email@address.com"
                />
                <span className="invalid-feedback">Please enter a valid email address.</span>
              </div>
              <div className="mb-4">
                <span className="d-flex justify-content-between">
                  <label htmlFor={labelId + 'password'} className="form-label">
                    Password
                  </label>
                  <Link className="form-label-link mb-0" to="/auth/forgot-password">
                    Forgot Password?
                  </Link>
                </span>
                <div className="input-group input-group-merge">
                  <input
                    type="password"
                    className="js-toggle-password form-control form-control-lg"
                    name="password"
                    id={labelId + 'password'}
                    placeholder="8+ characters required"
                    aria-label="8+ characters required"
                  />
                  <a id="changePassTarget" className="input-group-append input-group-text" href="#">
                    <i id="changePassIcon" className="bi-eye-slash"></i>
                  </a>
                </div>

                <span className="invalid-feedback">Please enter a valid password.</span>
              </div>

              <label className="form-label w-100">
                <div className="form-check">
                  <input
                    id={labelId + 'name'}
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label htmlFor={labelId + 'name'} className="form-check-label">
                    Remember me
                  </label>
                </div>
              </label>
              <div className="d-grid mt-3">
                <button type="submit" className="btn btn-primary btn-lg">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
