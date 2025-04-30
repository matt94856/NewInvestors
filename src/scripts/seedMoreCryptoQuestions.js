import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jzkwutdtoqjmurpqbubn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a3d1dGR0b3FqbXVycHFidWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjg3MjcsImV4cCI6MjA2MTYwNDcyN30.q2Gd2ClawQxGxIoSba_M2FU4aLFtK2cmJqBn8MNuzA4'
const supabase = createClient(supabaseUrl, supabaseKey)

const moreCryptoQuestions = [
  {
    question_text: 'What is cryptocurrency mining and why is it important?',
    answer: 'Cryptocurrency mining is the process of using specialized computer hardware to validate and record transactions on a blockchain, typically used in proof-of-work systems. Miners compete to solve complex cryptographic puzzles; the first to solve one gets to add the next block of transactions to the blockchain and receives a reward (new coins and transaction fees). Mining is important because it secures the network: the computational work makes it extremely difficult to alter past transactions. Mining also releases new coins into circulation in a decentralized way. However, mining requires significant electricity and computing power, which is why many newer blockchains are exploring less energy-intensive consensus methods like proof-of-stake.',
    keywords: ['mining', 'blockchain', 'proof-of-work', 'transactions', 'reward', 'cryptocurrency'],
    topic: 'crypto'
  },
  {
    question_text: 'What is a smart contract in the context of blockchain?',
    answer: 'A smart contract is a self-executing program stored on a blockchain that automatically enforces and executes the terms of an agreement when certain conditions are met. For example, on Ethereum, a smart contract could be coded to release payment when a shipped item is received. Because smart contracts run on a blockchain, they are immutable and transparent: once deployed, they cannot be changed, and all participants can verify their code and outcomes. This eliminates the need for intermediaries, as the contract itself ensures that agreed conditions are met. Smart contracts enable decentralized applications (dApps), like automated exchanges and lending platforms, by providing trustless and automated execution of terms.',
    keywords: ['smart contract', 'blockchain', 'self-executing', 'code', 'agreement', 'ethereum', 'immutable'],
    topic: 'crypto'
  },
  {
    question_text: 'What are consensus algorithms in blockchain technology?',
    answer: 'Consensus algorithms are the rules that blockchain networks use to agree on which transactions and blocks are valid and should be added to the chain. They ensure that all nodes in the network have the same copy of the ledger. Common consensus algorithms include proof-of-work (used by Bitcoin) and proof-of-stake (used by newer blockchains). In proof-of-work, miners solve cryptographic puzzles to propose new blocks. In proof-of-stake, validators are chosen based on their stake in the network. Other methods include Proof-of-Authority and Delegated Proof-of-Stake. Consensus prevents double-spending and maintains security by making it difficult for bad actors to alter the blockchain without controlling a majority of the network\'s resources.',
    keywords: ['consensus algorithms', 'blockchain', 'proof-of-work', 'proof-of-stake', 'nodes', 'security', 'decentralization'],
    topic: 'crypto'
  },
  {
    question_text: 'What is decentralized finance (DeFi)?',
    answer: 'Decentralized finance, or DeFi, refers to financial systems and applications built on public blockchains (primarily Ethereum) that operate without traditional intermediaries like banks. DeFi platforms use smart contracts to automate functions such as lending, borrowing, trading, and earning interest. For example, users can lend cryptocurrency to a DeFi protocol and earn interest, or use decentralized exchanges (DEXs) to swap tokens without a central exchange. DeFi is open to anyone with an internet connection, offering greater transparency and accessibility. However, DeFi also comes with risks like smart contract bugs and high volatility. It aims to recreate traditional finance (loans, savings, insurance) in a decentralized way.',
    keywords: ['decentralized finance', 'defi', 'blockchain', 'smart contracts', 'lending', 'trading', 'decentralized exchange'],
    topic: 'crypto'
  }
]

async function seedMoreCryptoQuestions() {
  try {
    console.log('Starting to insert additional crypto questions...')
    const { data, error } = await supabase
      .from('questions')
      .insert(moreCryptoQuestions)
      .select()

    if (error) {
      console.error('Error inserting questions:', error)
      process.exit(1)
    }

    console.log('Successfully inserted', data.length, 'additional crypto questions!')
    process.exit(0)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seedMoreCryptoQuestions() 