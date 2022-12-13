import { apiPath } from '@api/api-path';
import UiBox from '@components/ui/container';
import { useApi } from '@hooks/request';
import PageContainer from '@layout/pages/page-layout/page-container';
import { Card, Tab, Tabs } from 'react-bootstrap';
import ExitPermitConfirm from './exit-permit-confirm';
import CourierTask from './moy-assigment-follow';

const TeamLeader = () => {
  const { response, loading } = useApi({
    url: apiPath.getTicketRequests,
    method: 'post',
    data: {},
  });
  return (
    <PageContainer name="team-leader" title="Team Leader">
      <Card>
        <Card.Body>
          <Tabs defaultActiveKey="1" className="nav-pills">
            <Tab eventKey="1" title="Çıkış İzin Onay">
              <ExitPermitConfirm transportCenter={response} />
            </Tab>
            <Tab eventKey="2" title="MOY Görev Takibi">
              <CourierTask transportCenter={response} />
            </Tab>
            <Tab eventKey="3" title="MOY Durum Ekranı">
              <UiBox className="mt-3">MOY Durum Ekranı</UiBox>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </PageContainer>
  );
};

export default TeamLeader;
