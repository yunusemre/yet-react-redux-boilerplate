import { UiButton, UiCheckOrRadioField, UiTextField, UiTextPasswordField } from '@components/ui';
import Path from '@routers/paths';
import { fetchUser } from '@store/features/app-service';
import { loginService } from '@store/features/auth/auth-service';
import { loginFailure, loginPending, loginSuccess } from '@store/features/auth/auth-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Form, Formik } from 'formik';
import { useEffect, useId } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const LoginPage = () => {
  const { t } = useTranslation();

  const { isSuccess, loading } = useAppSelector((state) => state.auth);
  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, t('AUTH.TOO_SHORT'))
      .max(70, t('AUTH.TOO_LONG'))
      .required(t('REQUIRED')),
    password: Yup.string().required(t('AUTH.ENTER_YOUR_PASSWORD')),
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const labelId = useId();

  const onSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    const submit = async () => {
      dispatch(loginPending());
      loginService(values)
        .then((response: any) => {
          setSubmitting(false);
          dispatch(loginSuccess(response));
          dispatch(fetchUser());
          navigate(Path.home);
          resetForm({});
          toast.success('Hoş geldiniz');
        })
        .catch(() => {
          dispatch(loginFailure());
          setSubmitting(false);
        });
    };
    submit();
  };

  useEffect(() => {
    if (isSuccess) navigate(Path.home);
  }, [isSuccess]);

  return (
    <Row>
      <Col className="d-flex justify-content-center align-items-center position-relative px-0">
        <div
          className="w-75 content-space-t-2 content-space-t-lg-2 content-space-b-1"
          style={{ maxWidth: '25rem' }}
        >
          <div className="text-center">
            <div className="mb-5">
              <img
                className="img-fluid"
                src="/logo.png"
                alt="React Boilerplate"
                style={{ width: '12rem' }}
              />
            </div>
          </div>
          <hr />
          <Formik
            initialValues={{
              userName: '',
              password: '',
              checked: true,
            }}
            validationSchema={SignupSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <UiTextField
                  autocomplate="off"
                  label={t('USERNAME')}
                  id="userName"
                  name="userName"
                  preprendIcon
                  icon="fa-solid fa-user"
                />
                <UiTextPasswordField
                  label={t('AUTH.PASSWORD')}
                  id="password"
                  name="password"
                  placeholder="******"
                  preprendIcon
                  icon="fa-solid fa-key"
                />
                <span className="d-flex justify-content-between mt-4">
                  <UiCheckOrRadioField
                    label={t('AUTH.REMEMBER_ME')}
                    className="form-check-input"
                    id={labelId + 'name'}
                    type="checkbox"
                    name="checked"
                  />
                  <Link className="form-label-link mb-2" to={Path.forgot_password}>
                    {t('AUTH.FORGOT_PASSWORD')}?
                  </Link>
                </span>
                <Col sm={12}>
                  <UiButton
                    type="submit"
                    text={t('AUTH.SIGN_IN')}
                    icon="fa-solid fa-right-to-bracket"
                    variant="primary"
                    className="w-100 mt-2"
                    loading={loading}
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
