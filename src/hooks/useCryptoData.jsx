import { useEffect, useState } from "react";

export const useCryptoData = () => {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = 'CG-1Jsm51tsf75A4LGoCY6zmQk3';
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&x_cg_demo_api_key=${API_KEY}`;
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      if(!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setCoins(data);
    } catch (error) {
      setError(error.message)
    }
    finally {
      setLoading(false)
    }
  };
  fetchData();
}, [URL]);
return {coins, error, loading };
};
