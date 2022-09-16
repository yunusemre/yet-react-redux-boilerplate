import './home.scss';

import { Formik } from 'formik';
import { memo } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import DashboardBox from './boxs';
import Filter from './filter';

const Home = () => {
  const { t } = useTranslation();
  const generateData = (val: number) => {
    const dashboardData = [
      {
        name: 'dashboard.teslimatPerformansRaporu',
        count: val,
        url: '#',
        prefix: '',
      },
      {
        name: 'dashboard.teslimEdilememisGönderilerRaporu',
        count: val,
        url: '#',
        prefix: '%',
      },
      {
        name: 'dashboard.teslimEdilmisGönderilerRaporu',
        count: val,
        url: '#',
        prefix: '',
      },
      {
        name: 'dashboard.dagitimaCikmayanGonderilerRaporu',
        count: val,
        url: '#',
        prefix: '',
      },
      {
        name: 'dashboard.fizikenGelmeyenGonderiler',
        count: val,
        url: '#',
        prefix: '',
      },
    ];
    return dashboardData;
  };

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
    <div className="dashboard-page">
      <h1 className="mb-3">{t('dashboard.title')}</h1>
      <Card>
        <Card.Body>
          <Filter data={homeFilter} />
          <hr />
          <Formik
            initialValues={{
              color: '',
            }}
            validationSchema={Yup.object().shape({
              color: Yup.string().required(),
            })}
            onSubmit={(values: any) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
          >
            <Form></Form>
          </Formik>
          <DashboardBox data={generateData(Math.ceil(Math.random() * 100))} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default memo(Home);
