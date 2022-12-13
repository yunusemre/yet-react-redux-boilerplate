import { UiBox } from '@components/ui';
import { memo, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const FilterComponent = ({ submit, onChange }: any) => {
  const { t } = useTranslation();
  const [value, setValue] = useState<number>(1);
  const homeFilter = [
    {
      name: 'TODAY',
      value: 1,
    },
    {
      name: 'THISWEEK',
      value: 2,
    },
    {
      name: 'LAST7DAYS',
      value: 3,
    },
    {
      name: 'LAST30DAYS',
      value: 4,
    },
    {
      name: 'THISMONTH',
      value: 5,
    },
  ];
  return (
    <UiBox className="mb-2">
      <ToggleButtonGroup
        type="radio"
        name="options"
        value={value}
        onChange={(val: number) => {
          setValue(val);
          onChange(val);
        }}
      >
        {homeFilter.map(({ name, value }: any, index: number) => (
          <ToggleButton
            key={index}
            variant="outline-primary"
            id={`filter-${value}`}
            value={value}
            className="p-1 ps-2 pe-2"
          >
            {t(name)}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </UiBox>
  );
};
const Filter = memo(FilterComponent);
export default Filter;
