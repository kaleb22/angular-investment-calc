import { Injectable } from '@angular/core';

import { Investment } from '../interfaces/investment';

@Injectable({
  providedIn: 'root',
})
export class InvestService {
  private annualData: any[] = [];

  calculateInvestmentResults(data: Investment) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  }

  getAnnualData() {
    return this.annualData;
  }
}
