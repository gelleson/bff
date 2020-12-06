import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TransactionObject } from '@bff/interface';
import { TransactionService } from '@bff/frontend/core';

@Component({
  selector: 'bff-balance-short',
  templateUrl: './balance-short.component.html',
  styleUrls: ['./balance-short.component.css']
})
export class BalanceShortComponent implements OnInit, OnChanges {

  @Input()
  transactions: TransactionObject[] = [];

  totalSpendMoney = 0;

  constructor(private transactionService: TransactionService) {

  }

  async ngOnInit(): Promise<void> {

    this.totalSpendMoney = await this.transactionService
      .totalSpendMoney(new Date());
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    this.totalSpendMoney = await this.transactionService
      .totalSpendMoney(new Date());
  }



  filterBy(operation: string) {
    return this.transactions
      .filter(trn => trn.operation === operation)
  }

  avrg() {
    const avg = (this.transactions.reduce(((prev, curr) => prev + curr.amount), 0) / this.transactions.length);
    return !isNaN(avg) ? avg.toFixed(2) : 0;
  }
}
