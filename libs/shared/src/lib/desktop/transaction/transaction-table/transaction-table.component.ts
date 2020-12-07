import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TransactionObject } from '@bff/interface';
import { EventService, TransactionService } from '@bff/frontend/core';

@Component({
  selector: 'bff-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit, OnChanges {

  @Input()
  transactions: TransactionObject[] = [];

  constructor(private transactionService: TransactionService, private eventService: EventService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.transactions, 1413);
  }

  getTotalAsString() {
    return `${this.transactions.length}`;
  }

  delete(transaction: TransactionObject) {
    this.transactionService.delete(transaction.id)
      .subscribe(() => {
        this.eventService.dispatch('reload', null);
      })
  }
}
