import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {

  reservation: Reservation = new Reservation();
  submitted = false;

  constructor(private reservationService: ReservationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newReservation(): void{
    this.submitted = false;
    this.reservation = new Reservation();
  }

  save() {
    this.reservationService
      .createReservation(this.reservation).subscribe(
        data => {
          console.log(data)
          this.reservation = new Reservation();
          this.gotoList();
        },
        error => console.log(error)
      )
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/reservations']);
  }

}
