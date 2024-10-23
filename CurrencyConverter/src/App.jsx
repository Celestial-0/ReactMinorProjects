import React from 'react';
import InputBox from './components/InputBox'; 
import DarkModeToggle from './components/DarkModeToggle';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import currencyImage from './assets/currency.png';


function App() {
    const [amount, setAmount] = React.useState(null);
    const [from, setFrom] = React.useState('usd');
    const [to, setTo] = React.useState('inr');
    const [convertedAmount, setConvertedAmount] = React.useState(null);
    const { currencyInfo, loading, error } = useCurrencyInfo(from); 

    const options = Object.keys(currencyInfo || {});

    const swap = React.useCallback(() => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }, [from, to, amount, convertedAmount]);

    const convert = React.useCallback(() => {
        if (loading || error) return; 
        try {
            const rate = currencyInfo[to] || 1; 
            setConvertedAmount(amount * rate);
        } catch (err) {
            console.error('Conversion failed:', err);
        }
    }, [amount, currencyInfo, to, loading, error]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-all duration-500">
            <header className="p-6 flex justify-between items-center bg-white dark:bg-gray-800 shadow-lg dark:shadow-none rounded-md">
                <h1 className="text-4xl font-extrabold text-orange-600 dark:text-yellow-400 tracking-wider underline">
                    Currency Converter
                </h1>
                <DarkModeToggle />
            </header>
            <main className="p-6">
                <div
                    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat relative"
                    style={{
                        backgroundImage: `url(${currencyImage})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-40 dark:opacity-50"></div>
                    <div className="w-full z-10">
                        <div className="w-full max-w-md mx-auto border border-gray-300 dark:border-gray-700 rounded-xl p-6 backdrop-blur-md bg-white/40 dark:bg-gray-800/60 shadow-xl dark:shadow-2xl">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    convert();
                                }}
                            >
                                <div className="w-full mb-6">
                                    <InputBox
                                        label="From"
                                        amount={amount}
                                        onAmountChange={setAmount}
                                        onCurrencyChange={setFrom}
                                        currencyOptions={options} 
                                        selectCurrency={from}
                                        amountDisable={false}
                                        currencyDisable={loading || error} 
                                        loading={loading} 
                                        error={error} 
                                    />
                                </div>
                                <div className="relative w-fullv h-0.5 my-4">
                                    <button
                                        type="button"
                                        onClick={swap}
                                        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-gray-300 dark:border-gray-600 rounded-full bg-blue-500 dark:bg-blue-700 text-white dark:text-gray-100 px-3 py-1 shadow-lg dark:shadow-none transition hover:bg-blue-600 dark:hover:bg-blue-600"
                                    >
                                        Swap
                                    </button>
                                </div>
                                <div className="w-full mt-6 mb-6">
                                    <InputBox
                                        label="To"
                                        amount={convertedAmount}
                                        onAmountChange={setConvertedAmount}
                                        onCurrencyChange={setTo}
                                        currencyOptions={options} 
                                        selectCurrency={to}
                                        amountDisable={true}
                                        currencyDisable={loading || error} 
                                        loading={loading}
                                        error={error} 
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-green-500 dark:bg-green-600 text-white dark:text-gray-100 px-4 py-3 rounded-lg font-semibold shadow-md transition transform hover:bg-green-600 dark:hover:bg-green-700 hover:scale-105"
                                    disabled={loading} 
                                >
                                    {loading ? 'Converting...' : 'Convert'}
                                </button>
                                {error && <p className="text-red-500 mt-2">{error}</p>} 
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
