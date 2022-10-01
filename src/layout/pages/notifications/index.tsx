import { Card, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NotificationPage = () => {
  const { t } = useTranslation();
  return (
    <div className="profile-page">
      <h1 className="mb-3">{t('notifications.title')}</h1>
      <Card className="mb-3">
        <Card.Body>
          <Table striped>
            <thead>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotificationPage;
