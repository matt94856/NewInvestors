import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jzkwutdtoqjmurpqbubn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a3d1dGR0b3FqbXVycHFidWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjg3MjcsImV4cCI6MjA2MTYwNDcyN30.q2Gd2ClawQxGxIoSba_M2FU4aLFtK2cmJqBn8MNuzA4'
const supabase = createClient(supabaseUrl, supabaseKey)

const moreQuestions = [
  {
    question_text: 'What are penny stocks and why are they risky?',
    answer: 'Penny stocks are shares of very small companies that trade at low prices, typically under $5 per share. They often have low market capitalization and limited liquidity. Penny stocks are risky because they can be extremely volatile and are more susceptible to market manipulation and fraud (such as pump-and-dump schemes). Since there is often limited public information about the company, their prices can swing dramatically on small trades or rumors. While some investors chase penny stocks hoping for big gains, the lack of liquidity and transparency means losses can also be rapid and large. Investors should be cautious and research carefully when dealing with penny stocks.',
    keywords: ['penny stock', 'small company', 'low price', 'volatility', 'liquidity', 'fraud'],
    topic: 'stocks'
  },
  {
    question_text: 'What is an option in finance?',
    answer: 'An option is a financial derivative contract that gives the buyer the right, but not the obligation, to buy or sell an underlying asset at a specified strike price before or on a certain expiration date. There are two main types: call options (right to buy) and put options (right to sell). The buyer pays a premium for this right. If the price of the underlying moves favorably, the buyer can exercise the option to make a profit; if it moves unfavorably, the buyer can let the option expire, losing only the premium. Options are used for speculation (betting on price moves) and hedging (protecting against price moves) because they allow leverage and limited risk.',
    keywords: ['option', 'derivative', 'underlying asset', 'strike price', 'expiration date', 'premium', 'call', 'put'],
    topic: 'options'
  },
  {
    question_text: 'What is a call option?',
    answer: 'A call option is a type of options contract that gives the holder the right to buy an underlying asset at a specified strike price on or before the option\'s expiration date. Buyers of calls are typically bullish on the asset: they hope the asset\'s price will rise above the strike price. If the asset\'s price goes above the strike, the call option becomes "in the money," meaning it has intrinsic value (for example, you could buy at $50 via the option and sell at $60 in the market). The buyer pays a premium to acquire this right, and if they choose not to exercise (e.g., if the price stays below the strike), the option expires worthless and the loss is the premium paid. The seller (writer) of the call collects the premium and is obligated to sell the asset at the strike price if the buyer exercises.',
    keywords: ['call option', 'buy', 'strike price', 'expiration date', 'holder', 'writer', 'in the money'],
    topic: 'options'
  },
  {
    question_text: 'What is a put option?',
    answer: 'A put option is a type of options contract that gives the holder the right to sell an underlying asset at a specified strike price on or before the option\'s expiration date. Investors buy puts when they expect the asset\'s price to fall. If the asset\'s price drops below the strike price, the put option becomes "in the money" because the holder can sell the asset for more than its market value. The buyer pays a premium for this contract. If the price stays above the strike, the put will expire worthless, and the loss to the buyer is limited to the premium. The seller (writer) of the put receives the premium and is obligated to buy the asset at the strike price if the buyer exercises the option.',
    keywords: ['put option', 'sell', 'strike price', 'expiration date', 'holder', 'writer', 'in the money', 'hedge'],
    topic: 'options'
  },
  {
    question_text: 'What is the strike price in an option contract?',
    answer: 'The strike price (or exercise price) is the fixed price at which the holder of an option can buy (in the case of a call) or sell (in the case of a put) the underlying asset when exercising the option. It is set when the option is created. For example, if a stock is trading at $50, a call option might have a strike price of $55, and a put might have a strike of $45. The difference between the underlying\'s market price and the strike price determines whether an option is in the money (profitable to exercise) or out of the money. Options with strike prices closer to the current market price are more likely to have value.',
    keywords: ['strike price', 'exercise price', 'option contract', 'underlying asset', 'intrinsic value'],
    topic: 'options'
  },
  {
    question_text: 'What does the expiration date of an option mean?',
    answer: 'The expiration date of an option is the last day on which the option can be exercised. After this date passes, the option becomes void and worthless. Options have specified expiration dates, which can be short-term (weeks) or long-term (months or years). American-style options can be exercised any time up to and including the expiration date, whereas European-style options can only be exercised on the expiration date itself. As the expiration date approaches, the option\'s time value (extrinsic value) decays, which can affect its price even if the underlying price remains the same.',
    keywords: ['expiration date', 'option', 'exercise', 'american options', 'european options', 'time value', 'decay'],
    topic: 'options'
  },
  {
    question_text: 'How do you calculate the intrinsic value of an option?',
    answer: 'The intrinsic value of an option is the amount by which the option is in the money. For a call option, intrinsic value is calculated as max(0, (Current Price of Underlying – Strike Price)). For a put option, it is max(0, (Strike Price – Current Price of Underlying)). In other words, it represents the profit that could be made if the option were exercised immediately. For example, if a stock is trading at $60 and a call option\'s strike price is $50, the call\'s intrinsic value is $10. If an option is out of the money (unprofitable to exercise), its intrinsic value is $0.',
    keywords: ['intrinsic value', 'call option', 'put option', 'in the money', 'market price', 'strike price'],
    topic: 'options'
  },
  {
    question_text: 'What is time value (extrinsic value) of an option?',
    answer: 'The time value, or extrinsic value, of an option is the portion of its premium that exceeds the intrinsic value. It reflects the probability that the option will gain intrinsic value before expiration. Time value is influenced by factors such as the time remaining until expiration and the volatility of the underlying asset. It can be calculated as (Option Premium – Intrinsic Value). For example, if a call option costs $15 and its intrinsic value is $10, the time value is $5. As the expiration date approaches, the time value decreases, a phenomenon known as time decay. Options with longer time to expiration or higher volatility will generally have higher time value.',
    keywords: ['time value', 'extrinsic value', 'premium', 'volatility', 'time decay', 'option'],
    topic: 'options'
  },
  {
    question_text: 'When is a call option considered \'in the money\'?',
    answer: 'A call option is considered "in the money" when the underlying asset\'s current market price is higher than the option\'s strike price. This means the option has intrinsic value. For example, if you have a call option with a $50 strike and the underlying stock is trading at $60, the call option is $10 in the money, because you could buy at $50 (the strike price) and sell immediately at $60 (the market price). In-the-money calls are more expensive than out-of-the-money calls because they already have value if exercised. If the market price is below the strike, the call is "out of the money" and has no intrinsic value.',
    keywords: ['in the money', 'call option', 'strike price', 'market price', 'intrinsic value'],
    topic: 'options'
  },
  {
    question_text: 'When is a put option considered \'in the money\'?',
    answer: 'A put option is considered "in the money" when the underlying asset\'s current market price is lower than the option\'s strike price. This gives the put option intrinsic value. For example, if you have a put option with a $50 strike and the stock is trading at $40, the put is $10 in the money, because you could buy at $40 on the market and sell at $50 (the strike price) using the option. In-the-money puts are more valuable than out-of-the-money puts because they provide an immediate benefit if exercised. If the market price is above the strike, the put option is "out of the money" and has no intrinsic value.',
    keywords: ['in the money', 'put option', 'strike price', 'market price', 'intrinsic value'],
    topic: 'options'
  },
  {
    question_text: 'What is a covered call strategy?',
    answer: 'A covered call strategy involves owning the underlying stock and simultaneously selling (writing) a call option on that same stock. The call option writer collects the option premium as income. If the stock price stays below the strike price, the call expires worthless, and the investor keeps the premium plus still owns the stock. If the stock price rises above the strike price, the writer must sell the stock at the strike price, potentially capping the upside. Covered calls are used to generate additional income on a stock position and to slightly hedge against small declines. This strategy provides some downside protection (from the premium collected) but limits the upside gain if the stock shoots above the strike.',
    keywords: ['covered call', 'owning stock', 'writing call option', 'premium', 'income', 'limit upside'],
    topic: 'options'
  },
  {
    question_text: 'What is a protective put strategy?',
    answer: 'A protective put strategy involves owning the underlying stock and buying a put option for the same stock. The put option provides the right to sell the stock at a predetermined strike price, effectively acting as insurance against a price drop. If the stock price falls below the strike, the put option increases in value, offsetting the loss on the stock. If the stock rises, the put may expire worthless, but the investor benefits from the stock\'s gain. The protective put costs the premium of the option, which is the price for this insurance. This strategy is used when an investor wants to hold a stock for the long term but is concerned about a short-term downturn. It guarantees a minimum sale price for the stock, limiting losses.',
    keywords: ['protective put', 'long stock', 'buying put option', 'insurance', 'downside protection', 'premium'],
    topic: 'options'
  },
  {
    question_text: 'What is the premium of an option?',
    answer: 'The premium of an option is the price that the buyer of the option pays to the seller (writer) for the rights that the option grants. It is determined by market supply and demand, and is influenced by the underlying asset\'s price relative to the strike, the time until expiration, volatility, and interest rates. The premium consists of intrinsic value (if any) plus time (extrinsic) value. For example, if a call option is trading at $5, that $5 per share is the premium. Since most options contracts represent 100 shares, the total cost would be $500. The premium is paid upfront and represents the maximum loss for the option buyer if the option expires worthless.',
    keywords: ['option premium', 'price', 'buyer', 'seller', 'intrinsic value', 'time value', 'volatility'],
    topic: 'options'
  },
  {
    question_text: 'What is the difference between an option buyer and writer?',
    answer: 'The buyer (holder) of an option pays the premium to acquire the contract and has the right to exercise it but is not obligated to do so. The buyer\'s risk is limited to the premium paid. The writer (seller) of the option collects the premium and takes on the obligation to fulfill the contract if it is exercised. For a call option, the writer must sell the underlying asset at the strike price when exercised; for a put option, the writer must buy the asset at the strike. Writers have limited profit (the premium) but potentially large risk, especially if they do not own the underlying asset (naked options).',
    keywords: ['option buyer', 'option writer', 'premium', 'obligation', 'profit', 'risk'],
    topic: 'options'
  },
  {
    question_text: 'What do \'exercise\' and \'assignment\' mean in options trading?',
    answer: 'In options trading, to "exercise" an option means that the holder (buyer) chooses to use their right to buy (call) or sell (put) the underlying asset at the strike price. "Assignment" refers to the requirement for the option writer (seller) to fulfill the terms of the contract when the option is exercised. For example, if you exercise a call option, you buy the stock at the strike price; the writer of the call is assigned and must sell you the stock at that price. Not all options are exercised; many are closed by trading or expire worthless. In cash-settled options, exercising leads to a cash payment instead of delivery of the asset.',
    keywords: ['exercise', 'assignment', 'option holder', 'option writer', 'call', 'put', 'fulfill contract'],
    topic: 'options'
  },
  {
    question_text: 'What are the Greeks in option trading (Delta, Theta, etc.)?',
    answer: 'The Greeks are measures of how sensitive an option\'s price is to various factors. The main Greeks include: Delta (the rate of change of the option\'s price relative to a $1 change in the underlying asset\'s price), Theta (time decay, the rate at which the option\'s price decreases as expiration approaches), Gamma (the rate of change of Delta as the underlying price moves), and Vega (sensitivity to changes in implied volatility). For example, a Delta of 0.5 means the option\'s price moves about $0.50 for each $1 move in the underlying. Traders use the Greeks to manage risk and hedge positions, as they show how an option will react to market changes.',
    keywords: ['delta', 'theta', 'gamma', 'vega', 'option price', 'sensitivity', 'volatility'],
    topic: 'options'
  },
  {
    question_text: 'What is a straddle strategy?',
    answer: 'A long straddle is an options strategy where an investor buys a call option and a put option with the same strike price and expiration date on the same underlying asset. This strategy is used when the investor expects a large price move but is unsure of the direction. If the asset\'s price moves significantly up or down, one of the options will become profitable enough to cover the cost of both premiums, resulting in a net gain. However, if the asset\'s price remains close to the strike price, both options may expire worthless, and the investor loses the combined premiums. A straddle profits from high volatility and large price swings.',
    keywords: ['long straddle', 'call option', 'put option', 'same strike', 'expiration', 'volatility', 'options strategy'],
    topic: 'options'
  },
  {
    question_text: 'What is implied volatility in options?',
    answer: 'Implied volatility is the market\'s forecast of the potential movement of the underlying asset\'s price over the life of the option. It is derived from the option\'s market price using pricing models like Black-Scholes. High implied volatility indicates that traders expect larger future price swings, which raises option premiums. Conversely, low implied volatility implies expectations of smaller price moves and cheaper options. Traders monitor implied volatility to gauge market sentiment: a sudden rise in implied volatility often means uncertainty or anticipated news. Implied volatility is a key factor in pricing options and in strategies, as it impacts the premium paid.',
    keywords: ['implied volatility', 'option pricing', 'forecast', 'premium', 'market sentiment', 'volatility'],
    topic: 'options'
  },
  {
    question_text: 'How do American options differ from European options?',
    answer: 'The key difference is that American options can be exercised at any time up to and including the expiration date, whereas European options can only be exercised on the expiration date itself. This means American option holders have more flexibility and can choose the optimal moment to exercise if beneficial (for example, to collect a dividend before a stock goes ex-dividend). European options lack this flexibility but are typically simpler and may have lower premiums for that reason. Other than exercise rights, both types work the same way. In practice, most individual stock options in the U.S. are American-style, while many index options and some overseas options are European-style.',
    keywords: ['american option', 'european option', 'exercise', 'expiration', 'flexibility', 'option style'],
    topic: 'options'
  },
  {
    question_text: 'How do stock dividends affect the value of call and put options?',
    answer: 'Stock dividends can affect option prices because they change the underlying stock\'s price when paid. Typically, when a stock goes ex-dividend, its price drops by the dividend amount. This expected drop reduces the value of call options (since calls benefit from stock price rises) and increases the value of put options (since puts benefit from stock price falls). Option pricing models adjust for expected dividends by reducing the stock price or adjusting the strike price. For example, if you expect a $2 dividend and own a call, the call\'s theoretical value will be slightly lower to account for the upcoming drop. Traders must consider ex-dividend dates when pricing and trading options.',
    keywords: ['dividends', 'call option', 'put option', 'stock price', 'ex-dividend', 'option value'],
    topic: 'options'
  },
  {
    question_text: 'How can options be used for hedging?',
    answer: 'Options can be used to hedge (protect) other investments against adverse price movements. For example, if you own 100 shares of a stock and are concerned it might decline, you could buy a put option on that stock. The put gives you the right to sell at a fixed strike price, so if the stock falls, the put\'s value increases and offsets some of the loss. This is like buying insurance for your stock. Alternatively, if you want to protect gains on a stock you\'ve sold short, you could buy a call. Options allow investors to set risk limits: the cost of the hedge is limited to the premium paid, but it can significantly reduce downside risk.',
    keywords: ['hedging', 'options', 'risk management', 'protect', 'put option', 'call option', 'stock'],
    topic: 'options'
  },
  {
    question_text: 'What is a futures contract?',
    answer: 'A futures contract is a standardized agreement traded on an exchange to buy or sell a specified quantity of an underlying asset at a predetermined price on a future date. The underlying asset can be a commodity (like oil, wheat, or gold) or a financial instrument (like a stock index, currency, or interest rate). Futures contracts have fixed terms defined by the exchange, including contract size and expiration date. Traders can use futures to speculate on price movements or to hedge risk. For example, a farmer might sell a wheat futures contract to lock in a future price for their crop, protecting against a price drop. Because they are standardized and traded on exchanges, futures have strong liquidity and are cleared by a clearinghouse.',
    keywords: ['futures contract', 'exchange-traded', 'underlying asset', 'commodity', 'financial instrument', 'predetermined price', 'expiration date'],
    topic: 'futures'
  },
  {
    question_text: 'What does it mean to go long a futures contract?',
    answer: 'Going long in a futures contract means agreeing to buy the underlying asset at the contract\'s set price on the future expiration date. It is a bullish position, which profits if the price of the underlying asset rises above the contract price. For example, if you go long a crude oil futures contract at $60 per barrel and later the market price is $70, you stand to gain $10 per barrel (since you can buy at $60 according to the contract and effectively sell at $70). Traders go long futures if they expect prices to increase, and it can be used by producers or consumers to secure a buying price in advance.',
    keywords: ['go long', 'futures contract', 'buy', 'expiration date', 'bullish', 'underlying price'],
    topic: 'futures'
  },
  {
    question_text: 'What does it mean to go short a futures contract?',
    answer: 'Going short in a futures contract means agreeing to sell the underlying asset at the contract\'s set price on the future expiration date. It is a bearish position that profits if the price of the underlying asset falls below the contract price. For example, if you short a gold futures contract at $1,800 per ounce and later the market price drops to $1,700, you profit $100 per ounce (because you will effectively sell at $1,800 as per the contract while buying at $1,700 in the market). Producers or holders of an asset often go short futures to lock in a selling price in advance and hedge against price drops.',
    keywords: ['go short', 'futures contract', 'sell', 'expiration date', 'bearish', 'hedge'],
    topic: 'futures'
  }
]

async function seedMoreAdvancedQuestions() {
  try {
    console.log('Starting to insert additional advanced questions...')
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

seedMoreAdvancedQuestions() 