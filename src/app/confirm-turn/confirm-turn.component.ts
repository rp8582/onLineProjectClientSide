import { Component, OnInit } from '@angular/core';
import { OptionalTurn } from '../optional-turn.service';

@Component({
  selector: 'app-confirm-turn',
  templateUrl: './confirm-turn.component.html',
  styleUrls: ['./confirm-turn.component.scss'],
})
export class ConfirmTurnComponent implements OnInit {

  turns: any[];

  constructor(private optionalTurns: OptionalTurn) { }

  ngOnInit() {
    this.turns = this.optionalTurns.optionalTurns;
    console.log(this.turns);
  }

  confirmTurn(turn: any) {
    console.log("turn:" + turn);
  }

}
