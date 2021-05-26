const TERM_MODULE = 30;
function PMT(interestRate, numberOfPeriods, loanAmount) {
  const interestFactor = Math.pow(1 + interestRate, numberOfPeriods);
  const pmt = loanAmount * ((interestRate * interestFactor) / (interestFactor - 1));
  return pmt;
}
export function calculateValues(creditAmount, term, config) {
  const single = term <= TERM_MODULE;
  const calcTerm = single ? 1 : Math.floor(term / TERM_MODULE);
  const creditInterest = (creditAmount * (config.MonthlyEffectiveRate / 100));
  const creditPMT = single ? creditInterest + creditAmount : PMT(config.MonthlyEffectiveRate / 100, calcTerm, creditAmount);
  const creditFirstCapital = single ? creditAmount : creditPMT - creditInterest;
  const creditGuarantee = (creditAmount * (config.GuarateeRate / 100)) / calcTerm;
  const creditLifeInsurance = single ? ((creditAmount / 1000000) * config.LifeInsuranceRate) / (30 / term) : ((creditAmount / 1000000) * config.LifeInsuranceRate) / calcTerm;
  const creditPlatform = single ? config.PlattformUseFee * term : config.PlattformUseFee;
  const creditAdmin = config.AdministrationFee / calcTerm;
  const creditTaxes = ((creditPlatform + config.AdministrationFee) * (config.TaxesRate / 100)) / calcTerm;
  const creditTotal = creditFirstCapital + creditGuarantee + creditLifeInsurance + creditInterest + creditPlatform + creditAdmin + creditTaxes;
  return {
    creditInterest,
    creditPMT,
    creditFirstCapital,
    creditGuarantee,
    creditLifeInsurance,
    creditPlatform,
    creditAdmin,
    creditTaxes,
    creditTotal,
    creditAmount
  };
  // }
}
export function getBoundaries(creditConfig) {
  const minAmount = Math.min(...creditConfig.Rates.map(rate => rate.MinAmount));
  const maxAmount = Math.max(...creditConfig.Rates.map(rate => rate.MaxAmount));
  const minTerm = Math.min(...creditConfig.Rates.map(rate => rate.MinTerm));
  const maxTerm = Math.max(...creditConfig.Rates.map(rate => rate.Maxterm));
  return { minAmount, maxAmount, minTerm, maxTerm };
}
