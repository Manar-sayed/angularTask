import { Component ,Output,EventEmitter,Input } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';
import{Router} from '@angular/router'
import { Subscription } from 'rxjs';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  // nstd:Student =new Student(0,"",0,"");

  // constructor(public studentService:StudentService,public router:Router){}

  // @Output() onStudentEdit:EventEmitter<Student>=new EventEmitter<Student>();
  // // crs:Course=new Course(0,"",0,0);

  // Edit(){
  //  this.onStudentEdit.emit();
 
  // }
  @Input() id:Number=0;
// std:Student|null=null;
std:Student=new Student(0,"",0,"")
constructor (public studentService:StudentService,public activatedRoute:ActivatedRoute,public router:Router){}
 sub:Subscription|null=null;
 update(){
  console.log(this.std);
  this.studentService.edit(this.std).subscribe(data=>{
          this.router.navigateByUrl("/students")
          console.log(data);
        })
 }
// ngOnInit(){
//   this.activatedRoute.params.subscribe(p=>{
//     this.studentService.getById(p['id']).subscribe(data=>{
//       this.std=data;
//     })
//   })
// }
// save(){
//   // this.studentService.add(this.nstd);
//   // this.router.navigateByUrl("/students");
//   // this.router.navigate(['students'])
//   this.studentService.add(this.std).subscribe(data=>{
//     console.log(data);
//     this.router.navigateByUrl("students");
//     this.router.navigate(['students'])
//   });
// }}
}