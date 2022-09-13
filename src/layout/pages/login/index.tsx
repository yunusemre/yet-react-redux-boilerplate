import { Form, Formik } from 'formik';
import { useId } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { CheckOrRadioField, TextField } from './form';

const LoginPage = () => {
  const navigate = useNavigate();
  const labelId = useId();
  const SignupSchema = Yup.object().shape({
    userName: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
    password: Yup.string().required('Please Enter your password'),
  });

  return (
    <div className="container py-5 py-sm-7">
      <Link to="/auth/login" className="d-flex justify-content-center mb-5">
        <img className="zi-2" src="/logo.png" alt="Image Description" />
      </Link>

      <div className="mx-auto" style={{ maxWidth: '30rem' }}>
        <div className="card card-lg mb-5">
          <div className="card-body">
            <div className="text-center">
              <h1>Sign In</h1>
            </div>

            <Formik
              initialValues={{
                userName: '',
                password: '',
                checked: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log(values);
                navigate('/');
              }}
            >
              <Form>
                <TextField
                  label="User Name"
                  id="userName"
                  name="userName"
                  placeholder="User Name"
                />
                <TextField
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="******"
                >
                  <Link className="form-label-link mb-0" to="/auth/forgot-password">
                    Forgot Password?
                  </Link>
                </TextField>
                <CheckOrRadioField
                  label="Remember me"
                  className="form-check-input"
                  id={labelId + 'name'}
                  type="checkbox"
                  name="checked"
                />
                <Button type="submit" variant="primary" className="w-100">
                  Sign in
                </Button>
              </Form>
            </Formik>
          </div>
        </div>
        <p className="text-center mt-2">Version: 0.1.0</p>
      </div>
    </div>
  );
};

export default LoginPage;
