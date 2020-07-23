import { Component, OnInit } from '@angular/core';
import { BookAppointment } from '../bookAppointment.service';
@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.page.html',
  styleUrls: ['./make-appointment.page.scss'],
})
export class MakeAppointmentPage implements OnInit {
  selectedService: any;
  days: any[];
  hours: any[];
  selectedDay: any;
  selectedHour: any;
  preAlert: number;

  constructor(private appointmentService: BookAppointment) { }

  ngOnInit() { }

  SetSelectedService(service: any) {
    this.selectedService = service;
    console.log(this.selectedService);
    this.loadDays();
  }
  // http://localhost:52764/appointment/optionalDays?serviceId=1
  // http://localhost:52764/appointment/optionalHours?serviceId=1&day=3
  loadDays() {
    this.appointmentService.loadDays(this.selectedService.ServiceId).subscribe((days => {
      this.days = days
    }));
  }
  loadHours(day) {
    this.selectedDay = day;
    this.appointmentService.loadHoursPerDay(this.selectedService.ServiceId, day).subscribe((hours => {
      console.log(hours);
      this.hours = hours;
    }))
  }
  setHour(hour) {
    this.selectedHour = hour;
  }

  confirmTurn() {
    //var date: Date;
   // date = new Date();
    //date.setDate(date.getDate() + (this.selectedDay - date.getDate()));
    
    this.appointmentService.makeAppointment
    ({ PreAlert: this.preAlert, ServiceId: this.selectedService.ServiceId, EstimatedHour:this.selectedHour}).subscribe(
      (state=>console.log(state))
    )

   
  }
}