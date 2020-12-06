import { Component, OnInit } from '@angular/core';
import { AccountQuery, AccountService, EventService, TransactionService } from '@bff/frontend/core';
import { AccountObject, TransactionObject } from '@bff/interface';

@Component({
  selector: 'bff-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  accounts : AccountObject[] = [];
  transactions: TransactionObject[] = [];

  constructor(private accountService: AccountService, private transactionService: TransactionService,
              private accountQuery: AccountQuery, private eventService: EventService) {
    this.accountService
      .getAll()
      .subscribe();

    this.accountQuery
      .selectAll()
      .subscribe(accounts => this.accounts = accounts)

    this.transactionService.getTransactions(new Date())
      .subscribe(transactions => this.transactions = transactions.transactions);

    this.eventService
      .route('reload')
      .subscribe((event) => {
        this.accountService
          .getAll()
          .subscribe();

        this.transactionService.getTransactions(new Date())
          .subscribe(transactions => this.transactions = transactions.transactions);
      })
  }

  ngOnInit(): void {
  }

}
