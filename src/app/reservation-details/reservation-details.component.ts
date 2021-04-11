import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  id!: number;
  reservation!: Reservation;

  constructor(private route: ActivatedRoute, private router: Router,
    private reservationService: ReservationService) { }

  ngOnInit(): void {

    this.reservation = new Reservation();

    this.id = this.route.snapshot.params['id'];

    this.reservationService.getReservation(this.id)
      .subscribe( (data:any) =>{
        console.log(data)
        this.reservation = data;
      },
      (error) => console.log(error)
      );
  }

  list(){
    this.router.navigate(['reservations']);
  }

}
