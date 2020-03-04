import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registrationParams } from '../../shared/core/models/common.models';
import { HttpService } from '../../shared/core/service/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/core/service/helper.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MerchantRegParams } from '../../shared/core/models/common.models';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  merchantRegisterForm: FormGroup;
  accountType: any;
  submitted = false;
  registraionSuccess = false;
  registrationMsg: any;
  RegistrationData = new registrationParams();
  MerchantRegData = new MerchantRegParams();
  errorMsg: any;
  successMsg: any;
  email: any;
  pass: boolean;
  category: any;
  errMsg: string;
  constructor(private formBuilder: FormBuilder, private httpService: HttpService, private router: Router,
    private helperService: HelperService, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.category = this.route.snapshot.params['category'];
    if (this.category === 'consumer') {
      this.buildRegistraionForm();
    }
    if (this.category === 'merchant') {
      this.buildMerchantRegistrationForm();
    }
    this.registrationMsg = '';
  }



  get f() { return this.registerForm.controls; }
  get g() { return this.merchantRegisterForm.controls; }

  buildRegistraionForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  buildMerchantRegistrationForm() {
    this.merchantRegisterForm = this.formBuilder.group({
      bpprimaryContactName: ['', Validators.required],
      bpname: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      bpcity: ['', [Validators.required, Validators.pattern('^[a-zA-Z\- ]+$')]],
      bpzipcode: ['', [Validators.required, , Validators.pattern('[0-9]{6}')]],
      bpwebsite: ['', [Validators.required, Validators.pattern('^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$')]]
    });
  }
  onSubmit() {
    if (this.category === 'consumer') {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      this.RegistrationData.emailId = this.registerForm.value.emailId;
      this.RegistrationData.firstName = this.registerForm.value.firstName;
      this.RegistrationData.lastName = this.registerForm.value.lastName;
      this.RegistrationData.password = this.registerForm.value.password;
      console.log(this.RegistrationData);
      const x = this.RegistrationData.emailId;
      const atposition = x.indexOf('@');
      const dotposition = x.lastIndexOf('.');
      if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        this.errMsg = 'Please enter a valid E-mail address!';
        return false;
      }
      this.httpService.postCreateUser(this.RegistrationData).subscribe((response: any) => {
        console.log(response);
        if (response.status === 202) {
          console.log(response.body.statusMessage);
          this.successMsg = response.body.statusMessage;
          this.email = response.body.responseData.emailId;
          this.helperService.setToLocalStorage('email', this.email);
          this.pass = true;
          // this.router.navigate(['/auth/complete']);
        }
      }, error => {
        console.log(error);
        this.errorMsg = error.error.statusMessage;
        console.log(this.errorMsg);
      });
    }
    if (this.category === 'merchant') {
      this.submitted = true;
      if (this.merchantRegisterForm.invalid) {
        return;
      }
      this.MerchantRegData.bpprimaryContactName = this.merchantRegisterForm.value.bpprimaryContactName;
      this.MerchantRegData.bpname = this.merchantRegisterForm.value.bpname;
      this.MerchantRegData.emailId = this.merchantRegisterForm.value.emailId;
      this.MerchantRegData.password = this.merchantRegisterForm.value.password;
      this.MerchantRegData.bpcity = this.merchantRegisterForm.value.bpcity;
      this.MerchantRegData.bpzipcode = this.merchantRegisterForm.value.bpzipcode;
      this.MerchantRegData.bpwebsite = this.merchantRegisterForm.value.bpwebsite;
      console.log(this.MerchantRegData);
      // Email Id  Validation
      if (this.MerchantRegData.emailId !== '') {
        const x = this.MerchantRegData.emailId;
        const atposition = x.indexOf('@');
        const dotposition = x.lastIndexOf('.');
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
          this.errMsg = 'Please enter a valid E-mail address!';
          return false;
        }
      }
      // Zip code Validation
      // if (this.MerchantRegData.bpzipcode !== '') {
      //   const check = /^\d{6}$|^\d{5}$/;
      //   if (!check.test(this.MerchantRegData.bpzipcode)) {
      //     this.errMsg = 'Enter Valid Zip Code';
      //     return false;
      //   }
      // }
      this.httpService.postMerchantCreateUser(this.MerchantRegData).subscribe((response: any) => {
        console.log(response);
        if (response.status === 200) {
          this.router.navigate(['/auth/login']);
        }
      }, error => {
        console.log(error);
        this.errorMsg = error.error.message;
        console.log(this.errorMsg);
      });
    }
  }
  get primEmail(){
    return this.merchantRegisterForm.get('emailId')
    }

  get passVal(){
      return this.merchantRegisterForm.get('password')
      }
  get zipVal(){
        return this.merchantRegisterForm.get('bpzipcode')
        }
  get webVal(){
          return this.merchantRegisterForm.get('bpwebsite')
          }
  get cityVal(){
            return this.merchantRegisterForm.get('bpcity')
            }
}
