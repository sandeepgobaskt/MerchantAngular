import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../shared/core/service/http.service';
import { Router } from '@angular/router';
import { CompleteParams } from '../../shared/core/models/common.models';
import { HelperService } from 'src/app/shared/core/service/helper.service';

@Component({
  selector: 'app-signup-complete',
  templateUrl: './signup-complete.component.html',
  styleUrls: ['./signup-complete.component.scss']
})
export class SignupCompleteComponent implements OnInit {
  completeForm: FormGroup;
  submitted = false;
  registraionSuccess = false;
  registrationMsg: any;
  completeData = new CompleteParams();
  email: any;
  id: any;
  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private httpService: HttpService, private router: Router, private helperService: HelperService) { }

  ngOnInit() {
    this.email = this.helperService.getFromLocalStorage('email');
    this.buildRegistraionForm();
    this.getEmail();
  }
  get f() { return this.completeForm.controls; }
  buildRegistraionForm() {
    this.completeForm = this.formBuilder.group({
      primaryMobile: ['', Validators.required],
      secondaryMobile: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
    });
  }
  getEmail() {
    this.httpService.getId(this.email).subscribe((response: any) => {
      console.log(response);
      if (response.status === 202) {
        if (response.body) {
          if (response.body.responseData.length !== 0) {
            this.id = response.body.responseData.id;
          }
        }
      }
    }, error => {
      console.log(error);
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.completeForm.invalid) {
      return;
    }
    this.completeData.id = this.id;
    this.completeData.primaryMobile = this.completeForm.value.primaryMobile;
    this.completeData.secondaryMobile = this.completeForm.value.secondaryMobile;
    this.completeData.address = this.completeForm.value.address;
    this.completeData.state = this.completeForm.value.state;
    this.completeData.city = this.completeForm.value.city;
    this.completeData.zipcode = this.completeForm.value.zipcode;
    this.completeData.dateOfBirth = this.completeForm.value.dateOfBirth;
    console.log(this.completeData);
    this.httpService.postCreateUser(this.completeData).subscribe((response: any) => {
      console.log(response);
      if (response.status === 202) {
        this.router.navigate(['/merchant/dashboard']);
      }
    }, error => {
      console.log(error);
    });
  }
}
