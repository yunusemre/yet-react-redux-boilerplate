import './home.scss';

import { apiPath } from '@api/api-path';
import { UiBox, UiButton, UiDatepicker } from '@components/ui';
import { LoaderWrapper } from '@components/ui/loader/loader-wrapper';
import PageContainer from '@layout/pages/page-layout/page-container';
import useAxios from 'axios-hooks';
import { Formik } from 'formik';
import { memo } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import DashboardBox from './boxs';
import Filter from './filter';

const Home = () => {
  const { t } = useTranslation();
  const [{ response, loading }, executePost]: any = useAxios({
    url: apiPath.getCorporateCustomerDashboardReports,
    method: 'post',
    data: {
      ReportEndDate: '2022-10-18T00:00:00+03:00',
      ReportStartDate: '2021-10-23T00:00:00+03:00',
    },
  });

  const initialValues = {
    Start: '',
  };

  return (
    <PageContainer name="home" title={t('HOME.TITLE')}>
      <Card>
        <Card.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={(value) => {
              executePost({
                data: {
                  data: {
                    ReportEndDate: value?.Start[1],
                    ReportStartDate: value?.Start[0],
                  },
                },
              });
            }}
          >
            {({ isSubmitting, handleSubmit, values, setFieldValue, resetForm }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} lg={4}>
                    <Filter
                      onChange={(val: any) => {
                        console.log(val);
                        handleSubmit();
                      }}
                    />
                  </Col>
                  <Col xs={12} lg={6}>
                    <UiDatepicker
                      name="Start"
                      label="Rapor Tarihi Aralığı"
                      horizontal="true"
                      range
                      numberOfMonths={2}
                      format="DD/MM/YYYY"
                      className="green"
                      containerClassName="w-100"
                      onChange={(array: any[]) => {
                        setFieldValue('Start', [array[0]?.format(), array[1]?.format()]);
                      }}
                    />
                  </Col>
                  <Col md={4} sm={6} xs={12} lg={2}>
                    <UiButton
                      type="submit"
                      text="Filter"
                      icon="fa-solid fa-search"
                      variant="primary"
                      className="btn-sm me-1"
                      loading={loading}
                    />
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
          <UiBox className="mt-2">
            <LoaderWrapper loaded={loading}>
              <DashboardBox data={response?.Payload} />
            </LoaderWrapper>
          </UiBox>
        </Card.Body>
      </Card>
    </PageContainer>
  );
};

export default memo(Home);
