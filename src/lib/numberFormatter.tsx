export const numberFormatter = Intl.NumberFormat("en-GB", {
	currency: "GBP",
	currencyDisplay: "symbol",
	currencySign: "standard",
	style: "currency",
	minimumFractionDigits: 0,
	maximumFractionDigits: 4,
	minimumIntegerDigits: 1,
});
