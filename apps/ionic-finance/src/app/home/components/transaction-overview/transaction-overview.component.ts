import { Component, OnInit } from '@angular/core';
import { ITransaction } from '@bff/api/modules';
import { EventService, TransactionService } from '@bff/client/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'bff-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.css']
})
export class TransactionOverviewComponent implements OnInit {

  transactions: Array<ITransaction> = [];

  constructor(private transactionService: TransactionService, private eventService: EventService,
              private toastController: ToastController) {
    this.eventService.route('reload')
      .subscribe(() => {
        this.transactionService
          .getTransactions(new Date())
          .subscribe(transactions => this.transactions = transactions.data);
      })
  }

  ngOnInit(): void {
    this.transactionService
      .getTransactions(new Date())
      .subscribe(transactions => this.transactions = transactions.data);
  }
  delete(deleteEvent: ITransaction) {
    this.transactionService
      .delete(deleteEvent.id)
      .subscribe(async () => {
        this.eventService.dispatch('reload', undefined);
        const toast = await this.toastController.create({
          message: 'transaction deleted',
          color: 'primary',
          duration: 2000,
        })
        await toast.present();
      }, async (err) => {
        this.eventService.dispatch('reload', undefined);
        const toast = await this.toastController.create({
          message: err.message,
          color: 'danger',
          duration: 2000,
        })
        await toast.present();
      })
  }

}
