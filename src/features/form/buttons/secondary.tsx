import "./index.css";

export default function SecondaryButton(
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
  return <button type="button" {...props} className={"button button__secondary " + props.className} />;
}
