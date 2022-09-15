import { Form, Formik } from 'formik';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { TextField } from '../login/form';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <Container className="py-5 py-sm-7">
      <Link to="/auth/forgot-password" className="d-flex justify-content-center mb-5">
        <img className="zi-2" src="/logo.png" alt="Image Description" />
      </Link>

      <div className="mx-auto max-width-30">
        <Card>
          <Card.Body>
            <Formik
              initialValues={{
                email: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
                navigate('/auth/login');
              }}
            >
              <Form>
                <div className="text-center">
                  <div className="mb-5">
                    <h1 className="display-5">Forgot password</h1>
                    <p>
                      Enter the email address you used when you joined and well send you
                      instructions to reset your password.
                    </p>
                  </div>
                </div>
                <TextField
                  label="Your email"
                  type="email"
                  placeholder="Please enter your email address"
                  id="email"
                  name="email"
                />
                <div className="d-grid gap-2">
                  <Button type="submit" variant="primary" className="w-100">
                    Sign in
                  </Button>

                  <div className="text-center">
                    <Link className="btn btn-link" to="/auth/login">
                      <i className="fa-solid fa-angle-left"></i> Back to Sign in
                    </Link>
                  </div>
                </div>
              </Form>
            </Formik>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ForgotPasswordPage;
