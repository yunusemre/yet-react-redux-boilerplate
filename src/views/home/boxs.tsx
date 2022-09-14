import { memo } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DashboardBoxComponent = ({ data }: any) => {
  const { t } = useTranslation();
  return (
    <div className="boxes">
      <Row>
        {data.map(({ name, url, prefix, count }: any, index: number) => (
          <Col key={index} sm={12} md={6} lg={4} xl={4} className="mb-4">
            <Link to={url} className="box">
              <Card className="card-hover-shadow">
                <Card.Body>
                  <h1 className="display-3 bold">
                    {count}
                    {prefix}
                  </h1>
                  <span className="box-content text-body">{t(name)}</span>
                  <span className="float-end">
                    <i className="fa-sharp fa-solid fa-angles-right"></i>
                  </span>
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
