import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jzkwutdtoqjmurpqbubn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a3d1dGR0b3FqbXVycHFidWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjg3MjcsImV4cCI6MjA2MTYwNDcyN30.q2Gd2ClawQxGxIoSba_M2FU4aLFtK2cmJqBn8MNuzA4'
const supabase = createClient(supabaseUrl, supabaseKey)

const moreQuestions = [
  {
    question_text: 'What is market capitalization (market cap)?',
    answer: 'Market capitalization, or market cap, is the total value of a company\'s outstanding shares. It is calculated by multiplying the current share price by the total number of shares outstanding. For example, if a company has 10 million shares outstanding and each share trades at $20, the market cap is $200 million. Market cap is often used to gauge the size of a company: large-cap companies are typically $10 billion and above, mid-cap are $2-10 billion, and small-cap are below $2 billion. Investors use market cap to compare company sizes and to build diversified portfolios across different market caps.',
    keywords: ['market capitalization', 'market cap', 'shares outstanding', 'stock price', 'company size'],
    topic: 'stocks'
  },
  {
    question_text: 'What is the price-to-earnings (P/E) ratio and how is it used?',
    answer: 'The price-to-earnings (P/E) ratio is a valuation metric for stocks that compares a company\'s share price to its earnings per share (EPS). It is calculated by dividing the current market price per share by the earnings per share. For example, if a stock trades at $30 and the EPS is $2, the P/E ratio is 15. A higher P/E means investors are paying more for each dollar of earnings, which can indicate that the stock is expected to grow or is overvalued. A lower P/E may suggest the stock is undervalued or has lower growth expectations. Investors use the P/E ratio to compare the relative valuation of companies within the same industry or market.',
    keywords: ['p/e ratio', 'price to earnings', 'earnings per share', 'valuation', 'stock analysis'],
    topic: 'stocks'
  },
  {
    question_text: 'What does beta measure in relation to a stock?',
    answer: 'Beta is a measure of a stock\'s volatility relative to the overall market. The market (often represented by a broad index like the S&P 500) has a beta of 1.0. A stock with a beta greater than 1.0 is more volatile than the market, meaning it tends to amplify market movements (rising or falling more than the market). A stock with a beta less than 1.0 is less volatile. For example, if a stock has a beta of 1.5 and the market goes up by 10%, the stock is expected to rise by about 15%. Investors use beta to assess risk: higher-beta stocks have higher potential returns but also higher risk, while lower-beta stocks are more stable.',
    keywords: ['beta', 'volatility', 'market risk', 'systematic risk', 'stock', 'market'],
    topic: 'stocks'
  },
  {
    question_text: 'What is dividend yield and how is it calculated?',
    answer: 'Dividend yield is a financial ratio that shows how much a company pays out in dividends each year relative to its stock price. It is calculated by dividing the annual dividend per share by the current share price, expressed as a percentage. For example, if a company pays $2 in annual dividends per share and its stock price is $50, the dividend yield is 4% ($2 ÷ $50). Dividend yield indicates the income return on investment from dividends. Investors use it to compare the cash flow potential of different stocks: a higher yield means more dividend income per dollar invested. However, a very high yield might be unsustainable if the company is struggling.',
    keywords: ['dividend yield', 'dividends', 'share price', 'ratio', 'investment income'],
    topic: 'stocks'
  },
  {
    question_text: 'What is an initial public offering (IPO)?',
    answer: 'An initial public offering (IPO) is the process by which a private company first sells its shares to the public and becomes a publicly traded company. Through an IPO, the company raises capital by issuing new shares on a stock exchange. The company works with investment banks (underwriters) to determine the share price and to market the offering. After the IPO, the company\'s shares are freely traded on the public market. Investors may buy IPO shares in hopes that the stock price will rise. IPOs allow companies to access large amounts of funding, but they also bring regulatory requirements and public scrutiny.',
    keywords: ['initial public offering', 'ipo', 'private company', 'public company', 'shares', 'underwriting'],
    topic: 'stocks'
  },
  {
    question_text: 'What happens during a stock split?',
    answer: 'In a stock split, a company increases the number of its shares by dividing each existing share into multiple shares, while proportionally reducing the price per share, so that the overall market capitalization remains unchanged. For example, in a 2-for-1 split, each existing share is split into 2 shares, and the price is halved. If you owned 100 shares at $100 each, after a 2-for-1 split you would own 200 shares at $50 each. Stock splits make shares more affordable for smaller investors and can increase liquidity. They do not change the fundamental value of the company or the total value of an investor\'s holdings, but they often make the stock more attractive psychologically or operationally.',
    keywords: ['stock split', 'shares', 'market capitalization', '2-for-1', 'share price', 'liquidity'],
    topic: 'stocks'
  },
  {
    question_text: 'What is short selling in the stock market?',
    answer: 'Short selling is a trading strategy where an investor borrows shares of a stock and immediately sells them on the open market, hoping to buy them back later at a lower price. The goal is to profit from a decline in the stock\'s price. For example, if you short sell 100 shares at $50 and later repurchase them at $30, you make $20 per share. However, short selling is risky because if the stock price rises instead, you must buy back at a higher price, resulting in a loss. Losses can be unlimited if the price keeps rising. Short sellers typically must also pay any dividends on the borrowed shares while they are short.',
    keywords: ['short selling', 'borrowed shares', 'sell', 'buy back', 'profit', 'loss'],
    topic: 'stocks'
  },
  {
    question_text: 'What does trading on margin mean?',
    answer: 'Trading on margin means buying stocks using borrowed funds from a brokerage. An investor opens a margin account and uses existing securities as collateral for the loan. For example, with 50% margin, an investor can buy $10,000 of stock using $5,000 of their own cash and $5,000 borrowed from the broker. This allows them to increase their buying power. While margin can amplify gains (since you control more shares), it also amplifies losses. If the stock value falls, the investor may face a margin call, requiring them to deposit more cash or liquidate positions. Margin trading involves higher risk due to the leverage involved.',
    keywords: ['margin trading', 'borrowed funds', 'broker', 'collateral', 'leverage', 'margin call'],
    topic: 'stocks'
  },
  {
    question_text: 'What is diversification and why is it important in investing?',
    answer: 'Diversification is an investment strategy where an investor spreads investments across a variety of assets to reduce risk. The idea is that different assets (like stocks in different industries, bonds, or real estate) won\'t all move in the same direction at once. This way, if one investment performs poorly, others may perform better and offset the losses. For example, holding technology, healthcare, and consumer stock funds can protect against a downturn in any single sector. Diversification helps smooth out returns and can protect a portfolio from significant losses. It is often summarized as "not putting all your eggs in one basket."',
    keywords: ['diversification', 'portfolio', 'risk', 'stocks', 'sectors', 'asset classes'],
    topic: 'stocks'
  },
  {
    question_text: 'What is a stock market index (e.g., the S&P 500)?',
    answer: 'A stock market index is a statistical measure that tracks the performance of a specific group of stocks, representing a segment of the market. For example, the S&P 500 index includes 500 large-cap U.S. companies and is often used as a benchmark for the U.S. stock market. Indices are usually weighted by market capitalization or price. Investors use indices to gauge overall market trends and as benchmarks to compare their own portfolios. You can\'t invest directly in an index, but index funds and ETFs (exchange-traded funds) allow investors to track them. Indices provide a way to measure the health of the market or specific sectors over time.',
    keywords: ['stock market index', 's&p 500', 'performance', 'benchmark', 'etf', 'market'],
    topic: 'stocks'
  },
  {
    question_text: 'What is the difference between a market order and a limit order?',
    answer: 'A market order is an instruction to buy or sell a stock immediately at the best available current price. It guarantees execution, but the final price may vary slightly due to market fluctuations. A limit order, on the other hand, specifies a maximum price you are willing to pay when buying, or a minimum price you will accept when selling. The trade only executes if the market reaches that specified price. For example, a limit buy order at $30 will only execute if the stock\'s price drops to $30 or below. Market orders prioritize speed, while limit orders prioritize price control.',
    keywords: ['market order', 'limit order', 'buy', 'sell', 'price', 'execution', 'trading'],
    topic: 'stocks'
  },
  {
    question_text: 'How does fundamental analysis differ from technical analysis?',
    answer: 'Fundamental analysis evaluates a company\'s intrinsic value by examining financial statements, business models, economic factors, and industry conditions. Fundamental analysts look at metrics like revenues, earnings, cash flow, and management quality to decide if a stock is undervalued or overvalued. Technical analysis, in contrast, studies patterns in stock price charts and trading volume to predict future price movements. Technical analysts use indicators and trends (such as moving averages or RSI) without focusing on the company\'s fundamentals. In summary, fundamental analysis looks at the business itself to determine value, whereas technical analysis looks at the stock\'s price history and market behavior to make trading decisions.',
    keywords: ['fundamental analysis', 'technical analysis', 'financial statements', 'price charts', 'valuation', 'indicators'],
    topic: 'stocks'
  },
  {
    question_text: 'What is a stock buyback (share repurchase)?',
    answer: 'A stock buyback, or share repurchase, occurs when a company buys its own shares from the marketplace. This reduces the number of outstanding shares, which typically increases earnings per share (EPS) and can boost the stock price. Companies conduct buybacks if they believe their stock is undervalued or if they have excess cash. Buybacks return value to shareholders and can be more tax-efficient than dividends. However, if a company overpays for its shares or could have invested cash more profitably elsewhere, a buyback might not benefit shareholders as much as intended.',
    keywords: ['stock buyback', 'share repurchase', 'outstanding shares', 'earnings per share', 'stock price'],
    topic: 'stocks'
  },
  {
    question_text: 'What is the Efficient Market Hypothesis (EMH)?',
    answer: 'The Efficient Market Hypothesis (EMH) is a theory that suggests that stock prices fully reflect all available information. Under EMH, it is impossible to consistently achieve returns that beat the overall market without taking additional risk, because as soon as new information is available, it is quickly incorporated into stock prices. There are three forms of EMH: weak (prices reflect all past trading data), semi-strong (prices reflect all publicly available information), and strong (prices reflect all information, public and private). If markets are efficient, then neither stock picking based on information nor market timing strategies will consistently outperform market indices.',
    keywords: ['efficient market hypothesis', 'emh', 'stock prices', 'information', 'market efficiency', 'returns'],
    topic: 'stocks'
  },
  {
    question_text: 'What is insider trading and why is it illegal?',
    answer: 'Insider trading is the buying or selling of a company\'s stock by someone who has access to material, non-public information about the company. For example, a corporate executive who trades shares based on undisclosed financial results would be committing insider trading. It is illegal because it gives an unfair advantage to people with privileged information, harming other investors and undermining confidence in the markets. Regulators like the U.S. SEC monitor trading activity to catch insider trading. If caught, individuals can face severe penalties, including fines and imprisonment, because it violates trust and securities laws designed to keep the market fair.',
    keywords: ['insider trading', 'non-public information', 'sec', 'market fairness', 'illegal', 'privileged information'],
    topic: 'stocks'
  },
  {
    question_text: 'What is dividend reinvestment (DRIP)?',
    answer: 'Dividend reinvestment is when an investor takes the dividends they receive from a stock and uses them to purchase more shares of the same stock, rather than taking the dividends as cash. Many brokers and companies offer Dividend Reinvestment Plans (DRIPs) that automatically reinvest dividends, often without trading fees. This strategy allows investors to compound their returns: as dividends buy more shares, those new shares can earn their own dividends. Over time, dividend reinvestment can significantly increase the total return of an investment due to compounding.',
    keywords: ['dividend reinvestment', 'drip', 'dividends', 'reinvest', 'shares', 'compound'],
    topic: 'stocks'
  },
  {
    question_text: 'What are blue-chip stocks?',
    answer: 'Blue-chip stocks are shares of large, well-established companies that are financially sound and have a history of reliable performance. These companies often have strong market positions, stable earnings, and a track record of paying dividends. Examples include companies listed in the Dow Jones Industrial Average or the S&P 500 that are household names. Blue-chip stocks are considered relatively safe investments compared to smaller, more volatile companies (though they still carry market risk). Investors often include blue-chip stocks in their portfolios for stability and dividend income. The term "blue-chip" comes from poker, where blue chips are traditionally the highest value.',
    keywords: ['blue-chip', 'large-cap', 'established', 'dividends', 'stability', 'dow jones'],
    topic: 'stocks'
  }
]

async function seedMoreStockQuestions() {
  try {
    console.log('Starting to insert additional stock questions...')
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

seedMoreStockQuestions() 