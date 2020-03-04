import { Component, OnInit } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';
import { stringify } from 'querystring';

@Component({
  selector: 'app-custom-payment',
  templateUrl: './custom-payment.component.html',
  styleUrls: ['./custom-payment.component.scss']
})
export class CustomPaymentComponent implements OnInit {


  constructor() { }
  ngOnInit() {    this.loadStripe();  }

 pay(amount) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_vWAJc8CU63ACef0DwPXXKHdJ00wqkIhDyC',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });

    handler.open({
      name:"Gobaskt",
      description: 'Subscription Plan',
      amount: amount * 100
    });

}


   loadStripe() {

      if(!window.document.getElementById('stripe-script')) {
        var s = window.document.createElement("script");
        s.id = "stripe-script";
        s.type = "text/javascript";
        s.src = "https://checkout.stripe.com/checkout.js";
        window.document.body.appendChild(s);
      }
  }



  }
  // tslint:disable-next-line: align






