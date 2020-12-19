import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaddingComponent } from './style/padding/padding.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaddingComponent],
  exports: [
    PaddingComponent,
  ]
})
export class ClientSharedModule {}
