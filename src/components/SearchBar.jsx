import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      onSearch(keyword.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search for investment topics (e.g., P/E ratio, options, crypto)"
          className="w-full px-4 py-3 pl-12 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <MagnifyingGlassIcon className="absolute left-4 top-3.5 h-6 w-6 text-gray-400" />
      </div>
    </form>
  )
} 