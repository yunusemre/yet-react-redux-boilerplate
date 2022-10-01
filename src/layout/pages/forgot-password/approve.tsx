import { TextField, TextPasswordField, UiButton } from '@components/ui';
import { Form, Formik } from 'formik';
import { Alert, Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const ApproveForgetPassword = ({
  showModal,
  handleClose,
}: {
  showModal: boolean;
  handleClose?: () => void;
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const ForgotPasswordSchema = Yup.object().shape({
    verificationCode: Yup.number().required(t('required')),
    newPassword: Yup.string().required(t('required')),
    newPasswordAgain: Yup.string().when('newPassword', {
      is: (val: any) => val?.length > 0,
      then: Yup.string().oneOf([Yup.ref('newPassword')], t('auth.both_password')),
    }),
  });

  return (
    <Modal show={showModal}>
      <Alert variant="warning" className="rounded-0">
        <h5>
          Doğrulama kodunuz, sisteme kayıtlı onaylanmış iletişim bilgileriniz(Email/Gsm) üzerinden
          gönderildi.
        </h5>
      </Alert>
      <Formik
        initialValues={{
          verificationCode: '',
          newPassword: '',
          newPasswordAgain: '',
        }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values) => {
          console.log('forgot', values);
          // navigate(Path.login);
        }}
      >
        <Form>
          <Modal.Body className="pt-1 pb-1 ps-3 pe-3">
            <>
              <TextField
                label={t('auth.validation_code')}
                type="number"
                id="verificationCode"
                horizontal="true"
                name="verificationCode"
              />
              <TextPasswordField
                label={t('auth.new_password')}
                horizontal="true"
                id="newPassword"
                name="newPassword"
              />
              <TextPasswordField
                label={t('auth.new_password_again')}
                id="newPasswordAgain"
                horizontal="true"
                name="newPasswordAgain"
              />
            </>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="outline-primary" className="btn-sm" onClick={handleClose}>
              {t('close')}
            </Button>
            <UiButton
              type="submit"
              text={t('send')}
              icon="fa-solid fa-paper-plane"
              variant="primary"
              className="btn-sm me-0"
            />
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  );
};

export default ApproveForgetPassword;

// LoginName: 'admin';
// NewPassword: '1';
// NewPasswordAgain: '1';
// VerificationCode: '123';
