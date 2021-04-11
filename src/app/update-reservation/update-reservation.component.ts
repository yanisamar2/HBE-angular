import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  id!: number;
  reservation!: Reservation;

  constructor(private route: ActivatedRoute, private router: Router,
    private reservationService: ReservationService) { 

    }

  ngOnInit(): void {
    this.reservation = new Reservation();
    this.id = this.route.snapshot.params['id'];

    this.reservationService.getReservation(this.id)
      .subscribe( data => {
        console.log(data);
        this.reservation = new Reservation();
        this.gotoList();
      },
      error => console.log(error)
      );
  }
  gotoList() {
    this.router.navigate(['/reservations']);
  }

  onSubmit(){
    this.updateReservation();
  }

  updateReservation() {
    this.reservationService.updateReservation(this.id, this.reservation)
      .subscribe( data => {
        console.log(data);
        this.reservation = new Reservation();
        this.gotoList();
      },
      (error: any) => console.log(error)
      );
  }

  
}
