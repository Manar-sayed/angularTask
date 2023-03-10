import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
   // need obj of type http client  to call backend(from http module)
   //to make it global url 
   baseUrl="http://localhost:8080/departments/";
   getAll(){
       return this.http.get<Department[]>(this.baseUrl);//don't forget to transfer return data to array
   }
   addDept(dept:Department){
        return this.http.post<Department>(this.baseUrl,dept);
   }
   getById(id:Number){
   return this.http.get<Department>(this.baseUrl+id);
   }
   deleteById(id:Number){
    return this.http.delete(this.baseUrl+id);
   }
   edit(dept:Department){
    return this.http.put(this.baseUrl+dept._id,dept);
   }
  constructor(public http:HttpClient) {
      this.http.get<Department>("http://localhost:8080/departments/2").subscribe(a=>{
          //  console.log(a);
      });
      //get return observer obj so we must tell it what should be done when click on it(subscribe)
   }
}
