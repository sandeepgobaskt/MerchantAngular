import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OwlModule } from 'ngx-owl-carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import { RatingModule } from 'ngx-rating';
import { MomentModule } from 'angular2-moment';
import { TagInputModule } from 'ngx-chips';
import { SliderModule } from 'angular-image-slider';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { PaymentRoutingModule } from './payment-page.route';
import { CustomPaymentComponent } from './paymentPortal/custom-payment.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
// import { MaterialModule } from '@angular/material';
import { CreditPayComponent } from './credit-pay/credit-pay.component';
import { GooglePayComponent } from './google-pay/google-pay.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { AmazonPayComponent } from './amazon-pay/amazon-pay.component';
// import { BrowserModule } from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FooterComponent } from '../payments/footer/footer.component';
import {MatDividerModule, MatCardModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    CustomPaymentComponent,
    SubscriptionComponent,
    HeaderComponent,

    CreditPayComponent,
    GooglePayComponent,
    NetbankingComponent,
    FooterComponent,
    AmazonPayComponent
  ],
  imports: [MatSlideToggleModule,
    CommonModule,
    MatDividerModule,
    // MaterialModule,
    MatButtonToggleModule,
    PaymentRoutingModule,
    MatMenuModule,
    NgbModule,
    SlickCarouselModule,
    OwlModule,
    NgImageSliderModule,
    RatingModule,
    MomentModule,
    TagInputModule,
    SliderModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPrintModule,
    FormsModule,
    MatCardModule
        // BrowserModule
    ]
})
export class PaymentModule { }
