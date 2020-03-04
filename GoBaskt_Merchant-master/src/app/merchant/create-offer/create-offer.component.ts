import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { HelperService } from 'src/app/shared/core/service/helper.service';
import htmlToImage from 'html-to-image';
import { HttpService } from 'src/app/shared/core/service/http.service';
import { CreateOfferParams } from 'src/app/shared/core/models/common.models';
@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss']
})
export class CreateOfferComponent implements OnInit {
  createOfferForm: FormGroup;
  bpname: string;
  backgroundColor = '#eb4a4a';
  backgroundColor1 = '#85acff';
  template = 'TEMP1';
  backgroundCss = {
    background: this.backgroundColor
  };
  backgroundCss1 = {
    background: this.backgroundColor1
  };
  items: FormArray;
  errorMsg: string;
  frondImg: HTMLImageElement;
  backImg: HTMLImageElement;
  successMsg: any;
  createOfferData = new CreateOfferParams();
  // tslint:disable-next-line:max-line-length
  constructor(private modalService: NgbModal, private helperService: HelperService, private formBuilder: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
    this.bpname = this.helperService.getFromLocalStorage('bpname');
    this.draftOffer();
  }
  get f() { return this.createOfferForm.controls; }
  // Creation of form to send data to backend
  draftOffer() {
    this.createOfferForm = this.formBuilder.group({
      lmofferTitle: ['', Validators.required],
      lmdescription: ['', Validators.required],
      offer_TAndC_UsageTerms: ['', Validators.required],
      offer_TAndC_ApplicableOn: ['', Validators.required],
      offer_TAndC_ValidFor: ['', Validators.required],
      lmofferType: ['', Validators.required],
      offerStartDate: [''],
      offerExpiryDate: ['', Validators.required],
      webOfferImage1: ['', Validators.required],
      selectedTemplateId: [''],
      templateColor1: [''],
      templateColor2: [''],
      frontTemplateUrl: [''],
      backTemplateUrl: [''],
      lmname: this.bpname,
      id: ['']
    });
  }
  // To select the template
  selectTemplate(tempName) {
    this.template = tempName;
  }
  // To get the changed color
  changeColor(newColor) {
    if (this.template === 'TEMP1') {
      this.backgroundColor = newColor;
      this.backgroundCss = {
        background: this.backgroundColor,
      };
    }
    if (this.template === 'TEMP2') {
      this.backgroundColor1 = newColor;
      this.backgroundCss1 = {
        background: this.backgroundColor1,
      };
    }
  }
  // Saving coupon as draft for editing
  saveAsDraft(startDate: HTMLInputElement, endDate: HTMLInputElement) {
    if (this.createOfferForm.invalid) {
      return;
    }
    if (this.createOfferForm.value.lmofferTitle === '') {
      alert('enter');
      return false;
    }
    const sDate = startDate.valueAsDate.toLocaleDateString();
    const eDate = endDate.valueAsDate.toLocaleDateString();
    this.createOfferForm.get('offerStartDate').setValue(sDate);
    this.createOfferForm.get('offerExpiryDate').setValue(eDate);
    // this.createOfferForm.value.offerExpiryDate = eDate;
    this.createOfferForm.value.selectedTemplateId = this.template;
    this.createOfferForm.value.templateColor1 = this.backgroundColor;
    this.createOfferForm.value.templateColor2 = this.backgroundColor1;
    console.log(this.createOfferForm.value);
  }
  // Creation of Coupon
  createOffer() {
    this.createOfferForm.value.selectedTemplateId = this.template;
    this.createOfferForm.value.templateColor1 = this.backgroundColor;
    this.createOfferForm.value.templateColor2 = this.backgroundColor1;
  }
  previewTemplate() {
    // Converting html to image
    const frond = document.getElementById('offerfrond'); // Coupon frond side html
    htmlToImage.toPng(frond).then((frondUrl) => {
      this.frondImg = new Image();
      this.frondImg.src = frondUrl;
      console.log(this.frondImg.src);
      // document.body.appendChild(this.img);
      const back = document.getElementById('offerback'); // Coupon back side html
      htmlToImage.toPng(back).then((backUrl) => {
        this.backImg = new Image();
        this.backImg.src = backUrl;
        console.log(this.backImg.src);
        // assigning template, background color and images to form values
        this.createOfferForm.value.frontTemplateUrl = this.frondImg.src;
        this.createOfferForm.value.backTemplateUrl = this.backImg.src;
        console.log(this.createOfferForm.value);
      })
        .catch((error) => {
          console.error('oops, something went wrong!', error);
        });
    })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  }
  finaliseOffer() {
    const frond = document.getElementById('offerfrond'); // Coupon frond side html
    htmlToImage.toPng(frond).then((frondUrl) => {
      this.frondImg = new Image();
      this.frondImg.src = frondUrl;
      console.log(this.frondImg.src);
      // document.body.appendChild(this.img);
      const back = document.getElementById('offerback'); // Coupon back side html
      htmlToImage.toPng(back).then((backUrl) => {
        this.backImg = new Image();
        this.backImg.src = backUrl;
        console.log(this.backImg.src);
        // assigning template, background color and images to form values
        this.createOfferForm.value.selectedTemplateId = this.template;
        this.createOfferForm.value.templateColor1 = this.backgroundColor;
        this.createOfferForm.value.templateColor2 = this.backgroundColor1;
        this.createOfferForm.value.frontTemplateUrl = this.frondImg.src;
        this.createOfferForm.value.backTemplateUrl = this.backImg.src;
        console.log(this.createOfferForm.value);
        // Assigining the values to createOfferData
        this.createOfferData.lmofferTitle = this.createOfferForm.value.lmofferTitle;
        this.createOfferData.lmdescription = this.createOfferForm.value.lmdescription;
        this.createOfferData.offer_TAndC_UsageTerms = this.createOfferForm.value.offer_TAndC_UsageTerms;
        this.createOfferData.offer_TAndC_ApplicableOn = this.createOfferForm.value.offer_TAndC_ApplicableOn;
        this.createOfferData.offer_TAndC_ValidFor = this.createOfferForm.value.offer_TAndC_ValidFor;
        this.createOfferData.offerStartDate = this.createOfferForm.value.offerStartDate;
        this.createOfferData.offerExpiryDate = this.createOfferForm.value.offerExpiryDate;
        this.createOfferData.webOfferImage1 = this.createOfferForm.value.webOfferImage1;
        this.createOfferData.selectedTemplateId = this.createOfferForm.value.selectedTemplateId;
        this.createOfferData.templateColor1 = this.createOfferForm.value.templateColor1;
        this.createOfferData.templateColor2 = this.createOfferForm.value.templateColor2;
        this.createOfferData.frontTemplateUrl = this.createOfferForm.value.frontTemplateUrl;
        this.createOfferData.backTemplateUrl = this.createOfferForm.value.backTemplateUrl;
        this.createOfferData.lmname = this.createOfferForm.value.lmname;
        this.createOfferData.id = this.createOfferForm.value.id;
        console.log(this.createOfferData);
        this.httpService.createLocalOffers(this.createOfferData).subscribe((response: any) => {
          console.log(response);
          if (response.status === 200) {
            this.successMsg = '';
          }
        }, error => {
          console.log(error);
        });
      })
        .catch((error) => {
          console.error('oops, something went wrong!', error);
        });
    })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  }
}
