import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCustomerComponent } from './all-customer/all-customer.component';
import { AllSubscriptionComponent  } from './all-subscription/all-subscription.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
import { SubRoutingModule } from './sub-page.route';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AllCustomerComponent,
    AllSubscriptionComponent,
    MySubscriptionComponent,
    CreateSubscriptionComponent,
    SidenavComponent 
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  exports:[
   
  ]
})
export class SubModule { }
