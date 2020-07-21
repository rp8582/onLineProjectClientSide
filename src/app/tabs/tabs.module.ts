import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { ConfirmTurnComponent } from '../confirm-turn/confirm-turn.component';
import { ImmediateTurnDetailsComponent } from '../immediate-turn-details/immediate-turn-details.component';
import { IonicSelectableModule } from 'ionic-selectable';
import {SelectServiceComponent} from '../select-service/select-service.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [
    TabsPage,
    ConfirmTurnComponent,
    ImmediateTurnDetailsComponent,
    SelectServiceComponent,

  ]
})
export class TabsPageModule { }
