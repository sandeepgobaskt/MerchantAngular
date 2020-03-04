import { Component, OnInit, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpService } from 'src/app/shared/core/service/http.service';
import { loginParams } from 'src/app/shared/core/models/common.models';
import { HelperService } from 'src/app/shared/core/service/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  bgClass = 'home';
  merchantLoginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  loading = false;
  error = '';
  loginData = new loginParams();
  userName: any;
  errMsg: any;
  bpname: any;

  // tslint:disable-next-line:max-line-length
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, public httpService: HttpService, private formBuilder: FormBuilder, private router: Router, private helperService: HelperService) { }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'embedded-body');
    this.buildMerchantLoginForm();
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'embedded-body');
  }
  get f() { return this.merchantLoginForm.controls; }
  buildMerchantLoginForm() {
    this.merchantLoginForm = this.formBuilder.group({
      emailId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    // if (this.merchantLoginForm.invalid) {
    //   console.log('In');
    //   return;
    // }
    this.loginData.emailId = this.merchantLoginForm.value.emailId;
    this.loginData.password = this.merchantLoginForm.value.password;
    this.httpService.merchantLogin(this.loginData).subscribe((response: any) => {
      console.log(response);
      if (response.status === 200) {
        if (response.body) {
          console.log(response.body.data.bpprimaryContactName);
          this.router.navigate(['/merchant/draft-offer']);
          // this.router.navigate(['/merchant/create-offer']);
          this.userName = response.body.data.bpprimaryContactName;
          this.bpname = response.body.data.bpname;
          this.helperService.setToLocalStorage('userName', this.userName);
          this.helperService.setToLocalStorage('bpname', this.bpname);
        }
      }
    }, error => {
      console.log(error);
      this.errMsg = error.error.message;
    });
  }
}
