import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-select-business',
  templateUrl: './select-business.component.html',
  styleUrls: ['./select-business.component.scss'],
})

export class SelectBusinessComponent implements OnInit {
  Businesses: any[];
  selectedBusiness: any;
  apiUri = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadBusinesses();
  }

  loadBusinesses() {
    this.apiUri = "/business"
    this.http.get(environment.apiUrl + this.apiUri).subscribe((businesses: any[]) => {
      this.Businesses = businesses;
      console.log('businesses', this.Businesses);

    });
  }
  dataChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('selectedBusiness:', this.selectedBusiness);
  }

}
