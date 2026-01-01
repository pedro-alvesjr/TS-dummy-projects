type InvestmentData = {
    initialAmount: number,
    annualContribution: number,
    expectedReturn: number,
    duration: number,
};

type InvestmentResult = {
    year: string,
    totalAmount: number,
    totalContributions: number,
    totalInterestEarned: number,
};

type CalculationResults = InvestmentResult[] | string

function calculateInvestments (data: InvestmentData): CalculationResults {
    const { initialAmount, annualContribution, expectedReturn, duration } = data

    if (initialAmount < 0) {
        return 'Invalid initial amount. Must be at least 0.'
    };

    if (duration < 1) {
        return 'Invalid amount of years informed. Must be at least 1.'
    };

    if (expectedReturn < 0) {
        return 'Invalid expected return informed. Must be at least 0'
    };

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = []

    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        })
    }

    return annualResults;
};

function printResults (results: CalculationResults) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }

    for (const yearEndResults of results) {
        console.log(yearEndResults.year);
        console.log(`Total amount: ${yearEndResults.totalAmount.toFixed(0)}`);
        console.log(`Total interest earned: ${yearEndResults.totalInterestEarned.toFixed(0)}`);
        console.log(`Total contribuitions: ${yearEndResults.totalContributions.toFixed(0)}`);
        console.log('================================');
    }
};
