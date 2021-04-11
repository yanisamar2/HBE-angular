import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl =  'http://localhost:8080/springboot-crud-rest/api/v1/customers';


  constructor(private http: HttpClient){

  }

  getCustomer(id: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Customer): Observable<Object> {
    console.log(`creating Customer  :  ${customer.firstName} ${customer.lastName}`);
    return this.http.post<Customer>(`${this.baseUrl}`, customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType:'text'});
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
