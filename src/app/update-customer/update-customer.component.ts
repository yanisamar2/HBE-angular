import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id!: number;
  customer!: Customer;

  constructor(private route: ActivatedRoute, private router: Router,
    private customerService: CustomerService) { 

    }

  ngOnInit(): void {
    this.customer = new Customer();
    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomer(this.id)
      .subscribe( (data: any) => {
        console.log(data);
        this.customer = new Customer();
        this.gotoList();
      },
      (error: any) => console.log(error)
      );
  }
  gotoList() {
    this.router.navigate(['/customers']);
  }

  onSubmit() {
    this.updateCustomer();
  }
  
  updateCustomer() {
    this.customerService.updateCustomer(this.id, this.customer)
      .subscribe( (data: any) => {
        console.log(data);
        this.customer = new Customer();
        this.gotoList();
      }, 
      (error: any) => console.log(error)
      );
  }


}
