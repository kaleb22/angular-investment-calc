import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestService } from '../shared/services/invest.service';
import { InvestmentInput } from '../shared/interfaces/investment-input';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  private investService = inject(InvestService);

  initialValue = signal('0');
  annualValue = signal('0');
  expectReturn = signal('6');
  duration = signal('10');

  onSubmit() {
    const investData: InvestmentInput = {
      initialInvestment: +this.initialValue(),
      annualInvestment: +this.annualValue(),
      expectedReturn: +this.expectReturn(),
      duration: +this.duration(),
    };

    this.investService.calculateInvestmentResults(investData);
  }
}
