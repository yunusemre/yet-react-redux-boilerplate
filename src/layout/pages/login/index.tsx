import { CheckOrRadioField, TextField, TextPasswordField, UiButton } from '@components/ui';
import Path from '@routers/paths';
import { Form, Formik } from 'formik';
import { useId } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const labelId = useId();
  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, t('auth.too_short'))
      .max(70, t('auth.too_long'))
      .required(t('required')),
    password: Yup.string().required(t('auth.enter_your_password')),
  });

  return (
    <Row>
      <Col
        lg={6}
        className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative px-0"
      >
        <div className="w-75 text-center">
          <img src="/promo-car.png" alt="" height="200" />
          <div className="mb-5 mt-5">
            <h2>Kolay Gelsin ile geleneksel taşımacılık anlayışını rafa kaldırıyoruz.</h2>
          </div>
        </div>
      </Col>
      <Col
        lg={6}
        className="d-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-light px-0"
      >
        <div
          className="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1"
          style={{ maxWidth: '25rem' }}
        >
          <div className="text-center">
            <div className="mb-5">
              <img
                className="img-fluid"
                src="/logo.png"
                alt="Image Description"
                style={{ width: '12rem' }}
                data-hs-theme-appearance="default"
              />
            </div>
          </div>
          <hr />
          <Formik
            initialValues={{
              userName: '',
              password: '',
              checked: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
              // navigate('/');
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextField label={t('userName')} id="userName" name="userName" />
                <TextPasswordField
                  label={t('auth.password')}
                  id="password"
                  name="password"
                  placeholder="******"
                />
                <span className="d-flex justify-content-between mt-4">
                  <CheckOrRadioField
                    label={t('auth.remember_me')}
                    className="form-check-input"
                    id={labelId + 'name'}
                    type="checkbox"
                    name="checked"
                  />
                  <Link className="form-label-link mb-2" to={Path.forgot_password}>
                    {t('auth.forgot_password')}?
                  </Link>
                </span>
                <Col sm={12}>
                  <UiButton
                    type="submit"
                    text={t('auth.sign_in')}
                    icon="fa-solid fa-right-to-bracket"
                    variant="primary"
                    className="w-100 mt-2"
                    loading={isSubmitting}
                  />
                </Col>
              </Form>
            )}
          </Formik>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
