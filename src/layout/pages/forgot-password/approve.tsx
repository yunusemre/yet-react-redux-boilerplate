import { UiButton, UiTextField, UiTextPasswordField } from '@components/ui';
import { Form, Formik } from 'formik';
import { Alert, Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const ApproveForgetPassword = ({
  showModal,
  handleClose,
}: {
  showModal: boolean;
  handleClose?: () => void;
}) => {
  const { t } = useTranslation();

  const ForgotPasswordSchema = Yup.object().shape({
    verificationCode: Yup.number().required(t('REQUIRED')),
    newPassword: Yup.string().required(t('REQUIRED')),
    newPasswordAgain: Yup.string().when('newPassword', {
      is: (val: any) => val?.length > 0,
      then: Yup.string().oneOf([Yup.ref('newPassword')], t('AUTH.BOTH_PASSWORD')),
    }),
  });

  return (
    <Modal show={showModal}>
      <Alert variant="warning" className="rounded-0">
        <h5>
          Doğrulama kodunuz, sisteme kayıtlı onaylanmış iletişim bilgileriniz (Email/Gsm) üzerinden
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
              <UiTextField
                label={t('AUTH.VALIDATION_CODE')}
                type="number"
                id="verificationCode"
                horizontal="true"
                name="verificationCode"
              />
              <UiTextPasswordField
                label={t('AUTH.NEW_PASSWORD')}
                horizontal="true"
                id="newPassword"
                name="newPassword"
                preprendIcon
                icon="fa-solid fa-key"
              />
              <UiTextPasswordField
                label={t('AUTH.NEW_PASSWORD_AGAIN')}
                id="newPasswordAgain"
                horizontal="true"
                name="newPasswordAgain"
                preprendIcon
                icon="fa-solid fa-key"
              />
            </>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="outline-primary" className="btn-sm" onClick={handleClose}>
              {t('CLOSE')}
            </Button>
            <UiButton
              type="submit"
              text={t('SEND')}
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
