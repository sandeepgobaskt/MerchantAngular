import { PaymentRoutes } from './payment.route';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild(PaymentRoutes)
    ],
    exports: [RouterModule]
})
export class PaymentRoutingModule { }
