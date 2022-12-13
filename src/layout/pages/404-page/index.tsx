import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Page404 = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-6">
      <div className="row justify-content-center align-items-sm-center py-sm-10">
        <div className="col-9 col-sm-6 col-lg-4">
          <div className="text-center text-sm-end me-sm-4 mb-5 mb-sm-0">
            <img className="img-fluid" src="404.svg" alt="404" />
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 text-center text-sm-start">
          <h1 className="display-1 mb-0">404</h1>
          <p className="lead">{t('404_PAGE_DESCRIPTION')}</p>
          <Link to="/" className="btn btn-primary">
            {t('HOME.TITLE')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
