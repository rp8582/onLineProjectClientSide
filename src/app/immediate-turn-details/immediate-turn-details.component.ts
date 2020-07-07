import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { HttpClient } from '@angular/common/http';
import { OptionalTurn } from '../optional-turn.service';
import { Router } from '@angular/router';

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

  apiUrl = 'http://localhost:52764/api/category';

  constructor(private http: HttpClient, private optionalTurns: OptionalTurn, private router: Router) {

  }

  ngOnInit() {


  }

  loadCategory() {
    this.http.get(this.apiUrl).subscribe((categories: any[]) => {
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


  getUserLocation() {
    // get Users current position

    if (navigator.geolocation) {
      var positionOption = { enableHighAccuracy: false, maximumAge: Infinity, timeout: 600000 };
      navigator.geolocation.getCurrentPosition(position => {
        debugger;
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log("position", position);
      },
        err => {
          console.log(err);
        },
        positionOption);

    }

  }

  loadOptionalTurn(mode: any) {

    this.getUserLocation();
    this.optionalTurns.loadOptionalTurns(this.selectedItem.CategoryId, this.latitude, this.longitude, mode).subscribe(
      (turns => {
        this.optionalTurns.optionalTurns=turns;
        this.router.navigate(['/confirmTurn']);
      }));

  }
}
