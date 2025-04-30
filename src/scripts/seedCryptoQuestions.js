import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jzkwutdtoqjmurpqbubn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a3d1dGR0b3FqbXVycHFidWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjg3MjcsImV4cCI6MjA2MTYwNDcyN30.q2Gd2ClawQxGxIoSba_M2FU4aLFtK2cmJqBn8MNuzA4'
const supabase = createClient(supabaseUrl, supabaseKey)

const cryptoQuestions = [
  {
    question_text: 'What is a cryptocurrency and how is it different from traditional currency?',
    answer: 'A cryptocurrency is a digital or virtual currency that uses cryptographic techniques for security and to control the creation of new units. It operates on a decentralized blockchain, which is a distributed ledger recording all transactions. Unlike traditional fiat currencies, cryptocurrencies are not issued or controlled by central banks or governments. Examples like Bitcoin and Ethereum enable peer-to-peer transfers without intermediaries, allowing global transfers without banks. Cryptocurrencies can be more volatile than traditional money, but they offer features like decentralization and transparency.',
    keywords: ['cryptocurrency', 'digital currency', 'blockchain', 'decentralized', 'fiat', 'bitcoin', 'ethereum'],
    topic: 'crypto'
  },
  {
    question_text: 'What is a blockchain and how does it maintain transaction records in cryptocurrencies?',
    answer: 'A blockchain is a type of distributed ledger where transactions are recorded in blocks that are cryptographically linked together. Each block contains a list of recent transactions and a reference to the previous block, creating an immutable chain. The blockchain is maintained by a network of nodes, each holding a copy of the ledger, ensuring decentralization. In cryptocurrencies like Bitcoin, blockchain technology is used to verify and record transactions publicly, so everyone sees the same data. Blockchain relies on consensus algorithms (such as proof-of-work or proof-of-stake) to agree on which blocks to add, making the ledger secure and tamper-resistant.',
    keywords: ['blockchain', 'distributed ledger', 'transactions', 'blocks', 'cryptographic', 'decentralized', 'consensus'],
    topic: 'crypto'
  },
  {
    question_text: 'What is Bitcoin and how does it operate?',
    answer: 'Bitcoin is the first and most well-known cryptocurrency, created in 2009 by an unknown person or group under the pseudonym Satoshi Nakamoto. It operates on a peer-to-peer network without any central authority. Bitcoin uses a proof-of-work consensus mechanism: miners use powerful computers to solve complex puzzles and add new blocks of transactions to the blockchain. When a miner adds a new block, they receive newly created Bitcoins and transaction fees as a reward. Bitcoin\'s supply is limited to 21 million coins, making it akin to "digital gold." Transactions are recorded on the blockchain, making them transparent and immutable. Bitcoin allows value to be sent and received without banks, using digital addresses and cryptographic keys to secure transfers.',
    keywords: ['bitcoin', 'cryptocurrency', 'proof-of-work', 'mining', 'blockchain', 'decentralized', 'peer-to-peer'],
    topic: 'crypto'
  },
  {
    question_text: 'What is a cryptocurrency wallet and how does it work?',
    answer: 'A cryptocurrency wallet is a digital tool (which can be software or hardware) that securely stores your cryptographic keys for cryptocurrency. It does not store coins physically; rather, it holds your public and private keys that prove ownership of coins on the blockchain. The public key (or address) allows others to send you cryptocurrency, and you share it like an account number. The private key must be kept secret; it is used to sign transactions when you want to send crypto to someone. Without your private key, you cannot spend your coins. Wallets can be online (hot wallets, connected to the internet) or offline (cold storage, like hardware wallets) for added security. You use a wallet to generate addresses, track balances, and create signed transactions that the network then broadcasts for validation.',
    keywords: ['wallet', 'private key', 'public key', 'cryptocurrency', 'address', 'transaction', 'cold storage', 'hot wallet'],
    topic: 'crypto'
  },
  {
    question_text: 'What is proof-of-work (PoW) in blockchain systems?',
    answer: 'Proof-of-work (PoW) is a consensus mechanism used by some blockchains (like Bitcoin) where network participants called miners solve complex mathematical puzzles to add new blocks to the blockchain. This process requires significant computational power and energy. When a miner solves the puzzle first, they broadcast the new block to the network, and once other nodes confirm it\'s valid, the miner earns a reward (new cryptocurrency coins plus transaction fees). PoW ensures network security by making it very difficult for any bad actor to alter the blockchain without redoing the huge amount of work. Because solving these puzzles is costly, PoW helps prevent fraud and double-spending. However, it can be slow and energy-intensive compared to other methods.',
    keywords: ['proof-of-work', 'consensus', 'miners', 'blockchain', 'mining', 'computational', 'security'],
    topic: 'crypto'
  },
  {
    question_text: 'What is proof-of-stake (PoS) and how does it differ from proof-of-work?',
    answer: 'Proof-of-stake (PoS) is a blockchain consensus mechanism where validators are chosen to create new blocks based on the number of coins they hold and are willing to "stake" (lock up) as collateral. Unlike proof-of-work (which relies on computational work), PoS selects validators often based on how many coins they have and how long they\'ve held them. Validators lock up their coins, and in return, they get a chance to validate new blocks. If a validator tries to cheat or is offline when chosen, they can lose (be "slashed" out of) part of their staked coins as a penalty. PoS requires much less energy than PoW and provides security by economically incentivizing honest validation. For example, Ethereum has transitioned from PoW to PoS, where users who stake Ether earn rewards for securing the network.',
    keywords: ['proof-of-stake', 'stake', 'validator', 'blockchain', 'consensus', 'slashing'],
    topic: 'crypto'
  },
  {
    question_text: 'What does it mean to stake cryptocurrency and what rewards can it provide?',
    answer: 'Staking cryptocurrency means locking up a certain amount of coins in a proof-of-stake blockchain to help validate transactions and secure the network. By staking your coins (often in a wallet or on a platform), you become a validator or delegate, and you earn rewards for participating in block validation. These rewards are typically additional cryptocurrency, similar to earning interest. The reward rate is often expressed as an annual percentage yield (APY). For example, staking Ethereum currently yields around 4-7% per year. However, staking comes with risks: if the network penalizes you for invalid validation (like being offline or dishonest), you could lose a portion of your staked coins (slashing). Overall, staking provides a way to earn passive income on crypto holdings by contributing to network security.',
    keywords: ['staking', 'proof-of-stake', 'rewards', 'validators', 'blockchain', 'yield', 'interest'],
    topic: 'crypto'
  },
  {
    question_text: 'What is a stablecoin and how does it maintain a stable value?',
    answer: 'A stablecoin is a type of cryptocurrency designed to maintain a stable value by being pegged to an external reference, like a fiat currency or asset. For example, Tether (USDT) and USD Coin (USDC) are pegged to the US dollar 1:1, meaning each coin is meant to be worth one dollar. Stablecoins maintain stability by holding reserves of the pegged asset or using algorithms to control supply. This contrasts with other cryptocurrencies like Bitcoin, which can be highly volatile. Stablecoins allow traders and users to hold cryptocurrency value without the large price swings. They are often used for payments and trading, because they combine crypto speed with price stability.',
    keywords: ['stablecoin', 'fiat currency', 'pegged', 'reserves', 'tether', 'usdc', 'volatility', 'cryptocurrency'],
    topic: 'crypto'
  }
]

async function seedCryptoQuestions() {
  try {
    console.log('Starting to insert crypto questions...')
    const { data, error } = await supabase
      .from('questions')
      .insert(cryptoQuestions)
      .select()

    if (error) {
      console.error('Error inserting questions:', error)
      process.exit(1)
    }

    console.log('Successfully inserted', data.length, 'crypto questions!')
    process.exit(0)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

seedCryptoQuestions() 