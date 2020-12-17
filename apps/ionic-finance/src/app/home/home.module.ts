import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { UIModule } from '@bff/client/ui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    NzTypographyModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
