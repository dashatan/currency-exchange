import "./index.css";

export default function TextInput(
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) {
  return <input {...props} className={"text-input " + props.className} />;
}
