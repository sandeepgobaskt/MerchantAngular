import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/core/service/helper.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userName: any;
  bpname: string;

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.userName = this.helperService.getFromLocalStorage('userName');
    this.bpname = this.helperService.getFromLocalStorage('bpname');
  }

}
