import { ErrorMessage, Field, useField } from 'formik';
import { memo } from 'react';

const UiTextSelectFieldComponent = ({
  label,
  firstSelect,
  bindLabel = null,
  bindValue = null,
  items = [],
  ...props
}: any) => {
  const [, meta] = useField(props);
  return (
    <div
      className={`${props.horizontal ? 'row' : ''} mb-2 form-group ${
        meta.touched && meta.error ? 'error' : ''
      }`}
    >
      {label && label !== undefined && (
        <label
          htmlFor={props.id}
          className={`form-label d-flex align-items-center ${props.horizontal ? 'col-sm-3' : ''}`}
        >
          {label}
        </label>
      )}
      <div className={`position-relative ${props.horizontal ? 'col-sm-9' : ''}`}>
        <Field className="form-select form-select-sm" as="select" {...props}>
          {firstSelect && <option>{firstSelect}</option>}
          {items.length > 0 &&
            items?.map((item: any, index: number) => {
              const val = item[bindValue] ?? item;
              const lab = item[bindLabel] ?? item;
              return (
                <option key={index} value={val}>
                  {lab}
                </option>
              );
            })}
        </Field>
        <ErrorMessage component="span" className="text-danger" name={props.name} />
      </div>
    </div>
  );
};

const UiTextSelectField = memo(UiTextSelectFieldComponent);
export { UiTextSelectField };
