import { useFormik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

const Home = () => {
  const appState: any = useSelector((state: RootState) => state.app);
  const [form, setForm] = useState({});
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      setForm(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify(form, null, 2)}</pre>
      <ul>
        {appState.todoList.result.map((result: any) => (
          <li key={result.name}>
            <p>Name: {result.name}</p>
            <p>E-mail: {result.email}</p>
            <p>Website: {result.website}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
