import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ITransaction } from '@bff/api/modules';
import { AccountQuery } from '@bff/client/core';
import { Gesture, GestureController } from '@ionic/angular';
@Component({
  selector: 'bff-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {

  @Input()
  transaction!: ITransaction;

  @Output()
  onDelete = new EventEmitter();

  constructor(private accountQuery: AccountQuery, private gestureController: GestureController) {
  }

  ngOnInit(): void {
  }

  delete()  {
    return this.onDelete.emit(this.transaction);
  }
}
