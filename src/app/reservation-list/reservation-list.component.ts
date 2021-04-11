import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {


  reservations!: Observable<Reservation[]>;

  constructor(private reservationService: ReservationService,
     private router:Router) {

      }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.reservations = this.reservationService.getReservationsList();
  }

  deleteReservation(id: number){
    this.reservationService.deleteReservation(id)
      .subscribe(
        data =>{
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      )
  }

  reservationDetails(id: number){
    this.router.navigate(['details',id]);
  }


}
