import { Form, Formik } from 'formik';
import { Alert, Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { TextField, TextPasswordField } from '../../../components/form-elements';

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
      <Alert variant="primary" className="rounded-0">
        Doğrulama kodunuz, sisteme kayıtlı onaylanmış iletişim bilgileriniz(Email/Gsm) üzerinden
        gönderildi.
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
          <Modal.Body>
            <TextField
              label="Doğrulama Kodu"
              type="number"
              id="verificationCode"
              name="verificationCode"
            />
            <TextPasswordField label="Yeni Şifre" id="newPassword" name="newPassword" />
            <TextPasswordField
              label="Yeni Şifre Tekrar"
              id="newPasswordAgain"
              name="newPasswordAgain"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-primary" size="sm" onClick={handleClose}>
              {t('close')}
            </Button>
            <Button type="submit" variant="primary" size="sm">
              <i className="fa-solid fa-paper-plane me-2"></i>
              <span>{t('send')}</span>
            </Button>
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
