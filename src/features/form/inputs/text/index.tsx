import "./index.css";
export default function TextInput(props: TextInputType) {
  return <input {...props} className={"text-input " + props.className} />;
}
