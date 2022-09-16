import { ErrorMessage, Field, useField } from 'formik';
import Select from 'react-select';

export const TextField = ({ label, children, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className={`mb-4 form-group ${meta.touched && meta.error ? 'error' : ''}`}>
      <span className="d-flex justify-content-between">
        {label && (
          <label htmlFor={props.id} className="form-label">
            {label}
          </label>
        )}
        {children}
      </span>
      <Field {...field} {...props} className="form-control" />
      <ErrorMessage component="span" className="text-danger" name={props.name} />
    </div>
  );
};

export const CheckOrRadioField = ({ label, children, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <label className="form-label">
      <div className={`mb-4 form-check ${meta.touched && meta.error ? 'error' : ''}`}>
        <label htmlFor={props.id} className="form-check-label">
          <Field {...field} {...props} />
          {label}
        </label>
      </div>
      <ErrorMessage component="span" className="text-danger" name={props.name} />
    </label>
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
