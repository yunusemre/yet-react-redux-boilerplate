import { TextField, UiButton } from '@components/ui';
import Path from '@routers/paths';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import ApproveForgetPassword from './approve';

const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email(t('auth.invalid_email')).required(t('required')),
  });

  return (
    <Container className="py-5 py-sm-7">
      <Link to={Path.forgot_password} className="d-flex justify-content-center mb-5">
        <img height="65" className="zi-2" src="/logo.png" alt="Kolay gelsin" />
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
                setShow(true);
                // navigate(Path.login);
              }}
            >
              <Form>
                <div className="text-center">
                  <div className="mb-5">
                    <h1 className="display-5">{t('auth.forgot_password')}</h1>
                    <p>{t('auth.forgot_password_descriptions')}</p>
                  </div>
                </div>
                <TextField
                  label={t('email_address')}
                  horizontal="true"
                  type="email"
                  id="email"
                  name="email"
                />
                <div className="d-grid gap-2">
                  <UiButton
                    type="submit"
                    text={t('send')}
                    icon="fa-solid fa-paper-plane"
                    variant="primary"
                    className="w-100"
                  />
                  <div className="text-center">
                    <Link className="btn btn-link btn-xs" to={Path.login}>
                      <i className="fa-solid fa-angle-left"></i> {t('auth.sign_in')}
                    </Link>
                  </div>
                </div>
              </Form>
            </Formik>
          </Card.Body>
        </Card>
        <ApproveForgetPassword showModal={show} handleClose={() => setShow(false)} />
      </div>
    </Container>
  );
};

export default ForgotPasswordPage;
