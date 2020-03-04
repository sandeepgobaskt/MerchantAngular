import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { MenuComponent } from './menu/menu.component';
import { MerchantRoutingModule } from './merchant-page.route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatStepperModule } from '@angular/material/stepper';
import { RunCampaignComponent } from './run-campaign/run-campaign.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,
  MatNativeDateModule, MatCardModule
} from '@angular/material';
import { DraftOfferComponent } from './draft-offer/draft-offer.component';
import { FinaliseOfferComponent } from './finalise-offer/finalise-offer.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';


@NgModule({
  declarations: [
    CreateOfferComponent,
    MenuComponent,
    DashboardComponent,
    RunCampaignComponent,
    DraftOfferComponent,
    FinaliseOfferComponent,
   
   
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    MatStepperModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgMatSearchBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ]
})
export class MerchantModule { }
