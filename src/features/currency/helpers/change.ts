interface ExchangeProps {
  from: string;
  to: string;
  val?: number;
  rates: Rates;
}
export function change(args: ExchangeProps) {
  const { from, rates, to } = args;
  console.log(args);

  const fromRate = rates[from];
  const toRate = rates[to];
  console.log(fromRate);
  console.log(toRate);

  return toRate / fromRate;
}
