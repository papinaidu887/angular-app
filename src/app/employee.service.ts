import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retryWhen } from 'rxjs/operators';
import { NumberValueAccessor } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl ="http://localhost:9999/employee-app";
  

 // private POST_URL ="http://localhost:9999/api/addEmployee";


  //private baseURL ="https://www.flipkart.com/"

  
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    
      //return this.httpClient.get<Employee[]>(this.baseUrl);
      return this.httpClient.get<Employee[]>(`${this.baseUrl}/api/employees`);
  }

  createEmployee(employee: Employee): Observable<any>{
    
    //return this.httpClient.post(this.baseUrl, employee);
    return this.httpClient.post(`${this.baseUrl}/api/employee`,employee,{responseType:"text"});

  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/api/employee/${id}`)
  }

  removeEmployee(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/api/employees/${id}`,{responseType:"text"})
  }

  
}
