import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';


@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss'],
})
export class SelectServiceComponent implements OnInit {
  
  @Input() data: any[];
  @Output() outputService = new EventEmitter<any>();
  
  titleText: string = "בחר שירות לעסק";
  itemId: string = "ServiceId";
  itemName: string = "ServiceName";
  selectedItem: any;

  constructor() { }

  ngOnInit() { }

  dataChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('service:', this.selectedItem);
  }

  loadOptionalTurn() {
    console.log("selectedItem:", this.selectedItem);
    this.outputService.emit(this.selectedItem);
  }
}
