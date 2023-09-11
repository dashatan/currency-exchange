import { useState } from "react";
import TextInput from "../text";
import { formatPrice, parseLocaleNumber } from "./helpers";
import "./index.css";

export default function PriceInput(props: PriceInputProps) {
  const [value, setValue] = useState<number | string>();

  function handleChange(val: string) {
    if (val === "") return setValue(undefined);
    if (val.substring(val.length - 1, val.length) === ".") return setValue(val);
    setValue(parseLocaleNumber(val));
    props.OnChange && props.OnChange(parseLocaleNumber(val));
  }

  return (
    <div className="price">
      {props.Prefix}
      <TextInput
        value={typeof value === "number" ? formatPrice(value) : value}
        {...props}
        onChange={(e) => handleChange(e.target.value)}
        className={"price__input " + props.className}
      />
      {props.Currency && (
        <div className="price__currency">{props.Currency}</div>
      )}
    </div>
  );
}
