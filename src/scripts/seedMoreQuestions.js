import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jzkwutdtoqjmurpqbubn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a3d1dGR0b3FqbXVycHFidWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjg3MjcsImV4cCI6MjA2MTYwNDcyN30.q2Gd2ClawQxGxIoSba_M2FU4aLFtK2cmJqBn8MNuzA4'
const supabase = createClient(supabaseUrl, supabaseKey)

const moreQuestions = [
  {
    question_text: 'What is an NFT (non-fungible token)?',
    answer: 'An NFT, or non-fungible token, is a unique digital asset on a blockchain (typically Ethereum). Unlike regular cryptocurrencies (which are fungible, meaning each coin is interchangeable), NFTs are one-of-a-kind tokens. Each NFT has distinct metadata that distinguishes it from other tokens. NFTs can represent ownership of digital or physical items such as art, music, videos, collectibles, or virtual land. The blockchain records who owns each NFT and its history, ensuring authenticity and provenance. Common standards like ERC-721 on Ethereum define how NFTs behave. NFTs enable creators to sell digital items with verifiable ownership.',
    keywords: ['nft', 'non-fungible token', 'unique', 'digital asset', 'blockchain', 'ownership', 'ethereum'],
    topic: 'crypto'
  },
  {
    question_text: 'What does \'slashing\' mean in proof-of-stake cryptocurrencies?',
    answer: 'Slashing is a penalty mechanism in some proof-of-stake (PoS) blockchain protocols. It occurs when a validator (a node chosen to create new blocks) acts dishonestly or fails to meet network rules, such as double-signing blocks or being frequently offline. The protocol punishes the validator by "slashing" (taking away) a portion of their staked coins. This loss is meant to discourage bad behavior and ensure validators follow the rules. For example, if a validator stakes 100 coins and misbehaves, 5 coins might be slashed. Slashing thus helps secure PoS networks by providing a financial disincentive to misbehavior.',
    keywords: ['slashing', 'proof-of-stake', 'validator', 'stake', 'penalty', 'security'],
    topic: 'crypto'
  },
  {
    question_text: 'What is crypto yield and how can investors earn it?',
    answer: 'Crypto yield refers to the return or interest earned on cryptocurrency holdings. Investors can earn crypto yield through activities like staking their coins on proof-of-stake networks, lending cryptocurrencies to others, or providing liquidity in decentralized finance (DeFi) platforms. For example, staking Ethereum currently yields around 4-7% annually. Alternatively, lending stablecoins to a DeFi lending platform might yield 5-10%. These returns come from network rewards or interest payments. While yield can boost returns, investors should consider risks like counterparty risk and smart contract vulnerabilities before earning crypto yield.',
    keywords: ['yield', 'staking', 'crypto', 'lending', 'returns', 'defi', 'interest'],
    topic: 'crypto'
  },
  {
    question_text: 'What is a mortgage and how is it used in real estate financing?',
    answer: 'A mortgage is a loan used to purchase real estate, with the property itself serving as collateral for the loan. The borrower agrees to repay the loan amount (principal) plus interest over a fixed period, typically through monthly payments. If the borrower fails to make payments, the lender has the legal right to foreclose on the property to recover the debt. Mortgages often involve a down payment from the borrower and can have fixed or adjustable interest rates. They allow individuals to buy homes or property without paying the full price upfront. The mortgage terms (interest rate, duration, etc.) determine the size of the monthly payments.',
    keywords: ['mortgage', 'loan', 'interest', 'principal', 'collateral', 'real estate', 'foreclosure'],
    topic: 'real estate'
  },
  {
    question_text: 'What is a down payment in real estate?',
    answer: 'A down payment is the initial upfront payment a buyer makes when purchasing a property, expressed as a percentage of the purchase price. For example, on a $300,000 home, a 20% down payment would be $60,000. The remaining $240,000 is then typically financed through a mortgage. A larger down payment means the borrower needs a smaller loan, which often results in better interest rates and lower monthly payments. It also shows the lender the buyer has equity in the property and reduces the lender\'s risk. Most mortgage programs require a minimum down payment (often around 3-20%) depending on the loan type.',
    keywords: ['down payment', 'purchase price', 'mortgage', 'loan', 'percentage', 'equity', 'lender'],
    topic: 'real estate'
  }
]

async function seedMoreQuestions() {
  try {
    console.log('Starting to insert additional questions...')
    const { data, error } = await supabase
      .from('questions')
      .insert(moreQuestions)
      .select()

    if (error) {
      console.error('Error inserting questions:', error)
      process.exit(1)
    }

    console.log('Successfully inserted', data.length, 'additional questions!')
    process.exit(0)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seedMoreQuestions() 