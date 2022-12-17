interface MySelectProps {
  defaultValue: string;
  options: IOptions[];
}

interface IOptions {
  value: string;
  name: string;
}

export default function MySelect({ defaultValue, options }: MySelectProps) {
  return (
    <select>
      <option value=''>{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
