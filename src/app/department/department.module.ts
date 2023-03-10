import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentRoutingModule } from './department-routing.module';



@NgModule({
  declarations: [
    DepartmentAddComponent,
    DepartmentListComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,
     DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
