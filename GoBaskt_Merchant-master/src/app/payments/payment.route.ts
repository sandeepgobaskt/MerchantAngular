import { GooglePayComponent } from './google-pay/google-pay.component';
import { CreditPayComponent } from './credit-pay/credit-pay.component';
import { CustomPaymentComponent } from './paymentPortal/custom-payment.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AmazonPayComponent } from './amazon-pay/amazon-pay.component';
import { NetbankingComponent } from './netbanking/netbanking.component';

export const PaymentRoutes = [
  { path: 'subscription', component: SubscriptionComponent },
 { path: 'paymentPortal', component: CustomPaymentComponent },
 {path: 'creditpay', component: CreditPayComponent},
 { path: 'amazon', component: AmazonPayComponent},
 { path: 'netbanking', component:NetbankingComponent},
 { path: 'gpay', component:GooglePayComponent}

];
