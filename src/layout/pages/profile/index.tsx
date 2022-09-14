import { Card, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation();
  return (
    <div className="dashboard-page">
      <h1 className="mb-3">{t('profile.title')}</h1>
      <Card>
        <Card.Body>
          <Form.Control type="date" name="dob" placeholder="Date of Birth" />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfilePage;
