import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { SharedModule } from '@bff/shared';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { UIModule } from '../../../../../libs/frontend/ui/src';


@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    NzTypographyModule,
    SharedModule,
    NzGridModule,
    NzSpaceModule,
    UIModule
  ]
})
export class OverviewModule { }
