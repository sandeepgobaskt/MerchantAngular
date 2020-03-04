import { Component, OnInit } from '@angular/core';
// import { Module as StripeModule } from "stripe-angular";

@Component({
  selector: 'app-credit-pay',
  templateUrl: './credit-pay.component.html',
  styleUrls: ['./credit-pay.component.scss']
})
export class CreditPayComponent implements OnInit {

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


 /*pay(form) {

  if(!window['Stripe']) {
    alert('Oops! Stripe did not initialize properly.');
    return;
  }

  this.submitted = true;

  console.log(this.customStripeForm);
  if (this.customStripeForm.invalid) {
    return;
  }

  this.formProcess = true;
  console.log("form");
  console.log(form);
  if(!window['Stripe']) {
    alert('Oops! Stripe did not initialize properly.');
    return;
  }
  (<any>window).Stripe.card.createToken({
    number: form.cardNumber,
    exp_month: form.expMonth,
    exp_year: form.expYear,
    cvc: form.cvc
  }, (status: number, response: any) => {
    this.submitted = false;
    this.formProcess = false;
    if (status === 200) {
      this.message = `Success! Card token ${response.card.id}.`;
    } else {
      this.message = response.error.message;
    }
  });
}*/
}
