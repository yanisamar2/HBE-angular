import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full'},
  { path: 'customers', component: CustomerListComponent},
  { path: 'addCustomer', component: CreateCustomerComponent},
  { path: 'updateCustomer/:id', component: UpdateCustomerComponent},
  { path: 'detailsCustomer/:id', component: CustomerDetailsComponent},

  { path: 'reservations', component: ReservationListComponent},
  { path: 'addReservation', component: CreateReservationComponent},
  { path: 'updateReservation/:id', component: UpdateReservationComponent},
  { path: 'detailsReservation/:id', component: ReservationDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
