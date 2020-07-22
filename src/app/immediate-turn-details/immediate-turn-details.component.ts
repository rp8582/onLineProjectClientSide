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
  selectedCategory: any;
  selectedService: any;
  isCategory: any;
  latitude: any;
  longitude: any;
  apiUri = '';

  constructor(private http: HttpClient, private optionalTurns: OptionalTurns, private optionalTurn: OptionalTurn, private router: Router) { }
  loadBusinesses() {
    this.isCategory = 0;
  }
  loadCategory() {
    this.isCategory = 1;
  }
  setSelectedService(service) {
    this.selectedService = service;
    console.log('setService',this.selectedService)
  }
  setSelectedCategory(category) {
    this.selectedCategory = category;
    console.log('setCategory',this.selectedCategory)
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

  loadTurnToBusiness( mode: any) {
    this.getUserLocation().then((position => {
      this.optionalTurn.loadOptionalTurn(this.selectedService.ServiceId, position.lat, position.lng, mode).subscribe(
        (turn => {
          this.optionalTurn.optionalTurn = turn;
          this.router.navigate(['/confirmTurn']);
        }));
    }))
  }


  loadOptionalTurn(mode) {
    this.getUserLocation().then((position => {

      this.optionalTurns.loadOptionalTurns(this.selectedCategory.CategoryId, position.lat, position.lng, mode).subscribe(
        (turns => {
          this.optionalTurns.optionalTurns = turns;
          this.router.navigate(['/confirmTurn']);
        }));
    }))
  }

}
