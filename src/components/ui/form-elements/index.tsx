import './form-element.scss';

import { ErrorMessage, Field, useField } from 'formik';
import { useState } from 'react';
import Select from 'react-select';

export const TextPasswordField = ({ label, ...props }: any) => {
  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  const [field, meta] = useField(props);
  return (
    <div
      className={`${props.horizontal ? 'row' : ''} mb-2 form-group ${
        meta.touched && meta.error ? 'error' : ''
      }`}
    >
      {label && (
        <label htmlFor={props.id} className={`form-label ${props.horizontal ? 'col-sm-3' : ''}`}>
          {label}
        </label>
      )}
      <div className={`position-relative ${props.horizontal ? 'col-sm-9' : ''}`}>
        <Field
          type={togglePassword ? 'text' : 'password'}
          {...props}
          {...field}
          className="form-control  form-control-sm"
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
    <div
      className={`${props.horizontal ? 'row' : ''} mb-2 form-group ${
        meta.touched && meta.error ? 'error' : ''
      }`}
    >
      {label && (
        <label htmlFor={props.id} className="form-label col-sm-3">
          {label}
        </label>
      )}
      <div className={`position-relative ${props.horizontal ? 'col-sm-9' : ''}`}>
        <Field {...field} {...props} className="form-control form-control-sm" />
        <ErrorMessage component="span" className="text-danger" name={props.name} />
      </div>
    </div>
  );
};

export const CheckOrRadioField = ({ label, children, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className={`mb-2 form-check ${meta.touched && meta.error ? 'error' : ''}`}>
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
  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      boxShadow: state.isFocused ? '0 0 1rem 0 rgb(140 152 164 / 25%)' : 0,
    }),
  };
  return (
    <div
      className={`${props.horizontal ? 'row' : ''} mb-2 form-group ${meta.error ? 'error' : ''}`}
    >
      {label && (
        <label htmlFor={props.id} className="form-label col-sm-3">
          {label}
        </label>
      )}
      <div className={`position-relative ${props.horizontal ? 'col-sm-9' : ''}`}>
        <Field
          className="select-field"
          as={Select}
          classNamePrefix="react-select"
          options={data}
          styles={customStyles}
          name={name}
          id={props.id}
          {...props}
        />
        <ErrorMessage component="span" className="text-danger" name={name} />
      </div>
    </div>
  );
};
