import { menuToggle } from '@store/features/app-slice';
import { useAppDispatch } from '@store/hooks';
import { Button, Card } from 'react-bootstrap';

const PageContainer = ({
  name,
  title,
  children,
}: {
  name: string;
  title: string;
  children: any;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className={`${name}-page`}>
      <Card className="mb-2 d-md-none sticky-top">
        <Card.Body className="p-2">
          <Button
            variant="outline-primary"
            className="me-2 btn-xs pt-1 pb-1 ps-2 pe-2 align-top"
            onClick={() => dispatch(menuToggle())}
          >
            <i className="fa-solid fa-bars c-pointer"></i>
          </Button>
          <h2 className="d-inline">{title}</h2>
        </Card.Body>
      </Card>
      <h2 className="mb-3 d-none d-md-block">{title}</h2>
      {children}
    </div>
  );
};

export default PageContainer;
