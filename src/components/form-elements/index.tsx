import './form-element.scss';

import { ErrorMessage, Field, useField } from 'formik';
import { useState } from 'react';
import Select from 'react-select';

export const TextPasswordField = ({ label, ...props }: any) => {
  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  const [field, meta] = useField(props);
  return (
    <div className={`mb-4 row form-group ${meta.touched && meta.error ? 'error' : ''}`}>
      {label && (
        <label htmlFor={props.id} className="form-label col-sm-3">
          {label}
        </label>
      )}
      <div className="position-relative col-sm-9">
        <Field
          type={togglePassword ? 'text' : 'password'}
          {...props}
          {...field}
          className="form-control"
        />
        <i
          className={`position-absolute c-pointer password-eye ${
            togglePassword ? 'fa-solid' : 'fa-regular'
          }  fa-eye`}
          onClick={() => setTogglePassword(!togglePassword)}
        ></i>
        <ErrorMessage component="span" className="text-danger" name={props.name} />
      </div>
    </div>
  );
};

export const TextField = ({ label, children, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className={`mb-4 row form-group ${meta.touched && meta.error ? 'error' : ''}`}>
      {label && (
        <label htmlFor={props.id} className="form-label col-sm-3">
          {label}
        </label>
      )}
      <div className="position-relative col-sm-9">
        <Field {...field} {...props} className="form-control" />
        <ErrorMessage component="span" className="text-danger" name={props.name} />
      </div>
    </div>
  );
};

export const CheckOrRadioField = ({ label, children, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className={`mb-4 form-check ${meta.touched && meta.error ? 'error' : ''}`}>
        <label htmlFor={props.id} className="form-check-label">
          <Field {...field} {...props} />
          {label}
        </label>
      </div>
      <ErrorMessage component="span" className="text-danger" name={props.name} />
    </>
  );
};

export const SelectField = ({ label, name, data, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <span className="d-flex justify-content-between">
        <label htmlFor={props.id} className="form-label">
          {label}
        </label>
      </span>
      <Field as={Select} name={name}>
        {data.map((val: any, index: number) => (
          <option key={index} value={val.value}>
            {val.name}
          </option>
        ))}
      </Field>
      <ErrorMessage component="span" className="text-danger" name={props.name} />
    </div>
  );
};

// .was-validated :invalid~.invalid-feedback, .was-validated :invalid~.invalid-tooltip
