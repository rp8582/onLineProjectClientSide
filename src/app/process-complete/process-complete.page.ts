import { Component, OnInit } from '@angular/core';
import {OptionalTurn} from '../optional-turn.service';
@Component({
  selector: 'app-process-complete',
  templateUrl: './process-complete.page.html',
  styleUrls: ['./process-complete.page.scss'],
})
export class ProcessCompletePage implements OnInit {
  
  verificationCode=this.optionalTurn.verificationCode;

  constructor(private optionalTurn:OptionalTurn) { }

  ngOnInit() {
  }

}
