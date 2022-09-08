import { Card, Col, Row } from 'react-bootstrap';

const PageLayout = ({ title, name, children }: any) => {
  return (
    <div className={`${name}-page`}>
      <h2 className="mb-3">{title}</h2>
      <Row>
        <Col>
          <Card>
            <Card.Body>{children}</Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PageLayout;
