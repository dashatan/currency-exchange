import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import PrimaryButton from "../form/buttons/primary";
import SecondaryButton from "../form/buttons/secondary";
import PriceInput from "../form/inputs/price";
import Select from "../form/inputs/select";
import "./exchange.css";
import { useGetLatestRatesQuery } from "./services/exchangeService";
import { ArrowUpDown, TrendingUp } from "lucide-react";
import { change } from "./helpers/change";
import { formatPrice } from "../form/inputs/price/helpers";
import { WalletSlice } from "./slices/wallet";

export default function Exchange() {
  const dispatch = useAppDispatch();
  const { data: latestRates } = useGetLatestRatesQuery(undefined, {
    pollingInterval: 10000,
  });
  const store = useAppSelector((x) => x);
  const { signs } = store.wallet;
  const balances = store.wallet.balances || {};
  const rates = latestRates?.rates || {};

  const walletCurrencies = Object.keys(balances || {}).map((key) => ({
    key,
    value: key,
  }));
  const [currencies, setCurrencies] = useState<{
    from: string;
    to: string;
    fromPrice?: number;
    toPrice?: number;
  }>({ from: "USD", to: "EUR" });

  const { from, to, fromPrice, toPrice } = currencies;
  const [rate, setRate] = useState(rates[to]);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const newRate = change({ from, to, rates, val: 1 });
    setRate(newRate);
  }, [rates]);

  async function handleFromCurrencyChange(val: string) {
    const newRate = change({ from: val, to, rates, val: 1 });
    setRate(newRate);
    setCurrencies((x) => ({
      ...x,
      from: val,
      ...(x.fromPrice && { toPrice: x.fromPrice * newRate }),
    }));
  }
  async function handleToCurrencyChange(val: string) {
    const newRate = change({ from, to: val, rates, val: 1 });
    setRate(newRate);
    setCurrencies((x) => ({
      ...x,
      to: val,
      ...(x.fromPrice && { toPrice: x.fromPrice * newRate }),
    }));
  }

  function handlePrice(val: number) {
    setCurrencies((x) => ({
      ...x,
      fromPrice: val,
      toPrice: val * (rate || rates[to] || 0),
    }));
  }

  function handleSwap() {
    const newRate = change({ from: to, to: from, rates });
    setRate(newRate);
    setCurrencies((x) => ({
      from: x.to,
      to: x.from,
      fromPrice: x.fromPrice,
      ...(x.fromPrice && { toPrice: x.fromPrice * newRate }),
    }));
    setCount((x) => x + 1);
  }

  function handleExchange() {
    if (!fromPrice || !toPrice) return;
    const newBalances = { ...balances };
    newBalances[from] = newBalances[from] - fromPrice;
    newBalances[to] = newBalances[to] + toPrice;
    dispatch(WalletSlice.actions.balances(newBalances));
  }

  return (
    <div className="exchange" key={count}>
      <div className="exchange__box exchange__box--top">
        <Select
          options={walletCurrencies}
          onChange={(e) => handleFromCurrencyChange(e.target.value)}
          helperText={`${balances[from]} ${signs[from]}`}
          defaultValue={from}
        />
        <PriceInput
          placeholder="0.00"
          OnChange={handlePrice}
          Currency={signs[from]}
          value={formatPrice(fromPrice)}
        />
        <SecondaryButton className="exchange__box--center-button">
          <TrendingUp size={16} />
          <span>{`1${signs[from]} = ${rate || rates[to] || 0} ${
            signs[to]
          }`}</span>
        </SecondaryButton>
        <SecondaryButton
          className="exchange__box--left-button"
          onClick={handleSwap}
        >
          <ArrowUpDown size={16} />
        </SecondaryButton>
      </div>
      <div className="exchange__box exchange__box--bottom">
        <Select
          className="exchange__box--bottom--select"
          options={walletCurrencies}
          onChange={(e) => handleToCurrencyChange(e.target.value)}
          helperText={`${balances[to]} ${signs[to]}`}
          defaultValue={to}
        />
        <PriceInput
          className="exchange__box--bottom--input"
          placeholder="0.00"
          Currency={signs[to]}
          value={formatPrice(toPrice)}
          disabled
        />
      </div>
      <PrimaryButton className="exchange__button" onClick={handleExchange}>
        ExChange
      </PrimaryButton>
    </div>
  );
}
