import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';
import{ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent {

 dept:Department =new Department(0,"","");
 constructor(public departmentService:DepartmentService,public activatedRoute:ActivatedRoute){}
 
 ngOnInit(){
  this.activatedRoute.params.subscribe(p=>{
    this.departmentService.getById(p['id']).subscribe(data=>{
      this.dept=data;
    })
  })
 }
 

}
