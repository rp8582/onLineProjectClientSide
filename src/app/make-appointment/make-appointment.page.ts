import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.page.html',
  styleUrls: ['./make-appointment.page.scss'],
})
export class MakeAppointmentPage implements OnInit {
  selectedService: any;
  constructor() { }

  ngOnInit() { }

  SetSelectedService(service: any) {
    this.selectedService = service;
    console.log(this.selectedService);
  }


}
