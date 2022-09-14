import { memo, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const FilterComponent = ({ data }: any) => {
  const { t } = useTranslation();
  const [value, setValue] = useState<number>(1);

  return (
    <ToggleButtonGroup
      type="radio"
      name="options"
      value={value}
      onChange={(val: number) => setValue(val)}
    >
      {data.map(({ name, value }: any, index: number) => (
        <ToggleButton
          key={index}
          variant="outline-primary"
          id={`filter-${value}`}
          size="sm"
          value={value}
        >
          {t(name)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
const Filter = memo(FilterComponent);
export default Filter;
