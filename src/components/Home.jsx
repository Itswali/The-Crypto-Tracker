import React from 'react'
import { useCryptoData } from '../hooks/useCryptoData'

export default function Home() {
  const { coins, error, loading } = useCryptoData();

  if (loading) return <div className="p-5 text-white bg-slate-900">Loading...</div>;
  if (error) return <div className="p-5 text-red-500 bg-slate-900">Error: {error}</div>;

  return (
    <div>

    </div>
  )
}
