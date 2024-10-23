import { useId } from 'react';
import PropTypes from 'prop-types';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  const currencySelectId = useId();

  return (
    <div className={`bg-white dark:bg-gray-800 p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 dark:text-white mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          aria-label={`${label} amount`}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <label htmlFor={currencySelectId} className="text-black/40 dark:text-white mb-2 w-full">
          Currency Type
        </label>
        <select
          id={currencySelectId}
          className="rounded-lg px-1 py-1 cursor-pointer outline-none bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600"
          disabled={currencyDisable}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          aria-label="Currency selector"
        >
          <option value="" disabled>
            Select currency
          </option>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// Prop Types for validation
InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(PropTypes.string),
  selectCurrency: PropTypes.string,
  amountDisable: PropTypes.bool,
  currencyDisable: PropTypes.bool,
  className: PropTypes.string,
};

export default InputBox;
