import { SelectField, TextField, UiButton } from '@components/ui';
import { Form, Formik } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const CreateRole = ({
  showModal,
  handleClose,
}: {
  showModal: boolean;
  handleClose?: () => void;
}) => {
  const { t } = useTranslation();
  const selectOptions = [
    { value: 1, label: 'Planlama ve İş Geliştirme Yöneticisi' },
    { value: 2, label: 'Fiyatlandırma ve Satış Planlama Yöneticisi' },
    { value: 3, label: 'Müşteri Operasyon Takım Lideri' },
    { value: 4, label: 'Müşteri Operasyon Yetkilisi' },
    { value: 5, label: 'İndirme Peronu Görevlisi' },
    { value: 6, label: 'Vardiya Sorumlusu' },
    { value: 7, label: 'Network Planlama ve Kapasite Yönetimi Sorumlusu' },
    { value: 8, label: 'Yükleme MOY' },
    { value: 9, label: 'Operasyon Merkezi Görevlisi' },
    { value: 1, label: 'Back-up Moy' },
    { value: 1, label: 'SOM Görevlisi' },
    { value: 1, label: 'Operasyon Geliştirme Sorumlusu' },
    { value: 1, label: 'Çağrı Merkezi Sorumlusu' },
    { value: 1, label: 'Çağrı Merkezi Temsilcisi' },
    { value: 1, label: 'Planlama ve İş Geliştirme Direktörü' },
    { value: 1, label: 'İnsan Kaynakları Direktörü' },
    { value: 1, label: 'İnsan Kaynakları Sorumlusu' },
    { value: 1, label: 'Strateji Organizasyon Yöneticisi' },
    { value: 1, label: 'Operasyon Yöneticisi' },
    { value: 2, label: 'Kurumsal Müşteri Personeli' },
    { value: 2, label: 'Bölge Operasyon Sorumlusu' },
    { value: 2, label: 'Küçük Müşteriler' },
    { value: 2, label: 'IT OBSERVER' },
  ];
  const ForgotPasswordSchema = Yup.object().shape({
    verificationCode: Yup.number().required(t('required')),
    newPassword: Yup.string().required(t('required')),
    selectsss: Yup.string().required(t('required')),
    newPasswordAgain: Yup.string().when('newPassword', {
      is: (val: any) => val?.length > 0,
      then: Yup.string().oneOf([Yup.ref('newPassword')], t('auth.both_password')),
    }),
  });

  return (
    <Modal show={showModal}>
      <Formik
        initialValues={{
          verificationCode: '',
          newPassword: '',
          newPasswordAgain: '',
          selectsss: 'Planlama ve İş Geliştirme Yöneticisi',
        }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values) => {
          console.log('forgot', values);
          // navigate(Path.login);
        }}
      >
        <Form>
          <Modal.Header className="ps-4 pe-4">
            <h2>Rol Yetki</h2>
          </Modal.Header>
          <Modal.Body className="pt-1 pb-1 ps-3 pe-3">
            <SelectField
              horizontal="true"
              label="lable"
              name="selectsss"
              id="selectsss"
              data={selectOptions}
            />
            <TextField
              label="Rol adı"
              id="verificationCode"
              horizontal="true"
              name="verificationCode"
            />
            <TextField
              label="Rol açıklaması"
              horizontal="true"
              id="role-description"
              name="role-description"
            />
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="outline-primary" className="btn-sm" onClick={handleClose}>
              {t('close')}
            </Button>
            <UiButton
              type="submit"
              text={t('save')}
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

export default CreateRole;

// LoginName: 'admin';
// NewPassword: '1';
// NewPasswordAgain: '1';
// VerificationCode: '123';
