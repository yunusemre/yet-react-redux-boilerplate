import { ErrorMessage, Field, useField } from 'formik';
import { useState } from 'react';

export const UiTextPasswordField = ({ label, icon, preprendIcon, appendIcon, ...props }: any) => {
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
        <div className="input-group input-group-merge">
          {icon && preprendIcon && (
            <div className="input-group-preprend input-group-text border-0" id={props.id}>
              <i className={icon}></i>
            </div>
          )}
          <Field
            {...props}
            {...field}
            type={togglePassword ? 'text' : 'password'}
            className={`form-control form-control-sm ${icon && ' ps-1'}`}
          />
          {icon && appendIcon && (
            <div className="input-group-append input-group-text border-0" id={props.id}>
              <i className={icon}></i>
            </div>
          )}

          <i
            className={`position-absolute c-pointer password-eye ${
              togglePassword ? 'fa-solid' : 'fa-regular'
            }  fa-eye`}
            onClick={() => setTogglePassword(!togglePassword)}
          ></i>
        </div>

        <ErrorMessage component="span" className="text-danger" name={props.name} />
      </div>
    </div>
  );
};
