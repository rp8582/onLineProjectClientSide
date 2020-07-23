import { Component, OnInit } from '@angular/core';
import {OptionalTurn} from '../optional-turn.service';
import { BookAppointment } from '../bookAppointment.service';

@Component({
  selector: 'app-process-complete',
  templateUrl: './process-complete.page.html',
  styleUrls: ['./process-complete.page.scss'],
})
export class ProcessCompletePage implements OnInit {
  
  verificationCode=this.optionalTurn.verificationCode;
  

  constructor(private optionalTurn:OptionalTurn,private appointmemt:BookAppointment) { }

  ngOnInit() {
    if(this.verificationCode==null)
    this.verificationCode=this.appointmemt.verificationCode;
  }

}
