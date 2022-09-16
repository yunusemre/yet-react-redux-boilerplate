import { Form, Formik } from 'formik';
import { useId } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { CheckOrRadioField, TextField } from '../../../components/form-elements';
import Path from '../../../router/paths';

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const labelId = useId();
  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, t('auth.too_short'))
      .max(70, t('auth.too_long'))
      .required(t('auth.required')),
    password: Yup.string().required(t('auth.enter_your_password')),
  });

  return (
    <div className="container py-5 py-sm-7">
      <Link to={Path.login} className="d-flex justify-content-center mb-5">
        <img className="zi-2" src="/logo.png" alt="Image Description" />
      </Link>

      <div className="mx-auto max-width-30">
        <Card>
          <Card.Body>
            <div className="text-center">
              <h1>{t('auth.sign_in')}</h1>
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
              {({ isSubmitting }) => (
                <Form>
                  <TextField label={t('userName')} id="userName" name="userName" />
                  <TextField
                    label={t('auth.password')}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="******"
                  >
                    <Link className="form-label-link mb-0" to={Path.forgot_password}>
                      {t('auth.forgot_password')}?
                    </Link>
                  </TextField>
                  <CheckOrRadioField
                    label={t('auth.remember_me')}
                    className="form-check-input"
                    id={labelId + 'name'}
                    type="checkbox"
                    name="checked"
                  />
                  <Button type="submit" disabled={isSubmitting} variant="primary" className="w-100">
                    <i className="fa-solid fa-right-to-bracket me-2"></i>
                    <span>{t('auth.sign_in')}</span>
                  </Button>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
        <p className="text-center mt-2">Version: 1.0.0</p>
      </div>
    </div>
  );
};

export default LoginPage;
