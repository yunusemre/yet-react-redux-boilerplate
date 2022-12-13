import { UiButton, UiTextReactSelectField } from '@components/ui';
import { Formik } from 'formik';
import { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import CheckboxTree from 'react-checkbox-tree';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import PageContainer from '../page-layout/page-container';
import CreateRole from './create-role';

const Roles = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [checked, setChecked] = useState(['']);
  const [role, setRole] = useState<any>(null);
  const [expanded, setExpanded] = useState(['/app']);
  const selectOptions = [
    { value: 1, label: 'Planlama ve İş Geliştirme Yöneticisi' },
    { value: 2, label: 'Fiyatlandırma ve Satış Planlama Yöneticisi' },
    { value: 3, label: 'Müşteri Operasyon Takım Lideri' },
    { value: 4, label: 'Müşteri Operasyon Yetkilisi' },
    { value: 5, label: 'İndirme Peronu Görevlisi' },
    { value: 6, label: 'Vardiya Sorumlusu' },
    { value: 7, label: 'Network Planlama ve Kapasite Yönetimi Sorumlusu' },
    { value: 8, label: 'Yükleme MOY' },
    { value: 9, label: 'Operasyon Merkezi Görevlisi' },
    { value: 10, label: 'Back-up Moy' },
    { value: 11, label: 'SOM Görevlisi' },
    { value: 12, label: 'Operasyon Geliştirme Sorumlusu' },
    { value: 13, label: 'Çağrı Merkezi Sorumlusu' },
    { value: 14, label: 'Çağrı Merkezi Temsilcisi' },
    { value: 15, label: 'Planlama ve İş Geliştirme Direktörü' },
    { value: 16, label: 'İnsan Kaynakları Direktörü' },
    { value: 17, label: 'İnsan Kaynakları Sorumlusu' },
    { value: 18, label: 'Strateji Organizasyon Yöneticisi' },
    { value: 19, label: 'Operasyon Yöneticisi' },
    { value: 20, label: 'Kurumsal Müşteri Personeli' },
    { value: 21, label: 'Bölge Operasyon Sorumlusu' },
    { value: 22, label: 'Küçük Müşteriler' },
    { value: 23, label: 'IT OBSERVER' },
  ];

  const RoleValidation = Yup.object().shape({
    RoleId: Yup.string().required(t('REQUIRED')),
  });

  return (
    <PageContainer name="roles" title={t('ROLES.TITLE')}>
      <Card className="mb-3">
        <Card.Body>
          <Formik
            initialValues={{
              RoleId: '',
            }}
            validationSchema={RoleValidation}
            onSubmit={(values: any) => {
              console.log(values);
              toast.success('Rol bilgileri güncellendi');
            }}
          >
            {({ handleSubmit, setFieldValue, values }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6}>
                    <UiTextReactSelectField
                      name="RoleId"
                      id="RoleId"
                      items={selectOptions}
                      onChange={(options: any) => {
                        setRole(options);
                        setFieldValue('RoleId', options.value);
                      }}
                    />
                  </Col>
                  <Col>
                    <UiButton
                      onClick={() => {
                        setRole({});
                        setModal(true);
                      }}
                      icon="fa-solid fa-plus"
                      variant="outline-primary"
                      type="button"
                      className="btn-sm ms-1"
                    />
                    <UiButton
                      onClick={() => setModal(true)}
                      icon="fa-solid fa-edit"
                      variant="outline-warning"
                      type="button"
                      className="btn-sm ms-1"
                      disabled={!values.RoleId}
                    />
                  </Col>
                  <Col>
                    <div className="text-end">
                      <UiButton
                        className="btn-sm"
                        icon="fa-solid fa-save"
                        variant="primary"
                        text={t('SAVE')}
                        type="submit"
                      />
                    </div>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
      <Row>
        <Col sm={12} md={6} xl={4} lg={6}>
          <Card className="mb-4">
            <Card.Header>YNK PORTAL</Card.Header>
            <Card.Body>
              <CheckboxTree
                checked={checked}
                onCheck={setChecked}
                expanded={expanded}
                onExpand={setExpanded}
                nodes={nodes}
                expandOnClick
              />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} xl={4} lg={6}>
          <Card className="mb-4">
            <Card.Header>Terminal</Card.Header>
            <Card.Body>
              <CheckboxTree
                checked={checked}
                onCheck={setChecked}
                expanded={expanded}
                onExpand={setExpanded}
                nodes={nodes}
                expandOnClick
              />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} xl={4} lg={6}>
          <Card className="mb-4">
            <Card.Header>Filter</Card.Header>
            <Card.Body>
              <CheckboxTree nodes={nodes} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <CreateRole role={role} showModal={modal} handleClose={() => setModal(false)} />
    </PageContainer>
  );
};

export default Roles;

const nodes = [
  {
    value: 'App',
    label: 'app',
    children: [
      {
        value: 'Http',
        label: 'Http',
        children: [
          {
            value: 'Controllers',
            label: 'Controllers',
            children: [
              {
                value: 'WelcomeController',
                label: 'WelcomeController',
              },
            ],
          },
          {
            value: 'Routes',
            label: 'routes',
          },
        ],
      },
      {
        value: 'Providers',
        label: 'Providers',
        children: [
          {
            value: 'EventServiceProvider',
            label: 'EventServiceProvider',
          },
        ],
      },
    ],
  },
  {
    value: 'Config',
    label: 'config',
    children: [
      {
        value: 'Database',
        label: 'Database',
      },
    ],
  },
  {
    value: 'Public',
    label: 'public',
    children: [
      {
        value: 'Assets',
        label: 'assets',
        children: [
          {
            value: 'Style',
            label: 'style',
          },
        ],
      },
      {
        value: 'Index',
        label: 'Index',
      },
    ],
  },
];
