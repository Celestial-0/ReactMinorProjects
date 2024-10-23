import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyInfo = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                if (!res.ok) {
                    throw new Error(`Error fetching currency info: ${res.statusText}`);
                }
                const data = await res.json();
                
                if (data && data[currency]) {
                    setCurrencyInfo(data[currency]);
                } else {
                    throw new Error(`Currency info not found for: ${currency}`);
                }
            } catch (err) {
                setError(`Failed to load currency info: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrencyInfo();

        return () => {
            setCurrencyInfo(null);
            setLoading(false);
            setError(null);
        };
    }, [currency]);

    return { currencyInfo, loading, error };
}

export default useCurrencyInfo;
