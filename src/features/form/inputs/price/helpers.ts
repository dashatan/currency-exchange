export function is_numeric_char(c: string) {
  return /\d/.test(c);
}

export function formatPrice(num?: number) {
  if (!num) return 0;
  let price = "0";
  const negative = num < 0;
  const number = num
    .toString()
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString())
    .replace(",", "");

  if (number && number.length) {
    const parts = number.split(".");
    price = (
      (negative ? -1 : 1) * parseInt(parts[0].replace(/[^\d.]/g, ""))
    ).toLocaleString();
    if (parts[1] !== undefined) {
      const float = parts[1]
        .toString()
        .replace(/[^\d.]/g, "")
        .substring(0, 3);
      price = `${price}.${float ?? "000"}`;
    }
  }

  return price === "NaN" ? 0 : price;
}

export function parseLocaleNumber(stringNumber: string, locale?: string) {
  const thousandSeparator = Intl.NumberFormat(locale || "en-US")
    .format(11111)
    .replace(/\p{Number}/gu, "");
  const decimalSeparator = Intl.NumberFormat(locale || "en-US")
    .format(1.1)
    .replace(/\p{Number}/gu, "");

  return parseFloat(
    stringNumber.replace(new RegExp("\\" + thousandSeparator, "g"), "")
    .replace(new RegExp("\\" + decimalSeparator), ".")
  );
}
