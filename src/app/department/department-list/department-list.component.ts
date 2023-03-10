import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],

})
export class DepartmentListComponent {
   depts:Department[]=[]

   constructor(public departmentService:DepartmentService){
    console.log(this.depts);
 
 
   }
delete(id:Number){
  if(confirm('are you sure?!')){
    this.departmentService.deleteById(id).subscribe(a=>{
      console.log(a);
    })
  }
}
   //to subscribe data from get all fun
   ngOnInit(){
     this.departmentService.getAll().subscribe(data=>{
        this.depts=data;
     });
    console.log(this.depts);
    
}
}
