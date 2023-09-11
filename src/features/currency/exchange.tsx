import { useState } from "react";
import { useAppSelector } from "../../store/store";
import PrimaryButton from "../form/buttons/primary";
import SecondaryButton from "../form/buttons/secondary";
import PriceInput from "../form/inputs/price";
import Select from "../form/inputs/select";
import "./exchange.css";
import { useGetLatestRatesQuery } from "./services/exchangeService";

export default function Exchange() {
  const { data: latestRates } = useGetLatestRatesQuery();
  const store = useAppSelector((x) => x);
  const { signs } = store.wallet;
  const balances = store.wallet.balances || {};
  const rates = latestRates?.rates || {};

  const walletCurrencies = Object.keys(balances || {}).map((key) => ({
    key,
    value: key,
  }));
  const [currencies, setCurrencies] = useState<{ from: string; to: string }>({
    from: "USD",
    to: "EUR",
  });

  return (
    <div className="exchange">
      <div className="exchange__box exchange__box--top">
        <Select
          options={walletCurrencies}
          onChange={(e) =>
            setCurrencies((x) => ({ ...x, from: e.target.value }))
          }
          helperText={`${balances[currencies.from]} ${signs[currencies.from]}`}
        />
        <PriceInput
          placeholder="0.00"
          OnChange={(val) => console.log(val)}
          Currency={signs[currencies.from]}
        />
        <SecondaryButton className="exchange__box--center-button">
          262222
        </SecondaryButton>
        <SecondaryButton className="exchange__box--left-button">
          x
        </SecondaryButton>
      </div>
      <div className="exchange__box exchange__box--bottom">
        <Select
          className="exchange__box--bottom--select"
          options={walletCurrencies}
          onChange={(e) => setCurrencies((x) => ({ ...x, to: e.target.value }))}
        />
        <PriceInput
          className="exchange__box--bottom--input"
          placeholder="0.00"
          Currency={signs[currencies.to]}
        />
      </div>
      <PrimaryButton className="exchange__button">ExChange</PrimaryButton>
    </div>
  );
}
