import React, { useState, useMemo } from 'react'
import { useCryptoData } from '../hooks/useCryptoData'

export default function Home() {
  const { coins, error, loading } = useCryptoData();
  const [search, setSearch] = useState("");

  const filteredCoins = useMemo(() => {
    console.log("Filtering coins...");
    return coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase()) ||
      coin.current_price.toString().includes(search)
    );
  }, [search, coins]);

  if (loading) return <div className="p-5 text-white bg-slate-900">Loading...</div>;
  if (error) return <div className="p-5 text-red-500 bg-slate-900">Error: {error}</div>;

  return (
    <div className="p-6 bg-slate-900 min-h-screen text-white">
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Search for Crypto:</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="e.g. Bitcoin"
          className="bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 w-full focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* We map over filteredCoins, which is the memoized result */}
        {filteredCoins.length > 0 ? (
          filteredCoins.map(coin => (
            <div key={coin.id} className="p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex justify-between items-center">
                <span className="font-bold">{coin.name}</span>
                <span className="text-green-400 font-mono">${coin.current_price.toLocaleString()}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-400">No coins found matching "{search}"</p>
        )}
      </div>
    </div>
  )
}
