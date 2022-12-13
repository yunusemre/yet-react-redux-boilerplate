import { UiBox, UiButton, UiDatepicker, UiTextSelectField } from '@components/ui';
import format from 'date-fns/format';
import { Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import useAxios from 'axios-hooks';
import { apiPath } from '@api/api-path';

const CourierTask = ({ transportCenter }: { transportCenter: any }) => {
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
    HubId: null,
    TeamLeaderId: null,
    CourierUserId: null,
    Start: format(new Date(), 'dd/MM/yyyy 00:00'),
    End: '',
  };

  const [{ response, loading }, executePost]: any = useAxios({
    url: apiPath.getTicketRequests,
    method: 'post',
    data: { VisibilityLevelCriteria: { ...visibilityLevelCriteria, ...formInitialValues } },
  });

  const teamLeaderSchema = Yup.object().shape({
    HubId: Yup.number().required(t('REQUIRED')),
  });
  return (
    <UiBox className="mt-3">
      <Formik
        initialValues={formInitialValues}
        validationSchema={teamLeaderSchema}
        onSubmit={(value, { setSubmitting }) => {
          const objects = { ...value, TaskDate: { Start: value.Start, End: value.Start } };
          executePost({
            data: objects,
          });
          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting, handleSubmit, values, setFieldValue, resetForm }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={12}>
                <Row>
                  <Col md={4} sm={6} xs={12} lg={6}>
                    <UiTextSelectField
                      items={transportCenter?.Payload?.Hubs}
                      label="Transfer Merkezi"
                      firstSelect="Select..."
                      bindLabel="Name"
                      disabled={loading}
                      bindValue="Id"
                      onChange={(event: any) => {
                        setFieldValue('HubId', event.target.value);
                        const TeamLeaders: any = transportCenter?.Payload?.Hubs.find(
                          (hub: any) => hub.Id === Number(event.target.value)
                        );
                        setSelectedLead(TeamLeaders?.TeamLeaders);
                        setFieldValue('TeamLeaderId', null);

                        setSelectedMOY([]);
                        setFieldValue('CourierUserId', null);
                      }}
                      id="HubId"
                      name="HubId"
                      horizontal="true"
                    />
                  </Col>
                  <Col md={4} sm={6} xs={12} lg={6}>
                    <UiDatepicker
                      label="Start Date"
                      format="DD/MM/YYYY"
                      currentDate={new Date()}
                      minDate={new Date()}
                      name="End"
                      id="End"
                      onChange={(val: any) => setFieldValue('End', val.format() ?? null)}
                      horizontal="true"
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col md={4} sm={6} xs={12} lg={6}>
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
                      horizontal="true"
                    />
                  </Col>
                  <Col md={4} sm={6} xs={12} lg={6}>
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
                      horizontal="true"
                    />
                  </Col>
                </Row>
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
      <UiBox className="team-exit-access-table filter-table mt-4">
        <Table striped id="table" ref={tableRef}>
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
      </UiBox>
    </UiBox>
  );
};

export default CourierTask;
