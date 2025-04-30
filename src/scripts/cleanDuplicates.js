import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jzkwutdtoqjmurpqbubn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a3d1dGR0b3FqbXVycHFidWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjg3MjcsImV4cCI6MjA2MTYwNDcyN30.q2Gd2ClawQxGxIoSba_M2FU4aLFtK2cmJqBn8MNuzA4'
const supabase = createClient(supabaseUrl, supabaseKey)

function normalizeText(text) {
  // Remove all whitespace and convert to lowercase for strict comparison
  return text.toLowerCase().replace(/\s+/g, ' ').trim()
}

async function cleanDuplicates() {
  try {
    console.log('Fetching all questions...')
    const { data: questions, error: fetchError } = await supabase
      .from('questions')
      .select('*')
      .order('created_at', { ascending: true })

    if (fetchError) {
      console.error('Error fetching questions:', fetchError)
      process.exit(1)
    }

    console.log(`Total questions before deduplication: ${questions.length}`)

    // Find duplicates with improved text normalization
    const seen = new Map()
    const duplicates = []
    const uniqueQuestions = []

    questions.forEach(question => {
      const normalizedText = normalizeText(question.question_text)
      if (seen.has(normalizedText)) {
        duplicates.push(question.id)
      } else {
        seen.set(normalizedText, question.id)
        uniqueQuestions.push(question)
      }
    })

    if (duplicates.length === 0) {
      console.log('No duplicates found!')
      process.exit(0)
    }

    console.log(`Found ${duplicates.length} duplicate questions. Removing...`)

    // Delete duplicates
    const { error: deleteError } = await supabase
      .from('questions')
      .delete()
      .in('id', duplicates)

    if (deleteError) {
      console.error('Error deleting duplicates:', deleteError)
      process.exit(1)
    }

    console.log(`Successfully removed ${duplicates.length} duplicate questions!`)
    console.log(`Remaining unique questions: ${uniqueQuestions.length}`)

    // Log some stats about the topics
    const topicCounts = uniqueQuestions.reduce((acc, q) => {
      acc[q.topic] = (acc[q.topic] || 0) + 1
      return acc
    }, {})

    console.log('\nQuestions by topic:')
    Object.entries(topicCounts).forEach(([topic, count]) => {
      console.log(`${topic}: ${count} questions`)
    })

    process.exit(0)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

cleanDuplicates() 
