import { Form, Formik } from 'formik';
import { Button, Card, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { TextField } from '../../../components/form-elements';
import Path from '../../../router/paths';

const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email(t('auth.invalid_email')).required(t('auth.required')),
  });
  return (
    <Container className="py-5 py-sm-7">
      <Link to={Path.forgot_password} className="d-flex justify-content-center mb-5">
        <img className="zi-2" src="/logo.png" alt="Kolay gelsin" />
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
                navigate(Path.login);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="text-center">
                    <div className="mb-5">
                      <h1 className="display-5">{t('auth.forgot_password')}</h1>
                      <p>
                        {t('auth.forgot_password_descriptions')}
                      </p>
                    </div>
                  </div>
                  <TextField label={t('email_address')} type="email" id="email" name="email" />
                  <div className="d-grid gap-2">
                    <Button disabled={isSubmitting} type="submit" variant="primary">
                      <i className="fa-solid fa-paper-plane me-2"></i>
                      <span>{t('send')}</span>
                    </Button>

                    <div className="text-center">
                      <Link className="btn btn-link" to={Path.login}>
                        <i className="fa-solid fa-angle-left"></i> {t('auth.sign_in')}
                      </Link>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ForgotPasswordPage;
