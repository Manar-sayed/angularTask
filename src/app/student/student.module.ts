import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import{FormsModule}from '@angular/forms'
import { StudentService } from '../_services/student.service';
import { StudentDetailsComponent } from './student-details/student-details.component';
import{RouterModule} from '@angular/router';
import { EditComponent } from './edit/edit.component'

@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent,
    StudentDetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports:[
    StudentAddComponent,
    StudentListComponent,
  
  ],
})
export class StudentModule { }
