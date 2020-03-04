import { AllCustomerComponent } from './all-customer/all-customer.component';
import { AllSubscriptionComponent  } from './all-subscription/all-subscription.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
export const SubRoutes = [
  { path: 'allCustomer', component: AllCustomerComponent },
  { path: 'allsub', component: AllSubscriptionComponent },
  { path: 'mysub', component: MySubscriptionComponent },
  { path: 'createsub', component: CreateSubscriptionComponent }
];