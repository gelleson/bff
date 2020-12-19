import { Component, OnInit } from '@angular/core';
import { ITransaction } from '@bff/api/modules';

@Component({
  selector: 'bff-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.css']
})
export class TransactionOverviewComponent implements OnInit {

  transactions: Array<ITransaction> = [];

  constructor() { }

  ngOnInit(): void {
    for (let i=0; i <100; i++) {
      const transaction = {
        id: i,
        amount: i * 1000,
        operation: i % 2 === 0 ? 'WITHDRAW' : 'INCOME',
        transactionTime: new Date()
      } as ITransaction;
      transaction.credit = transaction.operation === 'WITHDRAW' ? {id: 1, name: 'Credit Number one', currency: 'KZT'}:undefined;
      transaction.debit = transaction.operation === 'INCOME' ? {id: 1, name: 'income Number one', currency: 'USD'}:undefined;

      this.transactions.push(transaction)
    }

  }

}
