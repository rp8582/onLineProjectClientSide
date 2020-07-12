import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { HttpClient } from '@angular/common/http';
import { OptionalTurn } from '../optional-turn.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-immediate-turn-details',
  templateUrl: './immediate-turn-details.component.html',
  styleUrls: ['./immediate-turn-details.component.scss'],
})
export class ImmediateTurnDetailsComponent implements OnInit {


  data: any[];
  selectedItem: any;
  titleText: string;
  itemId: string;
  itemName: string;
  latitude: any;
  longitude: any;

  apiUrl = '/api/category';

  constructor(private http: HttpClient, private optionalTurns: OptionalTurn, private router: Router) {

  }

  ngOnInit() {


  }

  loadCategory() {
    this.http.get(environment.apiUrl + this.apiUrl).subscribe((categories: any[]) => {
      this.data = categories;
      console.log('categories', this.data);
      this.titleText = "בחר קטגוריה";
      this.itemId = "CategoryId";
      this.itemName = "CategoryName";
    })
  }

  loadBusinesses() { }

  dataChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    //this.category=event.value;
    console.log('category:', this.selectedItem);
  }


  getUserLocation(): Observable<any> {
    // get Users current position

    if (navigator.geolocation) {
      var positionOption = { enableHighAccuracy: false, maximumAge: Infinity, timeout: 600000 };
      navigator.geolocation.getCurrentPosition(position => {
        debugger;
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log("position", position);
        return of(positionOption);
      },
        err => {
          console.log(err);
        },
        positionOption);

    }
    return null;
  }

  loadOptionalTurn(mode: any) {

    this.getUserLocation().subscribe((position => {

      debugger;
      this.optionalTurns.loadOptionalTurns(this.selectedItem.CategoryId, this.latitude, this.longitude, mode).subscribe(
        (turns => {
          this.optionalTurns.optionalTurns = turns;
          this.router.navigate(['/confirmTurn']);
        }));
    }))
  }
}
