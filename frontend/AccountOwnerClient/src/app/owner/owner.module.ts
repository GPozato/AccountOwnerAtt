import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { OwnerAccountsComponent } from './owner-details/owner-accounts/owner-accounts.component';
import { SharedModule } from '../shared/shared.module';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerDetailsComponent,
    OwnerAccountsComponent,
    OwnerCreateComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class OwnerModule { }