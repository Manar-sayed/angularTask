import { Component,Input, OnDestroy } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';
import{ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

@Input() id:Number=0;
// std:Student|null=null;
std:Student=new Student(0,"",0,"")
constructor (public studentService:StudentService,public activatedRoute:ActivatedRoute){}
 sub:Subscription|null=null;
ngOnInit(){
  this.activatedRoute.params.subscribe(p=>{
    this.studentService.getById(p['id']).subscribe(data=>{
      this.std=data;
    })
  })
//  this.sub= this.activatedRoute.params.subscribe(data=>{
//      this.std=this.studentService.getById(data['id']);

//   })
  // this.std=this.studentService.getById(
  //   this.activatedRoute.snapshot.params['id'] );

}
// ngOnDestroy(){
//   this.sub?.unsubscribe();
//   console.log('std destroy');
// }

// ngOnChanges(){
//    // this.std=this.studentService.getById(this.id);
// }
}
