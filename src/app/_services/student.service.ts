import { Injectable } from '@angular/core';
import { Student } from '../_models/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // private students:Student[]=[
  //   new Student(10,"aly",10,""),
  //   new Student(20,"mohamed",20,""),
  //   new Student(30,"alyaa",30,""),
  //   new Student(40,"manar",40,""),
  // ];
  baseUrl="http://localhost:8080/students/";
  // constructor() { }
  getAll(){
    return this.http.get<Student[]>(this.baseUrl);//don't forget to transfer return data to array
    // return this.students;
  }
  add(std:Student){
    return this.http.post<Student>(this.baseUrl,std);

    // this.students.push(new Student(std._id,std.name,std.department,std.image));

  }
 

  deleteById(id:Number){
    return this.http.delete(this.baseUrl+id);
   }
  getById(id:Number){
    // for(let i=0;i<this.students.length;i++){
    //   if(this.students[i]._id==id){
    //     return this.students[i];
    //   }
    // }
    // return null;
    return this.http.get<Student>(this.baseUrl+id);

  }
  edit(std:Student){
    return this.http.put(this.baseUrl+std._id,std);
   }
  constructor(public http:HttpClient) {
    this.http.get<Student>("http://localhost:8080/students/1").subscribe(a=>{
         console.log(a);
    });
    //get return observer obj so we must tell it what should be done when click on it(subscribe)
 }
}
