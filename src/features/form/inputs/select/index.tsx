import "./index.css";

interface SelectProps
  extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: {
    key: string | number;
    value: string | number;
  }[];
}

export default function Select(props: SelectProps) {
  return (
    <select {...props} className={"select " + props.className}>
      {props.options.map(({ key, value }) => {
        return <option value={value}>{key}</option>;
      })}
    </select>
  );
}
