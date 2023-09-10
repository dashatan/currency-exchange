import PrimaryButton from "../form/buttons/primary";
import SecondaryButton from "../form/buttons/secondary";
import Select from "../form/inputs/select";
import TextInput from "../form/inputs/text";
import "./exchange.css";

export default function Exchange() {
  return (
    <div className="exchange">
      <div className="exchange__box exchange__box--top">
        <Select
          options={[
            { key: "USD", value: "USD" },
            { key: "GBP", value: "GBP" },
            { key: "AUD", value: "AUD" },
          ]}
        />
        <TextInput type="number" placeholder="0.00" step={0.01} />
        <SecondaryButton className="exchange__box--center-button">262222</SecondaryButton>
        <SecondaryButton className="exchange__box--left-button">x</SecondaryButton>
      </div>
      <div className="exchange__box exchange__box--bottom">
        <Select
          className="exchange__box--bottom--select"
          options={[
            { key: "USD", value: "USD" },
            { key: "GBP", value: "GBP" },
            { key: "AUD", value: "AUD" },
          ]}
        />
        <TextInput type="number" className="exchange__box--bottom--input" placeholder="0.00" step={0.01} />
      </div>
      <PrimaryButton className="exchange__button">ExChange</PrimaryButton>
    </div>
  );
}
