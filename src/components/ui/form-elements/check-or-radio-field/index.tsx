import { ErrorMessage, Field, useField } from 'formik';

export const UiCheckOrRadioField = ({ label, ...props }: any) => {
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
