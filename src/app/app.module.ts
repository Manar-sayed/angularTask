import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import{RouterModule,Routes} from '@angular/router'
import{HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser'
import { NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
// import { ComponentStudentComponent } from './component-student/component-student.component';
// import { ParentComponent } from './parent/parent.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { StudentModule } from './student/student.module';
import { StudentService } from './_services/student.service';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import{} from '@angular/router';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { Department } from './_models/department';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentModule } from './department/department.module';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    // ComponentStudentComponent,
    // ParentComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ViewDataComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
  
  ],
  imports: [
    BrowserModule,FormsModule,StudentModule,HttpClientModule,DepartmentModule,StudentModule,
    AppRoutingModule,RouterModule
    // RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
