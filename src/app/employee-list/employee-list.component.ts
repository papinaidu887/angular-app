import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployeeList().subscribe(
      data => 
      {
        console.log(data);
        this.employees = data;
      }
    );
  }

 // delete a employee
  deleteEmployee(id:number){
    this.employeeService.removeEmployee(id).subscribe(
      data=>{
        console.log("Successfully deleted....");
        console.log(data);
        this.getEmployees();
       
      
      },
      error=>{
        console.log("FAILED........");
        console.log(error);
      }
    );

  }


  updateEmployee(id: number){
    console.log("updated:: "+id);
    this.router.navigate(['/update-employee', id]);

  }
  

}
