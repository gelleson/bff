import { Component, OnInit } from '@angular/core';
import { AccountQuery, CategoryQuery, CategoryService, EventService, TransactionService } from '@bff/client/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { error } from 'util';

@Component({
  selector: 'bff-new-transaction-modal',
  templateUrl: './new-transaction-modal.component.html',
  styleUrls: ['./new-transaction-modal.component.css']
})
export class NewTransactionModalComponent implements OnInit {

  withdraw: FormGroup;
  transfer: FormGroup;
  income: FormGroup;
  constructor(
    public accountQuery: AccountQuery,
    private transactionService: TransactionService,
    private toastController: ToastController,
    private eventService: EventService,
    private modalController: ModalController,
    private categoryQuery: CategoryQuery,
    private categoryService: CategoryService,
    fb: FormBuilder
  ) {
    this.withdraw = fb.group({
      amount: [0, [Validators.required, Validators.min(1)]],
      credit: [null, [Validators.required]],
      categoryId: [null],
      narrative: [''],
      transactionTime: [new Date().toISOString(), [Validators.required]],
    });
    this.income = fb.group({
      amount: [0, [Validators.required, Validators.min(1)]],
      debit: [null, [Validators.required]],
      categoryId: [null],
      narrative: [''],
      transactionTime: [new Date().toISOString(), [Validators.required]],
    })
    this.transfer = fb.group({
      amount: [0, [Validators.required, Validators.min(1)]],
      debit: [null, [Validators.required]],
      credit: [null, [Validators.required]],
      categoryId: [null],
      narrative: [''],
      transactionTime: [new Date().toISOString(), [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.categoryService
      .getAll()
      .subscribe();
  }

  public withdrawSubmit() {
    this.transactionService.withdraw(
      this.withdraw.getRawValue()
    )
      .subscribe( async (data) => {
        const toast = await this.toastController.create({
          message: 'withdraw created!',
          duration: 2000,
          color: 'primary'
        });
        await toast.present();
        this.withdraw.get('amount').reset(0);
        await this.modalController.dismiss();
        this.eventService.dispatch('reload', undefined);
      }, async (err) => {
        const toast = await this.toastController.create({
          message: err.message,
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
        this.withdraw.get('amount').reset(0);
      } )
  }

  public incomeSubmit() {
    this.transactionService.income(
      this.income.getRawValue()
    )
      .subscribe( async (data) => {
        const toast = await this.toastController.create({
          message: 'income created!',
          duration: 2000,
          color: 'primary'
        });
        await toast.present();
        this.withdraw.get('amount').reset(0);
        await this.modalController.dismiss();
        this.eventService.dispatch('reload', undefined);
      }, async (err) => {
        const toast = await this.toastController.create({
          message: err.message,
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
        this.withdraw.get('amount').reset(0);
      } )
  }

  public transferSubmit() {
    this.transactionService.transfer(
      this.transfer.getRawValue()
    )
      .subscribe( async (data) => {
        const toast = await this.toastController.create({
          message: 'transfer created!',
          duration: 2000,
          color: 'primary'
        });
        await toast.present();
        this.withdraw.get('amount').reset(0);
        await this.modalController.dismiss();
        this.eventService.dispatch('reload', undefined);
      }, async (err) => {
        const toast = await this.toastController.create({
          message: err.message,
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
        this.withdraw.get('amount').reset(0);
      } )
  }

}
