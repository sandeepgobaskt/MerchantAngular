import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  [x: string]: any;
  public isCollapsed = true;
  constructor() {}
  ngOnInit() {
  }
  myFunction() {

    const dots = document.getElementById('dots');
    const moreText = document.getElementById('more');
    const btnText = document.getElementById('myBtn');

    if (dots.style.display === 'none') {
         dots.style.display = 'inline';
         btnText.innerHTML = 'Read more';
         moreText.style.display = 'none';
       } else {
         dots.style.display = 'none';
         btnText.innerHTML = 'Read less';
         moreText.style.display = 'inline';
       }
     }
}
