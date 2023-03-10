// import { outputAst } from '@angular/compiler';
// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import{Student} from '../_models/student'
// @Component({
//   selector: 'app-component-student',
//   templateUrl: './component-student.component.html',
//   styleUrls: ['./component-student.component.css']
// })
// export class ComponentStudentComponent {
//   @Output() onStudentAdded:EventEmitter<Student>=new EventEmitter<Student>();
 
//   std:Student=new Student(0,"",0,"");
  
//   Students:Student[]= [
//     new Student(1,"manar",21,""),
//     new Student(2,"menaa",22,""),
//     ];
//     flag=false;

//   save(){
//     this.onStudentAdded.emit(this.std);
//     let stdIndex = -1;

//     for (let i = 0; i < this.Students.length; i++) {
//       if(this.std._id == this.Students[i]._id){
//         stdIndex=i;
//         break;
//       }
      
//     }
//     //if this id in array -> update it 
//     if(stdIndex !=-1){
//       this.Students[stdIndex].name=this.std.name;
//       this.Students[stdIndex].department=this.std.department;
//     }
//     //if not -> add it 
//     else{ 
//       this.Students.push(this.std);
//     }
//     this.std =new Student(0,"",0,"");
//     this.flag=false;

//   }
//   getElement(student:Student){
   
//     this.flag=true;
//     this.std._id=student._id;
//     this.std.name=student.name;
//     this.std.department=student.department;
//   }
//   delete(id:Number){
//     for (let i = 0; i < this.Students.length; i++) {
//       if(id == this.Students[i]._id){
//         this.Students.splice(i,1);
//         break;
//       }
//   }

// }
// }


