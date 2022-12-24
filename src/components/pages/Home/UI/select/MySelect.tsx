import { MySelectProps } from '../../types/types';

export default function MySelect({ defaultValue, value, options, onChange }: MySelectProps) {
  return (
    <select value={value} onChange={onChange}>
      <option value=''>{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
