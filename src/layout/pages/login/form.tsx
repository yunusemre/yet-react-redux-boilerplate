import { Field, useField } from 'formik';

export const TextField = ({ label, children, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <span className="d-flex justify-content-between">
        <label htmlFor={props.id} className="form-label">
          {label}
        </label>
        {children}
      </span>
      <Field {...field} {...props} className="form-control" />
      {meta.touched && meta.error ? <span className="text-danger">{meta.error}</span> : null}
    </div>
  );
};

export const CheckOrRadioField = ({ label, children, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <label className="form-label">
      <div className="form-check">
        <label htmlFor={props.id} className="form-check-label">
          <Field {...field} {...props} />
          {label}
        </label>
      </div>
      {meta.touched && meta.error ? <span className="text-danger">{meta.error}</span> : null}
    </label>
  );
};

// .was-validated :invalid~.invalid-feedback, .was-validated :invalid~.invalid-tooltip
