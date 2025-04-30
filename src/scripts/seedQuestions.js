import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jzkwutdtoqjmurpqbubn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a3d1dGR0b3FqbXVycHFidWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjg3MjcsImV4cCI6MjA2MTYwNDcyN30.q2Gd2ClawQxGxIoSba_M2FU4aLFtK2cmJqBn8MNuzA4'
const supabase = createClient(supabaseUrl, supabaseKey)

const sampleQuestions = [
  {
    question_text: "What is a P/E ratio and why is it important?",
    answer: "The Price-to-Earnings (P/E) ratio is a valuation metric that compares a company's stock price to its earnings per share. It's important because it helps investors determine if a stock is overvalued or undervalued relative to its earnings.",
    keywords: ["p/e ratio", "valuation", "stocks", "earnings"],
    topic: "stocks"
  },
  {
    question_text: "What is a call option in stock trading?",
    answer: "A call option is a contract that gives the buyer the right, but not the obligation, to buy a stock at a specified price (strike price) within a specific time period. It's used for bullish strategies or hedging.",
    keywords: ["options", "call option", "derivatives", "trading"],
    topic: "options"
  },
  {
    question_text: "What is Bitcoin's main value proposition?",
    answer: "Bitcoin's main value proposition is being a decentralized digital currency that operates without the need for intermediaries like banks. It offers features like limited supply (21 million), censorship resistance, and borderless transactions.",
    keywords: ["bitcoin", "crypto", "blockchain", "cryptocurrency"],
    topic: "crypto"
  },
  {
    question_text: "What is a REIT and how does it work?",
    answer: "A Real Estate Investment Trust (REIT) is a company that owns, operates, or finances income-producing real estate. REITs allow investors to invest in real estate without directly buying property, offering dividends and potential appreciation.",
    keywords: ["reit", "real estate", "investment trust", "property"],
    topic: "real estate"
  },
  {
    question_text: "What is a futures contract?",
    answer: "A futures contract is an agreement to buy or sell an asset at a predetermined price at a specific time in the future. It's commonly used for commodities and helps businesses hedge against price changes.",
    keywords: ["futures", "derivatives", "commodities", "trading"],
    topic: "futures"
  }
]

async function seedQuestions() {
  try {
    console.log('Starting to insert questions...')
    const { data, error } = await supabase
      .from('questions')
      .insert(sampleQuestions)
      .select()

    if (error) {
      console.error('Error inserting questions:', error)
      process.exit(1)
    }

    console.log('Successfully inserted', data.length, 'questions!')
    process.exit(0)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seedQuestions() 