import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MerchantRoutes } from './merchant.route';

@NgModule({
    imports: [
        RouterModule.forChild(MerchantRoutes)
    ],
    exports: [RouterModule]
})
export class MerchantRoutingModule { }
