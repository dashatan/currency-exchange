import "./index.css";

export default function Select(props: SelectProps) {
  return (
    <div className="select" >
      <select {...props} className={"select__input " + props.className}>
        {props.options.map(({ key, value }) => {
          return <option value={value}>{key}</option>;
        })}
      </select>
      <small className="select__helper-text">{props.helperText}</small>
    </div>
  );
}
