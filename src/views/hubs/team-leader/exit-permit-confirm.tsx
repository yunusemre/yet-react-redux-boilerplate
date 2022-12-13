import { UiBox, UiButton, UiTable, UiTextSelectField } from '@components/ui';
import { focusElement } from '@utils/index';
import useAxios from 'axios-hooks';
import { Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const ExitPermitConfirm = ({ transportCenter }: { transportCenter: any }) => {
  const { t } = useTranslation();
  const tableRef = useRef<any>();
  const [selectedLead, setSelectedLead] = useState([]);
  const [selectedMOY, setSelectedMOY] = useState([]);

  const visibilityLevelCriteria = {
    IsCourierLocationRequired: false,
    TaskDate: {},
    HubId: null,
    TeamLeaderId: null,
    TaskType: 0,
    CourierUserId: null,
    TaskId: 0,
    ShipmentId: 0,
    CustomerTrackingId: '',
    TaskIdList: [],
    ShipmentIdList: [],
    CustomerTrackingIdList: [],
    MarketPlaceCustomerId: 0,
    SenderCustomerId: 0,
    CheckOutboundCallOrSmsSent: false,
    CustomerTrackingIdLike: '',
  };
  const formInitialValues = {
    HubId: '',
    TeamLeaderId: '',
    CourierUserId: '',
  };
  const [{ response, loading }, refetch]: any = useAxios({
    url: '/api/request/getTicketRequests',
    method: 'post',
    data: { VisibilityLevelCriteria: { ...visibilityLevelCriteria, ...formInitialValues } },
  });

  const teamLeaderSchema = Yup.object().shape({
    HubId: Yup.number().required(t('REQUIRED')),
    TeamLeaderId: Yup.string().required(t('REQUIRED')),
    CourierUserId: Yup.string().required(t('REQUIRED')),
  });

  const columns = [
    {
      dataField: 'id',
      text: 'Product ID',
    },
    {
      dataField: 'name',
      text: 'Product Name',
    },
    {
      dataField: 'price',
      text: 'Product Price',
    },
  ];
  return (
    <UiBox className="mt-3">
      <Formik
        initialValues={formInitialValues}
        validationSchema={teamLeaderSchema}
        onSubmit={(value, { setSubmitting }) => {
          refetch();
          setSubmitting(true);
          focusElement(tableRef);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleSubmit, values, setFieldValue, resetForm }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={4} sm={6} xs={12} lg={4}>
                <UiTextSelectField
                  items={transportCenter?.Payload?.Hubs}
                  label="Transfer Merkezi"
                  firstSelect="Select..."
                  bindLabel="Name"
                  disabled={loading}
                  bindValue="Id"
                  onChange={(event: any) => {
                    resetForm();
                    setFieldValue('HubId', event.target.value ?? null);
                    const TeamLeaders: any = transportCenter?.Payload?.Hubs.find(
                      (hub: any) => hub.Id === Number(event.target.value)
                    );
                    setSelectedLead(TeamLeaders?.TeamLeaders);
                    setSelectedMOY([]);
                  }}
                  id="HubId"
                  name="HubId"
                />
              </Col>
              <Col md={4} sm={6} xs={12} lg={4}>
                <UiTextSelectField
                  items={selectedLead}
                  label="Takım Lideri"
                  firstSelect="Select..."
                  bindLabel="Name"
                  bindValue="Id"
                  disabled={loading}
                  onChange={(event: any) => {
                    setFieldValue('TeamLeaderId', event.target.value ?? null);
                    const Couriers: any = selectedLead.find(
                      (hub: any) => hub.Id === Number(event.target.value)
                    );
                    setSelectedMOY(Couriers?.Couriers);
                    setFieldValue('CourierUserId', null);
                  }}
                  id="TeamLeaderId"
                  name="TeamLeaderId"
                />
              </Col>
              <Col md={4} sm={6} xs={12} lg={4}>
                <UiTextSelectField
                  items={selectedMOY}
                  label="MOY"
                  firstSelect="Select..."
                  bindLabel="Name"
                  bindValue="Id"
                  disabled={loading}
                  onChange={(event: any) =>
                    setFieldValue('CourierUserId', event.target.value ?? null)
                  }
                  id="CourierUserId"
                  name="CourierUserId"
                />
              </Col>
            </Row>
            <UiButton
              type="submit"
              text="Filter"
              icon="fa-solid fa-search"
              variant="primary"
              className="btn-sm mt-2 me-1"
              loading={isSubmitting}
              disabled={loading}
            />
            <UiButton
              text="Temizle"
              icon="fa-solid fa-brush"
              variant="outline-primary"
              className="btn-sm mt-2"
              disabled={loading}
              onClick={resetForm}
            />
          </Form>
        )}
      </Formik>
      <UiTable
        data={response?.Payload?.products}
        columns={columns}
        alert="true"
        options={{ paginationSize: 20 }}
      />
    </UiBox>
  );
};

export default ExitPermitConfirm;
