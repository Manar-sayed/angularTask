import { Component } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
  // providers:[StudentService]
})
export class StudentAddComponent {
nstd:Student =new Student(0,"",0,"");
constructor(public studentService:StudentService,public router:Router){}
save(){
  // this.studentService.add(this.nstd);
  // this.router.navigateByUrl("/students");
  // this.router.navigate(['students'])
  this.studentService.add(this.nstd).subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl("students");
    this.router.navigate(['students'])
  });

}
}
