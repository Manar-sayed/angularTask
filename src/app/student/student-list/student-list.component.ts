import { Component,Output,EventEmitter } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  
})
export class StudentListComponent {
  @Output() onStdEdit:EventEmitter<Student>=new EventEmitter<Student>();

  detailsid: any;
  students:Student[]=[];
  _std:Student=new Student(0,"",0,"");

  constructor(public studentService:StudentService){}
  delete(id:Number){
    if(confirm('are you sure?!')){
      this.studentService.deleteById(id).subscribe(a=>{
        console.log(a);
      })
    }
  }


  edit(std:Student){
  
    if(std._id>0){
      this._std._id=std._id;
      this._std.name=std.name;
      this._std.department=std.department;
    
    }
    else{
      alert("not valid Id");
    }
  
  }


  
  ngOnInit(){
    this.studentService.getAll().subscribe(dta=>{
      this.students=dta;
   });
  }
}
