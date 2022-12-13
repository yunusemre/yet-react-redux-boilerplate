import { UiButton, UiTextField } from '@components/ui';
import { Form, Formik } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const CreateRole = ({
  role,
  showModal,
  handleClose,
}: {
  role: any;
  showModal: boolean;
  handleClose?: any;
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
    { value: 10, label: 'Back-up Moy' },
    { value: 11, label: 'SOM Görevlisi' },
    { value: 12, label: 'Operasyon Geliştirme Sorumlusu' },
    { value: 13, label: 'Çağrı Merkezi Sorumlusu' },
    { value: 14, label: 'Çağrı Merkezi Temsilcisi' },
    { value: 15, label: 'Planlama ve İş Geliştirme Direktörü' },
    { value: 16, label: 'İnsan Kaynakları Direktörü' },
    { value: 17, label: 'İnsan Kaynakları Sorumlusu' },
    { value: 18, label: 'Strateji Organizasyon Yöneticisi' },
    { value: 19, label: 'Operasyon Yöneticisi' },
    { value: 20, label: 'Kurumsal Müşteri Personeli' },
    { value: 21, label: 'Bölge Operasyon Sorumlusu' },
    { value: 22, label: 'Küçük Müşteriler' },
    { value: 23, label: 'IT OBSERVER' },
  ];
  const ForgotPasswordSchema = Yup.object().shape({
    RoleId: Yup.string().required(t('REQUIRED')),
    Description: Yup.string().required(t('REQUIRED')),
  });

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Formik
        initialValues={{
          RoleId: role?.label ?? '',
          Description: role?.label ?? '',
        }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values) => {
          toast.success('Rol bilgileriniz güncellendi');
          handleClose();
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header className="ps-4 pe-4" closeButton>
              <h2>Rol Yetki</h2>
            </Modal.Header>
            <Modal.Body className="pt-1 pb-1 ps-3 pe-3">
              <UiTextField label="Rol adı" horizontal="true" id="RoleId" name="RoleId" />
              <UiTextField
                horizontal="true"
                label="Rol açıklaması"
                id="Description"
                name="Description"
              />
            </Modal.Body>
            <Modal.Footer className="border-0">
              <Button variant="outline-primary" className="btn-sm" onClick={handleClose}>
                {t('CLOSE')}
              </Button>
              <UiButton
                type="submit"
                text={t('SAVE')}
                icon="fa-solid fa-paper-plane"
                variant="primary"
                className="btn-sm me-0"
              />
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateRole;

// LoginName: 'admin';
// NewPassword: '1';
// NewPasswordAgain: '1';
// VerificationCode: '123';
