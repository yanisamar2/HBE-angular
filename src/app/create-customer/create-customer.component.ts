import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService, 
    private router: Router) { 

  }

  ngOnInit(): void {
  }

  newCustomer(): void{
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService
    .createCustomer(this.customer).subscribe(
      (data: any) =>{
        console.log(data)
        this.customer = new Customer();
        this.gotoList();
      },
      (error: any) => console.log(error)
    )
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/customers']);
  }

}
