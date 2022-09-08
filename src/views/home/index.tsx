import './home.scss';

import { useState } from 'react';
import { Card, Col, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState<number>(1);
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
      <h3>{t('dashboard.title')}</h3>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <ToggleButtonGroup
                type="radio"
                name="options"
                value={value}
                onChange={(val: number) => setValue(val)}
              >
                {homeFilter.map(({ name, value }, index) => (
                  <ToggleButton
                    key={index}
                    variant="outline-primary"
                    id={`filter-${value}`}
                    size="sm"
                    value={value}
                  >
                    {t(name)}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
              <hr />
              <div className="boxes">
                <Row>
                  <Col sm={12} md={6} lg={4} xl={4} className="mb-4">
                    <Link to="#" className="box">
                      <Card className="card-hover-shadow">
                        <Card.Body>
                          <h1 className="box-title">0%</h1>
                          <span className="box-content">
                            {t('dashboard.teslimatPerformansRaporu')}
                          </span>
                          <span className="float-end">
                            <i className="fa-sharp fa-solid fa-angles-right"></i>
                          </span>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                  <Col sm={12} md={6} lg={4} xl={4} className="mb-4" xs="2">
                    <Link to="#" className="box">
                      <Card className="card-hover-shadow">
                        <Card.Body>
                          <h1 className="box-title">0</h1>
                          <span className="box-content">
                            {t('dashboard.teslimEdilememisGönderilerRaporu')}
                          </span>
                          <span className="float-end">
                            <i className="fa-sharp fa-solid fa-angles-right"></i>
                          </span>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                  <Col sm={12} md={6} lg={4} xl={4} className="mb-4" xs="2">
                    <Link to="#" className="box">
                      <Card className="card-hover-shadow">
                        <Card.Body>
                          <h1 className="box-title">0</h1>
                          <span className="box-content">
                            {t('dashboard.teslimEdilmisGönderilerRaporu')}
                          </span>
                          <span className="float-end">
                            <i className="fa-sharp fa-solid fa-angles-right"></i>
                          </span>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                  <Col sm={12} md={6} lg={4} xl={4} className="mb-4" xs="2">
                    <Link to="#" className="box">
                      <Card className="card-hover-shadow">
                        <Card.Body>
                          <h1 className="box-title">0</h1>
                          <span className="box-content">
                            {t('dashboard.dagitimaCikmayanGonderilerRaporu')}
                          </span>
                          <span className="float-end">
                            <i className="fa-sharp fa-solid fa-angles-right"></i>
                          </span>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                  <Col sm={12} md={6} lg={4} xl={4} className="mb-4" xs="2">
                    <Link to="#" className="box">
                      <Card className="card-hover-shadow">
                        <Card.Body>
                          <h1 className="box-title">0</h1>
                          <span className="box-content">
                            {t('dashboard.fizikenGelmeyenGonderiler')}
                          </span>
                          <span className="float-end">
                            <i className="fa-sharp fa-solid fa-angles-right"></i>
                          </span>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
