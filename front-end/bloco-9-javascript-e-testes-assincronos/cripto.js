const listRendering = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const response = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data);

  const listElement = document.querySelector('#coins-list');
  response
    .filter((_, i) => i < 10)
    .forEach((coin) => {
      const li = document.createElement('li');
      li.textContent = `${coin.name} (${coin.symbol}): ${Number(
        coin.priceUsd
      ).toFixed(2)}`;
      listElement.appendChild(li);
    });
};

listRendering();
// 0: {id: 'bitcoin', rank: '1', symbol: 'BTC', name: 'Bitcoin', supply: '19055712.0000000000000000', …}
// 1: {id: 'ethereum', rank: '2', symbol: 'ETH', name: 'Ethereum', supply: '121012928.4990000000000000', …}
// 2: {id: 'tether', rank: '3', symbol: 'USDT', name: 'Tether', supply: '72538449554.0472900000000000', …}
// 3: {id: 'usd-coin', rank: '4', symbol: 'USDC', name: 'USD Coin', supply: '54041541819.1280060000000000', …}
// 4: {id: 'binance-coin', rank: '5', symbol: 'BNB', name: 'BNB', supply: '166801148.0000000000000000', …}
// 5: {id: 'cardano', rank: '6', symbol: 'ADA', name: 'Cardano', supply: '33739028515.7550000000000000', …}
// 6: {id: 'binance-usd', rank: '7', symbol: 'BUSD', name: 'Binance USD', supply: '18137033167.7592540000000000', …}
// 7: {id: 'xrp', rank: '8', symbol: 'XRP', name: 'XRP', supply: '45404028640.0000000000000000', …}
// 8: {id: 'solana', rank: '9', symbol: 'SOL', name: 'Solana', supply: '339963404.2100771700000000', …}
// 9: {id: 'dogecoin', rank: '10', symbol: 'DOGE', name: 'Dogecoin', supply: '132670764299.8940900000000000', …}
