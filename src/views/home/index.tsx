import './home.scss';

import * as yup from 'yup';
import { useAppSelector } from '../../store/hooks';

const Home = () => {
  const app: any = useAppSelector((state) => state.app);
  const validationSchema = yup.object({
    firstName: yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    lastName: yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    email: yup.string().email('Invalid email addresss`').required('Required'),
    acceptedTerms: yup
      .boolean()
      .required('Required')
      .oneOf([true], 'You must accept the terms and conditions.'),
    jobType: yup
      .string()
      .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
      .required('Required'),
  });

  return <div className="home-page">asd</div>;
};

export default Home;
