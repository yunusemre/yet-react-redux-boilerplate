import { SelectField, UiButton } from '@components/ui';
import { Formik } from 'formik';
import { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import CheckboxTree from 'react-checkbox-tree';
import { useTranslation } from 'react-i18next';
import CreateRole from './create-role';

const Roles = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [checked, setChecked] = useState(['']);
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
    { value: 1, label: 'Back-up Moy' },
    { value: 1, label: 'SOM Görevlisi' },
    { value: 1, label: 'Operasyon Geliştirme Sorumlusu' },
    { value: 1, label: 'Çağrı Merkezi Sorumlusu' },
    { value: 1, label: 'Çağrı Merkezi Temsilcisi' },
    { value: 1, label: 'Planlama ve İş Geliştirme Direktörü' },
    { value: 1, label: 'İnsan Kaynakları Direktörü' },
    { value: 1, label: 'İnsan Kaynakları Sorumlusu' },
    { value: 1, label: 'Strateji Organizasyon Yöneticisi' },
    { value: 1, label: 'Operasyon Yöneticisi' },
    { value: 2, label: 'Kurumsal Müşteri Personeli' },
    { value: 2, label: 'Bölge Operasyon Sorumlusu' },
    { value: 2, label: 'Küçük Müşteriler' },
    { value: 2, label: 'IT OBSERVER' },
  ];
  return (
    <div className="profile-page">
      <h1 className="mb-3">{t('roles.title')}</h1>
      <Card className="mb-3">
        <Card.Body>
          <Formik
            initialValues={{
              select: '',
            }}
            onSubmit={(values: any) => {
              console.log('forgot', values);
              // navigate(Path.login);
            }}
          >
            <Form>
              <Row>
                <Col sm={6}>
                  <SelectField label="" name="select" id="selectsss" data={selectOptions} />
                </Col>
                <Col>
                  <UiButton
                    onClick={() => setModal(true)}
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
                  />
                </Col>
                <Col>
                  <div className="text-end">
                    <UiButton
                      className="btn-sm"
                      icon="fa-solid fa-save"
                      variant="primary"
                      text={t('save')}
                    />
                  </div>
                </Col>
              </Row>
            </Form>
          </Formik>
        </Card.Body>
      </Card>
      <Row>
        <Col sm={12} md={6} xl={4} lg={6}>
          <Card className="mb-4">
            <Card.Header>Portal</Card.Header>
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
            <Card.Header>Android</Card.Header>
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
            <Card.Header>Yetkiler</Card.Header>
            <Card.Body>
              <CheckboxTree nodes={nodes} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <CreateRole showModal={modal} handleClose={() => setModal(false)} />
    </div>
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
