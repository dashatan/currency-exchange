interface Currencies {
  [key: string]: string;
}

interface LatestRates {
  disclaimer: string;
  license: string;
  timestamp: number;
  base: string;
  rates: Rates;
}
interface Rates {
  [key: string]: number;
}
