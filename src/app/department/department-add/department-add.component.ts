import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';
import{ Router } from '@angular/router'
@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent {
dept:Department=new Department(0,'','Alex');
constructor(public departmentService:DepartmentService,public router:Router){}
save(){
  this.departmentService.addDept(this.dept).subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl("departments");
    this.router.navigate(['departments'])

  });
}
}
