import { useFormik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

const Home = () => {
  const appState: any = useSelector((state: RootState) => state.app);
  const [form, setForm] = useState({});
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: (values: any) => {
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
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

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
