import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../app/shared/core/service/http.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import { SliderModule } from 'angular-image-slider';
import { NgImageSliderModule } from 'ng-image-slider';
import {RatingModule} from 'ngx-rating';
import { MomentModule } from 'angular2-moment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxPrintModule } from 'ngx-print';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommunicationService  } from '../app/shared/core/service/communication.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SubModule } from './subscriptions/sub.module';


//import { AllCustomerComponent } from './subscriptions/all-customer/all-customer.component';
//import { AllSubscriptionComponent } from './subscriptions/all-subscription/all-subscription.component';
//import { CreateSubscriptionComponent } from './subscriptions/create-subscription/create-subscription.component';
//import { MySubscriptionComponent } from './subscriptions/my-subscription/my-subscription.component';



@NgModule({
  declarations: [
    AppComponent,
 
    //AllSubscriptionComponent,
    //CreateSubscriptionComponent,
    //MySubscriptionComponent,
    
   
  ],
  imports: [
    FormsModule,
    // BrowserModule,
    
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    OwlModule,
    MatMenuModule,
    MatExpansionModule,
    NgImageSliderModule,
    RatingModule,
    MomentModule,
    TagInputModule,
    BrowserAnimationsModule,
    SliderModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPrintModule,
    NgxPaginationModule,
    SubModule
    
    // AgmCoreModule.forRoot({
    //   apiKey: '',
    //   libraries: ['places']
    // })
  ],
  providers: [HttpService, CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
