import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jzkwutdtoqjmurpqbubn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a3d1dGR0b3FqbXVycHFidWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjg3MjcsImV4cCI6MjA2MTYwNDcyN30.q2Gd2ClawQxGxIoSba_M2FU4aLFtK2cmJqBn8MNuzA4'
const supabase = createClient(supabaseUrl, supabaseKey)

const moreQuestions = [
  {
    question_text: 'What is the underlying asset in a futures contract?',
    answer: 'The underlying asset in a futures contract is the specific commodity or financial instrument that will be bought or sold at contract settlement. In commodity futures, the underlying could be physical goods like crude oil, wheat, corn, or gold. In financial futures, the underlying could be things like a stock index (e.g., S&P 500), currency pair, or an interest rate. The futures contract specifies the quantity and quality of the underlying asset to be delivered (or cash-settled). For example, an S&P 500 futures contract is based on the S&P 500 index level. Many futures contracts are settled in cash, meaning no physical delivery occurs; only the price difference is exchanged.',
    keywords: ['underlying asset', 'futures contract', 'commodity', 'financial instrument', 'delivery', 'cash-settled'],
    topic: 'futures'
  },
  {
    question_text: 'What is initial margin in futures trading?',
    answer: 'Initial margin is the upfront deposit required to open a futures position. Set by the exchange or clearinghouse, it is a fraction of the total value of the contract. For example, if a futures contract is worth $100,000 and the initial margin requirement is 5%, a trader must deposit $5,000. The initial margin acts as collateral to cover potential losses. Because of leverage, the margin allows traders to control a large position with relatively little capital. Traders must maintain this margin in their account; if losses occur and the margin balance falls below a maintenance margin level, a margin call can be issued.',
    keywords: ['initial margin', 'futures', 'deposit', 'contract value', 'exchange', 'leverage'],
    topic: 'futures'
  },
  {
    question_text: 'What is maintenance margin in futures trading?',
    answer: 'Maintenance margin is the minimum account balance that a trader must keep after opening a futures position. It is typically set lower than the initial margin. If the account equity falls below the maintenance margin due to losses, the trader will receive a margin call requiring them to deposit more funds to bring the balance back up to the initial margin level. For example, if the initial margin is $5,000 and the maintenance margin is $4,000, a margin call occurs if the account falls below $4,000. Maintenance margin protects the clearinghouse and counterparties by ensuring traders have enough funds to cover potential losses.',
    keywords: ['maintenance margin', 'futures', 'account equity', 'margin call', 'deposit'],
    topic: 'futures'
  },
  {
    question_text: 'What does "marking-to-market" mean in futures trading?',
    answer: 'Marking-to-market is the daily process of settling gains and losses on open futures positions. At the end of each trading day, the futures contract is valued at the current market price, and traders\' accounts are credited or debited accordingly. If a trader is long a futures contract and the price rises, their account is credited with the gain; if the price falls, it is debited with the loss. This ensures that losses are covered promptly. If the margin account balance falls below the maintenance margin, a margin call is issued. Marking-to-market provides daily accountability, reducing the risk that a trader defaults on a large loss.',
    keywords: ['marking-to-market', 'daily settlement', 'gains', 'losses', 'futures', 'margin account'],
    topic: 'futures'
  },
  {
    question_text: 'What are contango and backwardation in futures markets?',
    answer: 'Contango and backwardation describe the relationship between futures prices and the current spot price of the underlying asset. Contango occurs when futures prices are higher than the expected future spot price, often due to costs of carry like storage and interest. Backwardation is when futures prices are lower than the expected future spot price, which can happen if there is a convenience yield (benefit) to holding the physical asset now. For example, if crude oil is trading at $50 and a futures contract for delivery in one year is $55, the market is in contango. If the futures price were $45, it would be backwardation. Traders watch for these conditions to understand supply/demand dynamics and make trading or hedging decisions.',
    keywords: ['contango', 'backwardation', 'futures price', 'spot price', 'commodity', 'storage cost', 'convenience yield'],
    topic: 'futures'
  },
  {
    question_text: 'How are futures contracts used for hedging?',
    answer: 'Futures contracts are used for hedging by allowing producers, consumers, or investors to lock in prices and protect against price volatility. For example, a wheat farmer may sell wheat futures contracts before harvest to guarantee a selling price and hedge against the risk of prices dropping. Conversely, a bakery might buy wheat futures to secure a price and hedge against rising costs. The idea is that any loss in the physical market (on the farm or bakery) is offset by a gain on the futures position, or vice versa. By taking an opposite position in futures, hedgers effectively transfer the risk. Futures hedging helps stabilize revenues or costs for businesses exposed to commodity price swings.',
    keywords: ['hedging', 'futures', 'risk management', 'lock in price', 'offset', 'price volatility'],
    topic: 'futures'
  },
  {
    question_text: 'How are futures contracts used for speculation?',
    answer: 'Speculators use futures contracts to profit from expected price movements of the underlying asset. They take positions without any intention of delivering or receiving the actual commodity. For example, a trader might go long oil futures if they anticipate oil prices will rise. Since futures are leveraged (requiring only a margin deposit), speculators can control large positions with small capital. If prices move as expected, speculators can make large profits; if not, they can incur large losses. Speculators provide liquidity to the market by taking the opposite side of hedgers\' trades. In essence, speculators assume the price risk in hopes of high returns, but they face higher risk due to leverage.',
    keywords: ['speculation', 'futures', 'leverage', 'profit', 'loss', 'margin'],
    topic: 'futures'
  },
  {
    question_text: 'How does leverage work in futures trading?',
    answer: 'Leverage in futures trading allows traders to control a large contract with a relatively small margin deposit. Because futures require only a fraction of the contract\'s total value upfront (the margin), traders effectively borrow funds from the broker. For example, with a 10% margin requirement, a trader can control a $100,000 futures contract with just $10,000. This amplifies gains: a small percentage move in the price of the underlying asset produces a larger percentage profit on the invested margin. However, leverage also amplifies losses: a small adverse price move can quickly exceed the margin deposit. Traders must manage leverage carefully and maintain margin requirements to avoid liquidation.',
    keywords: ['leverage', 'margin', 'futures', 'amplify', 'gains', 'losses', 'risk'],
    topic: 'futures'
  },
  {
    question_text: 'How do futures contracts differ from forward contracts?',
    answer: 'Futures and forward contracts are both agreements to buy or sell an asset at a future date, but futures are standardized contracts traded on exchanges, whereas forwards are private contracts traded over-the-counter (OTC). Key differences include: futures have fixed contract sizes and expiration dates set by the exchange, and they are cleared through a clearinghouse, which reduces counterparty risk. Forwards can be customized (size, settlement date, terms) but carry higher default risk because they are private agreements. Futures are marked-to-market daily (profits and losses settled each day), while forwards settle only at contract maturity. Because of standardization and clearing, futures are generally more liquid and regulated.',
    keywords: ['futures', 'forwards', 'standardized', 'exchange', 'otc', 'clearinghouse', 'counterparty risk'],
    topic: 'futures'
  },
  {
    question_text: 'What happens when a futures contract expires?',
    answer: 'When a futures contract expires, it must be settled according to its terms. There are two main types of settlement: physical delivery and cash settlement. In physical delivery, the seller delivers the actual underlying commodity (for example, barrels of oil or bushels of wheat) to the buyer at the contract price. In cash-settled futures (common for financial futures), no physical delivery occurs; instead, the profit or loss is paid in cash based on the difference between the contract price and the final spot price at expiration. Most speculators close out their positions before expiration to avoid delivery or to cash out. Exchanges notify traders of expiration dates well in advance so they can make necessary arrangements.',
    keywords: ['expiration', 'settlement', 'physical delivery', 'cash settlement', 'futures contract'],
    topic: 'futures'
  },
  {
    question_text: 'What is a futures spread trade?',
    answer: 'A futures spread trade involves taking offsetting positions in two related futures contracts to profit from changes in the price difference (spread) between them. Common examples include calendar spreads (same underlying, different delivery months) and inter-commodity spreads (like one oil contract vs another type). For instance, a trader might buy December oil futures and sell March oil futures if they expect the price difference to widen. Spread trades typically have lower risk than outright positions because some market risk is hedged (the contracts are correlated). They also often require lower margin. Spreads can be used to hedge basis risk or to express views on relative price movements.',
    keywords: ['futures spread', 'calendar spread', 'related contracts', 'price difference', 'margin', 'risk'],
    topic: 'futures'
  },
  {
    question_text: 'What is convergence in futures markets?',
    answer: 'Convergence in futures markets refers to the tendency for the futures price and the spot price of the underlying asset to move toward each other as the contract approaches expiration. As the delivery date nears, futures prices usually converge to the current spot price to avoid arbitrage opportunities. For example, if a corn futures contract is trading higher than the current cash price well before expiration, the futures price will typically decline over time to match the spot price as expiration approaches. Convergence ensures that when contracts are settled, buyers and sellers exchange the asset at the fair market price.',
    keywords: ['convergence', 'futures price', 'spot price', 'expiration', 'arbitrage', 'delivery'],
    topic: 'futures'
  },
  {
    question_text: 'What is a margin call in futures trading?',
    answer: 'A margin call in futures trading is a demand by the broker or clearinghouse for a trader to deposit additional funds into their margin account. It happens when the account\'s equity falls below the maintenance margin level due to losses. For example, if the maintenance margin is $4,000 and the trader\'s account drops to $3,500, the broker will issue a margin call requiring at least $500 to be added. If the trader fails to meet the margin call, the broker can liquidate positions to cover the deficit. Margin calls ensure that traders have enough capital to cover potential losses.',
    keywords: ['margin call', 'maintenance margin', 'account equity', 'deposit', 'losses', 'liquidation'],
    topic: 'futures'
  },
  {
    question_text: 'What is basis risk in hedging with futures?',
    answer: 'Basis risk is the risk that the price of a futures contract and the price of the underlying asset will not move perfectly in sync, which can make a hedge less effective. The basis is defined as the difference between the spot (cash) price and the futures price of the asset. When hedging, a trader locks in a futures price to offset changes in the spot price. However, if the spot and futures prices converge differently than expected (for example, if the basis widens or narrows unexpectedly), the hedge may not fully offset losses. For instance, a farmer who sells grain futures to hedge against a price drop still faces basis risk if the actual cash price they receive differs from the futures price at delivery time.',
    keywords: ['basis risk', 'hedging', 'spot price', 'futures price', 'hedge effectiveness'],
    topic: 'futures'
  },
  {
    question_text: 'What are commodity futures?',
    answer: 'Commodity futures are futures contracts where the underlying asset is a physical commodity, such as agricultural products (corn, soybeans), energy (crude oil, natural gas), metals (gold, copper), or livestock. These contracts specify the quality, quantity, and delivery location of the commodity. Producers and consumers of commodities use these futures to hedge against price changes — for example, an oil producer might sell oil futures to lock in a selling price. Traders and speculators also trade commodity futures to profit from price movements. Commodity futures prices can be influenced by factors like supply and demand, weather, geopolitical events, and seasonal trends.',
    keywords: ['commodity futures', 'agricultural', 'energy', 'metals', 'hedging', 'speculation', 'supply and demand'],
    topic: 'futures'
  },
  {
    question_text: 'What role does a clearinghouse play in futures markets?',
    answer: 'A clearinghouse acts as the intermediary between buyers and sellers in futures markets to guarantee that trades are completed. When a futures trade is executed, the clearinghouse becomes the counterparty to both sides of the transaction, effectively ensuring the buyer receives what they paid for and the seller receives payment. It manages all margin accounts, handles the daily marking-to-market process, and steps in if a participant defaults. By centralizing these functions, the clearinghouse eliminates direct counterparty risk for individual traders and helps maintain the stability and integrity of the futures market.',
    keywords: ['clearinghouse', 'intermediary', 'buyers', 'sellers', 'counterparty risk', 'margin', 'futures'],
    topic: 'futures'
  },
  {
    question_text: 'Who are speculators and hedgers in the futures market?',
    answer: 'In the futures market, hedgers are participants who use futures contracts to reduce or manage the risk of price changes in an underlying asset. For example, a farmer (producer) may sell futures to lock in a price for their crop, or a company might buy futures to secure a commodity price. Speculators, on the other hand, are traders who try to profit from price movements without intending to make or take delivery of the asset. Speculators provide liquidity and take on the price risk that hedgers want to avoid. While hedgers aim for price certainty, speculators aim for profit from predicting price direction. Both groups are essential for a liquid and functioning futures market.',
    keywords: ['speculators', 'hedgers', 'futures market', 'price risk', 'profit', 'liquidity'],
    topic: 'futures'
  }
]

async function seedMoreFuturesQuestions() {
  try {
    console.log('Starting to insert additional futures questions...')
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

seedMoreFuturesQuestions() 