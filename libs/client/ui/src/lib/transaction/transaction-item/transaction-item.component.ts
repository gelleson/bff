import { Component, Input, OnInit } from '@angular/core';
import { ITransaction } from '@bff/api/modules';
import { AccountQuery } from '@bff/client/core';

@Component({
  selector: 'bff-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {

  @Input()
  transaction!: ITransaction;
  constructor(private accountQuery: AccountQuery) {
  }

  ngOnInit(): void {
  }
}
