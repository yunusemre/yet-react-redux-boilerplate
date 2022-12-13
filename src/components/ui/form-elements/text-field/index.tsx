import { ErrorMessage, Field, useField } from 'formik';

export interface UiTextFieldType {
  label: string;
  icon: string;
  preprendIcon: boolean;
  appendIcon: boolean;
  props: any;
}

export const UiTextField = ({ label, icon, preprendIcon, appendIcon, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div
      className={`${props.horizontal ? 'row' : ''} mb-2 form-group ${
        meta.touched && meta.error ? 'error' : ''
      }`}
    >
      {label && (
        <label
          htmlFor={props.id}
          className={`form-label d-flex align-items-center ${props.horizontal ? 'col-sm-3' : ''}`}
        >
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
            {...field}
            {...props}
            className={`form-control form-control-sm ${icon && ' ps-1'}`}
          />
          {icon && appendIcon && (
            <div className="input-group-append input-group-text border-0" id={props.id}>
              <i className={icon}></i>
            </div>
          )}
        </div>
        <ErrorMessage component="span" className="text-danger" name={props.name} />
      </div>
    </div>
  );
};
