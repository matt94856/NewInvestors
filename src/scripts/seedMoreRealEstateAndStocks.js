import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jzkwutdtoqjmurpqbubn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a3d1dGR0b3FqbXVycHFidWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjg3MjcsImV4cCI6MjA2MTYwNDcyN30.q2Gd2ClawQxGxIoSba_M2FU4aLFtK2cmJqBn8MNuzA4'
const supabase = createClient(supabaseUrl, supabaseKey)

const moreQuestions = [
  {
    question_text: 'What is equity in real estate?',
    answer: 'Equity in real estate is the portion of a property\'s value that the owner truly owns outright. It is calculated as the property\'s current market value minus any outstanding loans or mortgages on it. For example, if your home is worth $300,000 and you owe $200,000 on your mortgage, you have $100,000 in equity. Equity increases when you pay down the mortgage or when the property value rises (appreciation). Homeowners can often borrow against their equity with products like home equity loans or lines of credit. Equity represents your ownership stake and can be an important measure of a homeowner\'s net worth in real estate.',
    keywords: ['equity', 'market value', 'mortgage balance', 'property value', 'homeownership', 'loan'],
    topic: 'real estate'
  },
  {
    question_text: 'What is the capitalization rate (cap rate) and how is it calculated?',
    answer: 'The capitalization rate, or cap rate, is a metric used to estimate the potential return on a real estate investment property. It is calculated by dividing the property\'s annual net operating income (NOI) by its current market value (or purchase price). In formula form: Cap Rate = (NOI / Property Value) × 100%. For example, if a property generates $10,000 in net operating income per year and is valued at $200,000, the cap rate is 5%. A higher cap rate generally indicates a higher potential return (and possibly higher risk), while a lower cap rate suggests a more stable, lower-yield property. Investors use cap rate to compare the relative value of similar properties.',
    keywords: ['cap rate', 'capitalization rate', 'net operating income', 'noi', 'property value', 'return'],
    topic: 'real estate'
  },
  {
    question_text: 'What is net operating income (NOI) in real estate and how is it used?',
    answer: 'Net operating income (NOI) is a measure of a property\'s profitability before accounting for financing costs (like mortgage payments) and taxes. It is calculated by taking all of a property\'s income (mainly rental income) and subtracting its operating expenses (such as maintenance, insurance, and management fees). In formula form: NOI = Gross Rental Income - Operating Expenses. NOI is used by real estate investors to evaluate a property\'s ability to generate income. It is also a key component in calculating the cap rate. A higher NOI means the property is generating more income relative to its costs, making it potentially more valuable.',
    keywords: ['net operating income', 'noi', 'gross income', 'operating expenses', 'rent', 'property', 'profitability'],
    topic: 'real estate'
  },
  {
    question_text: 'How is leverage used in real estate investing?',
    answer: 'Leverage in real estate refers to using borrowed money (such as a mortgage) to finance the purchase of a property. By putting down only part of the purchase price and borrowing the rest, investors can control a larger asset with less of their own cash. Leverage can magnify returns: if the property value rises, the return on the investor\'s initial cash is higher. For example, buying a $200,000 property with a $40,000 down payment and an $160,000 mortgage means the investor controls $200,000 worth of real estate with only $40,000. However, leverage also increases risk: if property values fall or rental income is insufficient to cover debt, the investor\'s losses are larger relative to their investment. Therefore, investors must carefully manage leverage to balance potential gains and risks.',
    keywords: ['leverage', 'mortgage', 'borrowed funds', 'down payment', 'investment', 'risk'],
    topic: 'real estate'
  },
  {
    question_text: 'What is a Real Estate Investment Trust (REIT)?',
    answer: 'A Real Estate Investment Trust (REIT) is a company that owns, operates, or finances income-producing real estate and allows investors to buy shares of its portfolio on a stock exchange. By law, REITs typically must distribute at least 90% of their taxable income to shareholders as dividends. There are equity REITs (which own properties and collect rents) and mortgage REITs (which invest in property mortgages). Investing in a REIT provides a way for individual investors to earn a share of income produced through commercial real estate ownership without actually buying property. REIT shares trade like stocks, providing liquidity and diversification. They can be a way to invest in real estate through the stock market, often providing regular dividend income.',
    keywords: ['reit', 'real estate investment trust', 'dividends', 'properties', 'portfolio', 'shares'],
    topic: 'real estate'
  },
  {
    question_text: 'What is property appreciation?',
    answer: 'Property appreciation is the increase in the value of a real estate property over time. It can occur due to factors like improvements made to the property, growing demand in the market, and general economic growth. For example, if you buy a house for $200,000 and sell it a few years later for $240,000, it has appreciated by $40,000. Appreciation is a key reason why many people invest in real estate: it allows owners to build equity. Long-term appreciation can provide significant returns when the property is sold, although property values can also decline during market downturns.',
    keywords: ['appreciation', 'property value', 'increase', 'market demand', 'investment'],
    topic: 'real estate'
  },
  {
    question_text: 'What is depreciation in real estate?',
    answer: 'Depreciation in real estate generally refers to the decline in a property\'s value over time due to wear and tear, aging, or obsolescence. For physical structures, depreciation recognizes that buildings and improvements can lose value as they get older. In tax terms, real estate investors can use depreciation as an expense to reduce taxable income, even if the property actually gains market value. Land itself does not depreciate, but the value of the building can. It\'s important to note that while depreciation provides tax benefits, market value is typically influenced more by factors like location, demand, and economic conditions, which can offset physical depreciation.',
    keywords: ['depreciation', 'wear and tear', 'property value', 'tax deduction', 'accounting', 'expense'],
    topic: 'real estate'
  },
  {
    question_text: 'What is amortization in the context of a mortgage?',
    answer: 'Amortization is the process of paying off a loan gradually over a fixed period through regular payments. In a mortgage, an amortization schedule shows how each monthly payment is split between interest and principal. Early in the loan term, most of each payment goes toward interest, while later payments contribute more to the principal balance. Over time, the borrower builds equity as the principal is paid down. By the end of the loan term, the mortgage is fully paid off. Amortization ensures that borrowers repay a mortgage fully by the end of its term and helps them understand how much of each payment is reducing the debt versus covering interest.',
    keywords: ['amortization', 'loan', 'payments', 'interest', 'principal', 'mortgage', 'schedule'],
    topic: 'real estate'
  },
  {
    question_text: 'What is a 1031 exchange in real estate investing?',
    answer: 'A 1031 exchange is a provision in U.S. tax law that allows real estate investors to defer paying capital gains tax when they sell a property, as long as they reinvest the proceeds into a similar ("like-kind") property of equal or greater value. To qualify, the investor must identify potential replacement properties within 45 days of the sale and complete the purchase of the new property within 180 days. By using a 1031 exchange, an investor can roll over the gain from the sale into the new property, effectively deferring taxes. This allows investors to grow their real estate portfolio more quickly, since more capital is preserved in the exchange rather than being paid as tax.',
    keywords: ['1031 exchange', 'capital gains', 'like-kind', 'tax deferral', 'real estate', 'replacement property'],
    topic: 'real estate'
  },
  {
    question_text: 'What is cash-on-cash return in real estate investing?',
    answer: 'Cash-on-cash return is a metric that measures the annual cash income earned on an investment relative to the amount of cash invested. It is calculated by dividing the property\'s annual before-tax cash flow by the total cash invested (down payment and closing costs). For example, if you invest $50,000 cash into a property and it generates $5,000 of net cash flow in one year, the cash-on-cash return is 10% ($5,000 divided by $50,000). This metric helps investors compare the profitability of different investments in terms of actual cash, rather than just property value.',
    keywords: ['cash-on-cash return', 'cash flow', 'investment', 'annual income', 'percentage'],
    topic: 'real estate'
  },
  {
    question_text: 'What is rental yield in real estate?',
    answer: 'Rental yield is a measure of a rental property\'s income relative to its value, expressed as a percentage. It can be calculated by dividing the annual rental income by the property\'s market value and multiplying by 100. For example, if a property is worth $200,000 and generates $10,000 per year in rent, the gross rental yield is 5% ($10,000 / $200,000 × 100). Investors often consider net rental yield as well, which subtracts expenses like taxes and maintenance before the division. Rental yield helps investors compare potential returns on different properties based on rent income.',
    keywords: ['rental yield', 'rental income', 'property value', 'percentage', 'gross yield', 'net yield'],
    topic: 'real estate'
  },
  {
    question_text: 'What is the loan-to-value (LTV) ratio and why does it matter?',
    answer: 'The loan-to-value (LTV) ratio is the percentage of a property\'s value that is financed with a loan. It is calculated by dividing the loan amount by the property\'s appraised value. For example, if a home is valued at $100,000 and the mortgage loan is $80,000, the LTV is 80%. Lenders use LTV to assess risk: a lower LTV (more down payment and equity) means less risk for the lender and often qualifies the borrower for better interest rates. If the LTV is above a certain threshold (often 80-85%), lenders may require mortgage insurance or charge higher interest, because it indicates less borrower equity and higher risk of default.',
    keywords: ['loan-to-value', 'ltv', 'property value', 'loan amount', 'equity', 'risk'],
    topic: 'real estate'
  },
  {
    question_text: 'How does a fixed-rate mortgage differ from an adjustable-rate mortgage?',
    answer: 'In a fixed-rate mortgage, the interest rate remains the same for the entire loan term, which means the monthly principal and interest payment also remains constant. This provides predictability and stable payments for the borrower. In contrast, an adjustable-rate mortgage (ARM) has an interest rate that can change periodically after an initial fixed period (such as 5 years) based on market rates. This means the payments can go up or down over time. ARMs often start with a lower initial rate than fixed-rate mortgages, but they carry uncertainty, as future payments depend on market interest rates. Borrowers choose fixed-rate mortgages for long-term stability, whereas ARMs might be chosen if they plan to sell or refinance before the rate changes.',
    keywords: ['fixed-rate mortgage', 'adjustable-rate mortgage', 'interest rate', 'payments', 'loan term'],
    topic: 'real estate'
  },
  {
    question_text: 'What is the debt service coverage ratio (DSCR)?',
    answer: 'The debt service coverage ratio (DSCR) is a measure of a property\'s ability to cover its debt obligations from its income. It is calculated by dividing the net operating income (NOI) by the total debt service (annual principal and interest payments). For example, if a property generates $30,000 in NOI and requires $25,000 in annual debt payments, the DSCR is 1.2 ($30,000 ÷ $25,000). A DSCR above 1.0 means the property generates more income than needed to cover debt, which is what lenders look for. Typically, lenders require a DSCR of 1.2 or higher to ensure a margin of safety. If the DSCR is below 1, it means the income is insufficient to cover debt, indicating higher risk of default.',
    keywords: ['dscr', 'debt service coverage ratio', 'net operating income', 'debt service', 'lenders'],
    topic: 'real estate'
  },
  {
    question_text: 'What is foreclosure in real estate?',
    answer: 'Foreclosure is the legal process by which a lender takes possession of a property when the borrower fails to make mortgage payments as agreed. If a homeowner defaults on their loan, the lender can auction the property to recover the outstanding balance. Foreclosure laws and procedures vary by jurisdiction, but generally the process includes notifications, a public auction, and finally the lender (or a new buyer) obtaining the property. Foreclosure severely impacts the borrower\'s credit history and usually results in the lender selling the property, often at a discount, to recoup losses.',
    keywords: ['foreclosure', 'lender', 'borrower', 'default', 'auction', 'mortgage payments'],
    topic: 'real estate'
  },
  {
    question_text: 'What are the phases of a real estate market cycle?',
    answer: 'The real estate market cycle typically goes through four phases: recovery, expansion (boom), hyper-supply, and recession (downturn). In recovery, demand begins to rise slowly after a previous downturn, with low supply and slowly increasing prices. In expansion, demand grows strongly, prices rise, and new construction picks up. In hyper-supply, building outpaces demand, leading to higher vacancy rates and slowing or flat prices. Finally, in recession, demand falls, prices decline, and new construction slows or stops. These phases repeat over time, influenced by economic factors, interest rates, and market sentiment. Understanding the cycle helps investors decide when to buy or sell property.',
    keywords: ['market cycle', 'recovery', 'expansion', 'hyper-supply', 'recession', 'vacancy'],
    topic: 'real estate'
  },
  {
    question_text: 'What does it mean for a rental property to have positive cash flow?',
    answer: 'Positive cash flow in real estate means that a rental property generates more income than the total expenses associated with it. After paying all costs (such as mortgage payments, property taxes, insurance, and maintenance), there is money left over. For example, if a property brings in $2,000 per month in rent and all expenses total $1,800, then the property has $200 of positive cash flow each month. Positive cash flow is desirable because it means the investment not only covers its costs but also provides extra income to the owner. It indicates the property is self-sustaining and profitable.',
    keywords: ['positive cash flow', 'rental income', 'expenses', 'net income', 'profits', 'rental property'],
    topic: 'real estate'
  },
  {
    question_text: 'What is a stock in finance?',
    answer: 'A stock (or share) represents a unit of ownership in a corporation. When you own stock in a company, you own a portion of that company\'s assets and earnings. Stocks are traded on stock exchanges, and their prices fluctuate based on the company\'s performance and investor demand. Shareholders may earn returns through price appreciation (if the stock\'s price rises) and dividends (if the company distributes profits). Stocks are a common way for individuals to invest in companies and potentially earn money as the company grows.',
    keywords: ['stock', 'share', 'ownership', 'corporation', 'assets', 'earnings', 'dividends', 'capital gain'],
    topic: 'stocks'
  },
  {
    question_text: 'What is a stock exchange?',
    answer: 'A stock exchange is a marketplace where stocks and other securities (like bonds or ETFs) are bought and sold. Well-known stock exchanges include the New York Stock Exchange (NYSE) and NASDAQ. Exchanges provide a regulated environment for matching buyers and sellers under agreed-upon rules. Companies list their shares on an exchange through an initial public offering (IPO). The exchange ensures transparent pricing by matching buy and sell orders, and it provides rules and oversight to prevent fraud. Trading on an exchange usually happens during specific hours, and prices are publicly reported.',
    keywords: ['stock exchange', 'nasdaq', 'nyse', 'securities', 'trading', 'regulated', 'market'],
    topic: 'stocks'
  }
]

async function seedMoreRealEstateAndStocks() {
  try {
    console.log('Starting to insert additional real estate and stock questions...')
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

seedMoreRealEstateAndStocks() 