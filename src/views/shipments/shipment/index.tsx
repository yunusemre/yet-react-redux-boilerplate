import PageContainer from '@layout/pages/page-layout/page-container';
import { memo } from 'react';
import { Card } from 'react-bootstrap';

const ShipmentsShipment = () => {
  return (
    <PageContainer name="shiptment" title="Shipment">
      <Card>
        <Card.Body>Shipment</Card.Body>
      </Card>
    </PageContainer>
  );
};

export default memo(ShipmentsShipment);
