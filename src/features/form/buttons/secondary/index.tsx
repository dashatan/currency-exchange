import "./index.css";

export default function SecondaryButton(
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
  return <button type="button" {...props} className={"secondary-button " + props.className} />;
}
