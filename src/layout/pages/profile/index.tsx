import './profile.scss';

import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation();
  return (
    <div className="profile-page">
      <h1 className="mb-3">{t('profile.title')}</h1>
      <Card>
        <Card.Body>
          <div className="profile-cover">
            <div className="profile-cover-img-wrapper"></div>
          </div>

          <div className="text-center mb-5">
            <div className="avatar avatar-xxl avatar-circle profile-cover-avatar">
              <img className="avatar-img" src="profile.jpg" alt="Image Description" />
              <span className="avatar-status avatar-status-success"></span>
            </div>

            <h1 className="page-header-title">Yunus Emre Tatar</h1>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfilePage;
