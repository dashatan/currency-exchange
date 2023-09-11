interface PriceInputProps extends TextInputType {
  OnChange?: (val: number) => void;
  Prefix?: React.ReactNode;
  Currency?: string;
}
