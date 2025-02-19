import { Injectable, signal } from '@angular/core';

import { InvestmentInput } from '../interfaces/investment-input';
import { InvestmentResult } from '../interfaces/investment-result';

@Injectable({
  providedIn: 'root',
})
export class InvestService {
  private annualData = signal<InvestmentResult[]>([]);
  private results: InvestmentResult[] = [];

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.results.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.annualData.set(this.results);
    this.results = [];
  }

  getAnnualData() {
    return this.annualData;
  }

  resetInitialState() {
    this.annualData.set([]);
  }
}
