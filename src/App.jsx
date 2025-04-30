import { useState } from 'react'
import { supabase } from './lib/supabaseClient'
import SearchBar from './components/SearchBar'
import Quiz from './components/Quiz'

function App() {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (keyword) => {
    setLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .or(`question_text.ilike.%${keyword}%,keywords.cs.{${keyword}}`)
        .order('created_at', { ascending: false })

      if (error) throw error
      setQuestions(data)
    } catch (err) {
      setError('Failed to fetch questions. Please try again.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Investment Learning Quiz
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <p className="text-center text-gray-600 mb-8">
              Search for investment topics to test your knowledge. Learn about stocks, options, futures, crypto, and real estate.
            </p>
            <SearchBar onSearch={handleSearch} />
          </div>

          {loading && (
            <div className="text-center py-8">
              <p className="text-gray-600">Loading questions...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {!loading && !error && <Quiz questions={questions} />}
        </div>
      </main>
    </div>
  )
}

export default App 