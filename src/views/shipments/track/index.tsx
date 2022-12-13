import { UiButton, UiDatepicker, UiTable, UiTextField } from '@components/ui';
import PageContainer from '@layout/pages/page-layout/page-container';
import { Formik } from 'formik';
import { memo, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';

const ShipmentsTrack = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const formInitialValues = {
    ShipmentId: '',
    CustomerBarcode: '',
    CustomerTrackingId: '',
    CustomerOrderCode: '',
    CustomerId: '',
    StartDate: '',
  };

  const productsGenerator = (quantity = 5) => {
    return Array.from({ length: quantity }, (value, index) => ({
      id: Math.ceil(Math.random() * 100),
      name: `Item name ${index + 1}`,
      price: 2100 + index + Math.ceil(Math.random() * 100),
    }));
  };
  const products = [
    { id: 38, name: 'Item name 1', price: 2187 },
    { id: 13, name: 'Item name 2', price: 2187 },
    { id: 37, name: 'Item name 6', price: 2155 },
    { id: 27, name: 'Item name 7', price: 2177 },
    { id: 23, name: 'Item name 8', price: 2128 },
    { id: 32, name: 'Item name 9', price: 2167 },
    { id: 29, name: 'Item name 10', price: 2166 },
    { id: 52, name: 'Item name 11', price: 2152 },
    { id: 71, name: 'Item name 12', price: 2199 },
    { id: 98, name: 'Item name 13', price: 2165 },
    { id: 34, name: 'Item name 14', price: 2152 },
    { id: 48, name: 'Item name 15', price: 2130 },
    { id: 94, name: 'Item name 16', price: 2192 },
    { id: 36, name: 'Item name 17', price: 2152 },
    { id: 33, name: 'Item name 18', price: 2184 },
    { id: 5, name: 'Item name 19', price: 2140 },
    { id: 49, name: 'Item name 20', price: 2205 },
    { id: 61, name: 'Item name 21', price: 2137 },
    { id: 70, name: 'Item name 22', price: 2137 },
    { id: 87, name: 'Item name 23', price: 2214 },
    { id: 89, name: 'Item name 24', price: 2145 },
    { id: 67, name: 'Item name 26', price: 2173 },
  ];
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
    <PageContainer name="track" title="Track">
      <Card>
        <Card.Body>
          <Formik
            initialValues={formInitialValues}
            onSubmit={(value, { setSubmitting }) => {
              console.log(value);
              setSubmitting(true);
              setTimeout(() => {
                setSubmitting(false);
              }, 3000);
            }}
          >
            {({ isSubmitting, handleSubmit, values, setFieldValue, resetForm }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={4} sm={6} xs={12} lg={3}>
                    <UiTextField
                      autocomplate="off"
                      label="Gönderi Takip Numarası"
                      id="ShipmentId"
                      name="ShipmentId"
                      type="number"
                    />
                  </Col>
                  <Col md={4} sm={6} xs={12} lg={3}>
                    <UiTextField
                      autocomplate="off"
                      type="number"
                      label="Müşteri Barkodu"
                      id="CustomerBarcode"
                      name="CustomerBarcode"
                    />
                  </Col>
                  <Col md={4} sm={6} xs={12} lg={3}>
                    <UiTextField
                      autocomplate="off"
                      label="Müşteri Takip Numarası"
                      id="CustomerTrackingId"
                      type="number"
                      name="CustomerTrackingId"
                    />
                  </Col>
                  <Col md={4} sm={6} xs={12} lg={3}>
                    <UiTextField
                      autocomplate="off"
                      label="Sipariş Numarası"
                      type="number"
                      id="CustomerOrderCode"
                      name="CustomerOrderCode"
                    />
                  </Col>
                  <Col md={12} className="text-end">
                    <UiButton
                      type="button"
                      text="More"
                      icon={`fa-solid fa-${toggleFilter ? 'filter-circle-xmark' : 'filter'} `}
                      variant="link"
                      className="btn-sm p-0"
                      onClick={() => setToggleFilter(!toggleFilter)}
                    />
                  </Col>
                  {toggleFilter && (
                    <>
                      <Col md={4} sm={6} xs={12} lg={3}>
                        <UiTextField
                          autocomplate="off"
                          label="Gönderen Müşteri"
                          id="CustomerId"
                          type="number"
                          name="CustomerId"
                        />
                      </Col>
                      <Col md={4} sm={6} xs={12} lg={3}>
                        <UiDatepicker
                          label="Start Date"
                          format="DD/MM/YYYY"
                          minDate={new Date()}
                          name="StartDate"
                          onChange={(val: any) => setFieldValue('StartDate', val.format())}
                        />
                      </Col>
                    </>
                  )}
                </Row>
                <UiButton
                  type="submit"
                  text="Filter"
                  icon="fa-solid fa-search"
                  variant="primary"
                  className="btn-sm mt-2 me-1"
                  loading={isSubmitting}
                />
                <UiButton
                  text="Temizle"
                  icon="fa-solid fa-brush"
                  variant="outline-primary"
                  className="btn-sm mt-2"
                  onClick={resetForm}
                />
              </Form>
            )}
          </Formik>
          <UiTable
            data={products}
            columns={columns}
            alert="true"
            options={{ paginationSize: 20 }}
          />
        </Card.Body>
      </Card>
    </PageContainer>
  );
};

export default memo(ShipmentsTrack);
