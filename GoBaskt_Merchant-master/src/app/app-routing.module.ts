import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { _getOptionScrollPosition } from '@angular/material/core';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'merchant',
    loadChildren: './merchant/merchant.module#MerchantModule',
  },
  
  {
    path: 'auth',
    loadChildren: './login/index#LoginModule'
  },
  {
    path: 'payment',
    loadChildren: './payments/payment.module#PaymentModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
