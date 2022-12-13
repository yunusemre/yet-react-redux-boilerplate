import UiBox from '@components/ui/container';
import { memo } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DashboardBoxComponent = ({ data, loading }: any) => {
  const { t } = useTranslation();
  return (
    <div className="boxes">
      <Row>
        {data?.map(({ Content, ReportName, ReportId }: any) => (
          <Col key={ReportId} sm={12} md={6} lg={4} xl={4} className="mb-4">
            <Link to="#" className="box position-relative">
              <Card className="card-hover-shadow">
                <Card.Body>
                  <UiBox tag="h1" className="display-3 bold">
                    {Content ?? 0}
                  </UiBox>
                  <UiBox tag="span" className="box-content text-body">
                    {ReportName}
                  </UiBox>
                  <UiBox className="float-end">
                    <i className="fa-sharp fa-solid fa-angles-right"></i>
                  </UiBox>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const DashboardBox = memo(DashboardBoxComponent);
export default DashboardBox;
