import { useState } from 'react'

export default function Quiz({ questions }) {
  const [showAnswers, setShowAnswers] = useState({})

  const toggleAnswer = (questionId) => {
    setShowAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }))
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No questions found. Try a different search term.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {questions.map((question) => (
        <div key={question.id} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">{question.question_text}</h3>
          <div className="space-y-2">
            <button
              onClick={() => toggleAnswer(question.id)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              {showAnswers[question.id] ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswers[question.id] && (
              <div className="mt-4 p-4 bg-gray-50 rounded">
                <p className="text-gray-700">{question.answer}</p>
              </div>
            )}
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-500">Topic: {question.topic}</span>
          </div>
        </div>
      ))}
    </div>
  )
} 