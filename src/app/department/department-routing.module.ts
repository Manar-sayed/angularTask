import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes =[
  // {path:"",component:DepartmentListComponent},
  {path:"add",component:DepartmentAddComponent},
  {path:"departments/details/:id",component:DepartmentDetailsComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],exports:[RouterModule]
})
export class DepartmentRoutingModule { }
