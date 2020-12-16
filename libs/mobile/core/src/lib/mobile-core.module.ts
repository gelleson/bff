import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { BASE_URL } from './tokens/base';
import { MobileCoreOption } from './option/option';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
  ]
})
export class MobileCoreModule {
  public static forRoot(option: MobileCoreOption): ModuleWithProviders<MobileCoreModule> {
    return {
      ngModule: MobileCoreModule,
      providers: [
        AuthService,
        {
          provide: BASE_URL,
          useValue: option.baseUrl
        }
      ]
    }
  }
}
