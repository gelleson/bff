import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCardListComponent } from './accounts/account-card-list/account-card-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AccountCardListComponent],
  exports: [
    AccountCardListComponent
  ]
})
export class MobileSharedModule {}
