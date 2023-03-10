import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from'@angular/router';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { EditComponent } from './student/edit/edit.component';

const routes:Routes=[
  // {path:"add",component:StudentAddComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutusComponent},
  {path:"students",component:StudentListComponent,children:[
    {path:"details/:id",component:StudentDetailsComponent},
    {path:"edit",component:EditComponent},
  ]},
  {path:"students/add",component:StudentAddComponent},
  {path:"departments",component:DepartmentListComponent},
  {path:"departments/add",component:DepartmentAddComponent},
  // {path:"departments/details/:id",component:StudentDetailsComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
