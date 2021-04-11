import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl =  'http://localhost:8080/springboot-crud-rest/api/v1/reservations';

  constructor(private http:HttpClient) { 

  }

  getReservation(id: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createReservation(reservation: Reservation): Observable<Object> {
    console.log(`creating Reservation  :  ${reservation.guest.firstName} ${reservation.guest.lastName}    Check-in : ${reservation.checkin}      Check-out : ${reservation.checkout}`);
    return this.http.post<Reservation>(`${this.baseUrl}`, reservation);
  }

  updateReservation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType:'text'});
  }

  getReservationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
