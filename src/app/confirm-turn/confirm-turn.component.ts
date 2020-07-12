import { Component, OnInit } from '@angular/core';
import { OptionalTurn } from '../optional-turn.service';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-confirm-turn',
  templateUrl: './confirm-turn.component.html',
  styleUrls: ['./confirm-turn.component.scss'],
})
export class ConfirmTurnComponent implements OnInit {

  turns: any[];

  constructor(private optionalTurns: OptionalTurn, private http:HttpClient) { }

  ngOnInit() {
    this.turns = this.optionalTurns.optionalTurns;
    console.log(this.turns);
  }

  confirmTurn(turn: any) {
    console.log("turn:" + turn);
    //this.http.post(`$(environment.apiUrl)`)
  }

}
