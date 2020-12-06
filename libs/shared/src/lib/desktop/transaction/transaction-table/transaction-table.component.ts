import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TransactionObject } from '@bff/interface';

@Component({
  selector: 'bff-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit, OnChanges {

  @Input()
  transactions: TransactionObject[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.transactions, 1413);
  }

  getTotalAsString() {
    return `${this.transactions.length}`;
  }
}
