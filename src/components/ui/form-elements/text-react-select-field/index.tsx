import { selectDefaultValue } from '@utils/index';
import { ErrorMessage, Field, useField } from 'formik';
import Select from 'react-select';

export const UiTextReactSelectField = ({ label, items, state, ...props }: any) => {
  const [field, meta] = useField(props);
  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      boxShadow: state.isFocused ? '0 0 1rem 0 rgb(140 152 164 / 25%)' : 0,
    }),
  };
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
        <Field
          render={() => {
            return (
              <Select
                classNamePrefix="react-select"
                options={items}
                className="select-field"
                value={selectDefaultValue(items, field?.value)}
                styles={customStyles}
                {...props}
              />
            );
          }}
        />
        <ErrorMessage component="span" className="text-danger" name={props.name} />
      </div>
    </div>
  );
};
