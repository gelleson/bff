import { Component, OnInit } from '@angular/core';
import { AccountService, EventService } from '@bff/client/core';
import { ModalController } from '@ionic/angular';
import { NewTransactionModalComponent } from './components/new-transaction-modal/new-transaction-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private accountService: AccountService, private modalController: ModalController,
              private eventService: EventService) {
    this.eventService.route('reload')
      .subscribe(() => {
        this.accountService
          .getAll()
          .subscribe();
      });
  }

  ngOnInit(): void {
    this.accountService
      .getAll()
      .subscribe();
  }

  public async openModal() {
    const modal = await this.modalController.create({
      component: NewTransactionModalComponent,
      swipeToClose: true,
    })
    await modal.present();
  }
}
