import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-turn',
  templateUrl: './show-turn.component.html',
  styleUrls: ['./show-turn.component.scss'],
})
export class ShowTurnComponent implements OnInit {
  myTurns: any[]
  apiUrl='http://localhost:52764/api/CustInTurn'
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadTurns();
   }
  loadTurns() {
    this.http.get(this.apiUrl).subscribe((turns: any[]) => {
    
      this.myTurns = turns;
      console.log('categories', this.myTurns);
    })

  }

  cancelTurn(turnId:any){
    console.log(turnId);
  }

}
