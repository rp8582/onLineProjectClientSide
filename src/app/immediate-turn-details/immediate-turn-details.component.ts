import { Component, OnInit, Input } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { OptionalTurns } from '../optional-turns.service';
import { OptionalTurn } from '../optional-turn.service';

@Component({
  selector: 'app-immediate-turn-details',
  templateUrl: './immediate-turn-details.component.html',
  styleUrls: ['./immediate-turn-details.component.scss'],
})
export class ImmediateTurnDetailsComponent {

  data: any[];
  selectedItem: any;
  titleText: string;
  itemId: string;
  itemName: string;
  latitude: any;
  longitude: any;
  apiUri = '';

  constructor(private http: HttpClient, private optionalTurns: OptionalTurns, private optionalTurn: OptionalTurn, private router: Router) { }

  loadCategory() {
    this.apiUri = "/category";
    this.http.get(environment.apiUrl + this.apiUri).subscribe((categories: any[]) => {
      this.data = categories;
      console.log('categories', this.data);
      this.titleText = "בחר קטגוריה";
      this.itemId = "CategoryId";
      this.itemName = "CategoryName";
    })
  }


  dataChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('category:', this.selectedItem);
  }

  getUserLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        console.log("position", position);
        resolve({ lng: position.coords.longitude, lat: position.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }

  loadTurnToBusiness(selectedService: any,mode:any) {
    this.getUserLocation().then((position => {
      this.optionalTurn.loadOptionalTurn(selectedService.ServiceId, position.lat, position.lng, mode).subscribe(
        (turn => {
          this.optionalTurn.optionalTurn = turn;
          this.router.navigate(['/confirmTurn']);
        }));
    }))
  }


  loadOptionalTurn(mode) {
    this.getUserLocation().then((position => {

      this.optionalTurns.loadOptionalTurns(this.selectedItem.CategoryId, position.lat, position.lng, mode).subscribe(
        (turns => {
          this.optionalTurns.optionalTurns = turns;
          this.router.navigate(['/confirmTurn']);
        }));
    }))
  }

}
