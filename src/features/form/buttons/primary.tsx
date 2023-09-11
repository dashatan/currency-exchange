import "./index.css";

export default function PrimaryButton(
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
  return <button type="button" {...props} className={"button button__primary " + props.className} />;
}
