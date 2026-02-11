
export const useCryptoData = () => {

  const API_KEY = 'CG-1Jsm51tsf75A4LGoCY6zmQk3';
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&x_cg_demo_api_key=${API_KEY}`;


};
