import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService, TransactionService } from './services';
import { BASE_URL } from './tokens';
import { SubscriptionService } from './services/subscription.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    AccountService,
    TransactionService,
    SubscriptionService
  ]
})
export class CoreModule {

  public static forRoot(option: {url: string}): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        AccountService,
        TransactionService,
        SubscriptionService,
        {
          provide: BASE_URL,
          useValue: option.url
        }
      ]
    }
  }
}
