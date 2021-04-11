import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    UpdateCustomerComponent,
    CreateReservationComponent,
    ReservationDetailsComponent,
    ReservationListComponent,
    UpdateReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
