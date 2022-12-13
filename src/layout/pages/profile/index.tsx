import './profile.scss';

import { useAppSelector } from '@store/hooks';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PageContainer from '../page-layout/page-container';

const ProfilePage = () => {
  const { t } = useTranslation();
  const { name } = useAppSelector((state) => state.app);
  return (
    <PageContainer name="profile" title={t('PROFILE.TITLE')}>
      <Card>
        <Card.Body>
          <div className="profile-cover">
            <div className="profile-cover-img-wrapper"></div>
          </div>

          <div className="text-center mb-5">
            <div className="avatar avatar-xxl avatar-circle profile-cover-avatar">
              <img className="avatar-img" src="profile.jpg" alt="AVATAR NAME" />
              <span className="avatar-status avatar-status-success"></span>
            </div>

            <h1 className="page-header-title">{name}</h1>
          </div>
        </Card.Body>
      </Card>
    </PageContainer>
  );
};

export default ProfilePage;
