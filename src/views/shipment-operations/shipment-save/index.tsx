import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ShipmentSaved = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState<number>(1);
  const dashboardData = [
    {
      name: 'dashboard.teslimatPerformansRaporu',
      count: Math.ceil(Math.random() * 1000),
      url: '#',
      prefix: '',
    },
    {
      name: 'dashboard.teslimEdilememisGönderilerRaporu',
      count: Math.ceil(Math.random() * 100),
      url: '#',
      prefix: '%',
    },
    {
      name: 'dashboard.teslimEdilmisGönderilerRaporu',
      count: Math.ceil(Math.random() * 1000),
      url: '#',
      prefix: '',
    },
    {
      name: 'dashboard.dagitimaCikmayanGonderilerRaporu',
      count: Math.ceil(Math.random() * 1000),
      url: '#',
      prefix: '',
    },
    {
      name: 'dashboard.fizikenGelmeyenGonderiler',
      count: Math.ceil(Math.random() * 1000),
      url: '#',
      prefix: '',
    },
  ];
  const homeFilter = [
    {
      name: 'today',
      value: 1,
    },
    {
      name: 'thisWeek',
      value: 2,
    },
    {
      name: 'last7Days',
      value: 3,
    },
    {
      name: 'last30Days',
      value: 4,
    },
    {
      name: 'thisMonth',
      value: 5,
    },
  ];
  return (
    <div className="home-page">
      <h1 className="mb-3">{t('shipmentOperations.shipmentOperationsSaved.title')}</h1>
      <Row>
        <Col>
          <Card>
            <Card.Body>body</Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ShipmentSaved;
