import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jzkwutdtoqjmurpqbubn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a3d1dGR0b3FqbXVycHFidWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjg3MjcsImV4cCI6MjA2MTYwNDcyN30.q2Gd2ClawQxGxIoSba_M2FU4aLFtK2cmJqBn8MNuzA4'
const supabase = createClient(supabaseUrl, supabaseKey)

const moreCryptoQuestions = [
  {
    question_text: 'What is yield farming in the context of cryptocurrency?',
    answer: 'Yield farming is an investment strategy within DeFi (decentralized finance) where users earn rewards by providing liquidity or staking cryptocurrency in various protocols. Typically, a user deposits crypto into a liquidity pool or lending platform. In return, they receive interest or additional tokens. These rewards can be high percentage yields, especially in newer or riskier platforms. However, yield farming is complex and risky: it involves smart contract risk (bugs or hacks in the protocol) and often temporary high returns. Investors often move funds between platforms to chase higher yields, compounding their rewards. In essence, yield farming lets cryptocurrency holders grow their assets, but they must carefully manage risk.',
    keywords: ['yield farming', 'defi', 'liquidity', 'staking', 'rewards', 'interest'],
    topic: 'crypto'
  },
  {
    question_text: 'What is a fork in a cryptocurrency network?',
    answer: 'A fork in a cryptocurrency network is an event where the blockchain\'s protocol rules change. There are two main types of forks: soft forks and hard forks. A soft fork is a backward-compatible change where upgraded nodes enforce new rules, but older nodes still recognize new blocks as valid. A hard fork is not backward-compatible: the blockchain splits into two separate chains if some participants upgrade and others do not. For example, Bitcoin Cash was created by a hard fork of Bitcoin in 2017. In a hard fork, nodes that upgrade will follow the new rules and create a new blockchain, while non-upgraded nodes continue on the old chain. Forks can be planned upgrades or occur accidentally when developers disagree on rules.',
    keywords: ['fork', 'hard fork', 'soft fork', 'blockchain', 'protocol', 'bitcoin cash'],
    topic: 'crypto'
  },
  {
    question_text: 'What is the difference between a public key and a private key in cryptocurrency?',
    answer: 'In cryptocurrency, a public key and a private key are two parts of a cryptographic key pair. The public key is like an address that others can use to send you cryptocurrency; it is derived from your private key and can be shared freely. The private key is a secret code that you must keep confidential. It is used to sign transactions, proving you have the right to spend the funds associated with your public key. If someone obtains your private key, they can spend your cryptocurrency. Therefore, wallets are designed to securely store your private keys. Together, public and private keys enable the secure transfer of cryptocurrency on the blockchain.',
    keywords: ['public key', 'private key', 'cryptography', 'address', 'signature', 'wallet'],
    topic: 'crypto'
  },
  {
    question_text: 'What are altcoins and how do they differ from Bitcoin?',
    answer: 'Altcoins (short for "alternative coins") are any cryptocurrencies other than Bitcoin. They were created to improve or modify Bitcoin\'s design and add new features or functionality. For example, Ethereum is an altcoin that introduced smart contracts, Litecoin is similar to Bitcoin but allows faster transactions, and Monero focuses on privacy. Altcoins each have their own blockchain network, supply rules, and consensus methods. They differ from Bitcoin in aspects like transaction speed, total supply, and purpose. Investors consider altcoins as alternatives to Bitcoin; they can offer different use cases but often carry different risks and volatility levels compared to Bitcoin.',
    keywords: ['altcoins', 'bitcoin', 'ethereum', 'cryptocurrency', 'smart contracts', 'blockchain', 'network'],
    topic: 'crypto'
  },
  {
    question_text: 'What is a decentralized exchange (DEX) in cryptocurrency trading?',
    answer: 'A decentralized exchange (DEX) is a cryptocurrency trading platform that operates without a central authority. Instead of holding user funds, a DEX uses smart contracts to facilitate trades directly between users\' wallets. This means users retain control of their private keys and assets at all times. Orders are matched on-chain using liquidity pools or automated market makers. For example, platforms like Uniswap and SushiSwap are DEXs on Ethereum. DEXs offer greater transparency and fewer regulatory constraints, but they may have lower liquidity and slower transaction speeds compared to centralized exchanges.',
    keywords: ['decentralized exchange', 'dex', 'smart contract', 'peer-to-peer', 'liquidity pool', 'private keys'],
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