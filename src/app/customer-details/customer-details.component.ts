import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  id!: number;
  customer!: Customer;

  constructor(private route: ActivatedRoute, private router: Router,
    private customerService: CustomerService) { }

  ngOnInit(): void {

    this.customer = new Customer();

    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomer(this.id)
      .subscribe( (data:any) => {
        console.log(data)
        this.customer = data;
      },
      (error: any) => console.log(error)
      );
  }
  
  list(){
    this.router.navigate(['customers']);
  }

}
