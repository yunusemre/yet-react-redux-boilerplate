import './datepicker.scss';

import { ErrorMessage, Field, useField } from 'formik';
import gregorian from 'react-date-object/calendars/gregorian';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-multi-date-picker';

const months: string[] = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];
const weekDays: string[] = ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'];
export interface UiDatepickerType {
  label?: string;
  props?: any;
}

export const UiDatepicker = ({ label, ...props }: any) => {
  const { t } = useTranslation();
  const [, meta] = useField(props);
  return (
    // ${meta.touched && meta.error ? 'error' : ''}
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
        <div className="input-group input-group-merge overflow-visible">
          <Field
            render={() => (
              <DatePicker
                weekStartDayIndex={1}
                weekDays={weekDays}
                calendar={gregorian}
                months={months}
                className="green"
                containerClassName="w-100"
                inputClass="form-control form-control-sm"
                {...props}
              />
            )}
          />
          <div className="input-group-append input-group-text border-0">
            <i className="fa-solid fa-calendar-days"></i>
          </div>
        </div>
        <ErrorMessage component="span" className="text-danger" name={props.name} />
      </div>
    </div>
  );
};
