import { Component, inject } from '@angular/core';
import { InvestService } from '../shared/services/invest.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
})
export class InvestmentResultsComponent {
  private investService = inject(InvestService);

  resultsData = this.investService.getAnnualData();
}
