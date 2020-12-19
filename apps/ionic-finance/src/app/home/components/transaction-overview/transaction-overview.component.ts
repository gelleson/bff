import { Component, OnInit } from '@angular/core';
import { ITransaction } from '@bff/api/modules';
import { TransactionService } from '@bff/client/core';

@Component({
  selector: 'bff-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.css']
})
export class TransactionOverviewComponent implements OnInit {

  transactions: Array<ITransaction> = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService
      .getTransactions(new Date())
      .subscribe(transactions => this.transactions = transactions.data);
  }

}
