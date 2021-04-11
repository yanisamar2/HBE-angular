import { Customer } from "./customer";

export class Reservation{
    id!: number;
	checkin!: Date;
	checkout!: Date;
    booker!: Customer;
    guest!: Customer;
    guestCount!: number;

    totalPrice!: number;
    payableCommission!: number;

    bookedOn!: Date;
    modifiedOn!: Date;

    partnerId!: string;
    reservationRemarks!: string;
    guaranteeInformation!: string;

    mealPlan!: string;
}