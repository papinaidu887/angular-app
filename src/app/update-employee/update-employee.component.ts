import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, 
    private router:Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
        this.getEmployee();
  }

  getEmployee(){
    this.id= this.activeRouter.snapshot.params['id'];
    console.log("updated Id ::"+this.id);
    this.employeeService.getEmployeeById(this.id).subscribe(
      data =>{
        console.log("Getting Employee....");
        console.log(data);
        this.employee = data; 
      },
      error=>{
        console.log("something went wrong during getting a employee.....");
        console.log(error);
      }
    ); 
  }

  updateEmployee(){
    console.log("updated....");
    this.employeeService.createEmployee(this.employee).subscribe(
      data=>{
        console.log("Updating employee data...");
        
        console.log(data);
        this.router.navigate(['/employees'])
        
      },
      error=>{
        console.log("Something went wrong during updating a employee..");
        console.log(error);
        
      }
    );
    
  }

}
