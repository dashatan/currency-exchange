import "./index.css";

export default function PrimaryButton(
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
  return <button type="button" {...props} className={"primary-button " + props.className} />;
}
