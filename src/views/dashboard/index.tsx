import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <div className="dashboard-page">
      <h1 className="mb-3">{t('dashboard.title')}</h1>
      <Card>
        <Card.Body>Dashboard</Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
