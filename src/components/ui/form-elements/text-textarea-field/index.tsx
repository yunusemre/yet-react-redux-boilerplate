import { ErrorMessage, Field, useField } from 'formik';

export const UiTextAreaField = ({ label, children, ...props }: any) => {
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
        <Field {...field} {...props} as="textarea" className="form-control form-control-sm" />
        <ErrorMessage component="span" className="text-danger" name={props.name} />
      </div>
    </div>
  );
};

// <UiTextAreaField label="Gönderen Müşteri" id="CustomerId" name="CustomerId" cols="6" rows="6" />;
