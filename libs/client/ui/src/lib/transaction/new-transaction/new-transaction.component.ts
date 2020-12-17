import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerComponent } from 'ng-zorro-antd/drawer';
import { AccountQuery, AccountService, EventService, TransactionService } from '@bff/client/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'bff-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {

  opened = false;

  form: FormGroup;

  operations = [
    'WITHDRAW',
    'INCOME',
    'TRANSFER',
  ]

  @ViewChild('drawer')
  drawer: NzDrawerComponent;

  constructor(private fb: FormBuilder, private transactionService: TransactionService, private notifyService: NzMessageService,
              public accountQuery: AccountQuery, private eventService: EventService) {

    this.form = fb.group({
      amount: new FormControl(0, [Validators.required, Validators.min(1)]),
      operation: new FormControl('WITHDRAW',[Validators.required]),
      credit: new FormControl(),
      debit: new FormControl(),
      narrative: new FormControl(),
      time: new FormControl(new Date(), [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  public taggle() {
    this.opened = !this.opened;
    this.form.get('time').setValue(new Date());
  }

  close() {
    this.drawer.close();
    this.opened = false;
  }

  save() {
    let observe: Observable<any>;

    switch (this.form.get('operation').value) {
      case 'WITHDRAW': {
        observe = this.transactionService
          .withdraw({
            credit: this.form.get('credit').value,
            amount: this.form.get('amount').value,
            narrative: this.form.get('narrative').value,
            transactionTime: this.form.get('time').value
          });
        break;
      }
      case 'INCOME': {
        observe = this.transactionService
          .income({
            debit: this.form.get('debit').value,
            amount: Number(this.form.get('amount').value),
            narrative: this.form.get('narrative').value,
            transactionTime: this.form.get('time').value
          });
        break;
      }
      case 'TRANSFER': {
        observe = this.transactionService
          .transfer({
            credit: this.form.get('credit').value,
            debit: this.form.get('debit').value,
            narrative: this.form.get('narrative').value,
            amount: Number(this.form.get('amount').value),
            transactionTime: this.form.get('time').value
          });
        break;
      }
    }

    observe.subscribe(result => {
      this.drawer.close();
      this.opened = false;
      this.eventService
        .dispatch('reload', undefined);

      this.form.get('amount').reset(0);
      this.form.get('time').reset(new Date());
    });
  }
}
