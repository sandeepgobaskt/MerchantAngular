import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { HelperService } from 'src/app/shared/core/service/helper.service';
import htmlToImage from 'html-to-image';
import { HttpService } from 'src/app/shared/core/service/http.service';
import { CreateOfferParams } from 'src/app/shared/core/models/common.models';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { UploadService } from 'src/app/shared/core/service/upload.service';
import {AppCustomDirective} from 'src/app/merchant/draft-offer/draft-offer.validators';

@Component({
  selector: 'app-draft-offer',
  templateUrl: './draft-offer.component.html',
  styleUrls: ['./draft-offer.component.scss']
})
export class DraftOfferComponent implements OnInit {
  date = new Date().valueOf();

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
  saveDraft = false;
  file:File;
  image:any;
  minDate = new Date();
  maxDate = new Date().setDate(2);
  DaterForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(private fb:FormBuilder,private modalService: NgbModal,private uploadService:UploadService, private helperService: HelperService, private formBuilder: FormBuilder, private httpService: HttpService, private router: Router) { 
 
  }
  
  selectedFiles:FileList;
  ngOnInit() {
    this.bpname = this.helperService.getFromLocalStorage('bpname');
    this.draftOffer();
    this.DaterForm = this.fb.group(
      {
        FromDate:['',[AppCustomDirective.fromDateValidator]],
        FromTime:[''],
        ToDate:['',[AppCustomDirective.ToDateValidator]],
        ToTime:['']
      },{validator:[AppCustomDirective.timeValidator]
      
      
      }
         
       );
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
      lmofferValue: ['', Validators.required],
      offerStartDate: [new Date().toLocaleDateString()],
      offerExpiryDate: [new Date().toLocaleDateString(), Validators.required],
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

  upload(){
   
    let imageName=this.bpname+'/offerImage/'+this.date+'.jpeg';
   
    this.file=this.selectedFiles.item(0);
    const imageFile = new File([this.file], imageName, { type: 'image/jpeg' });
    console.log(imageName)
    //this.image =this.file.name;
    this.uploadService.uploadFile(imageFile);
  }
  selectFile(event){
    this.selectedFiles=event.target.files;

  }
  saveAsDraft() {

    // this.httpService.createLocalOffers(this.createOfferForm.value).toPromise().then(() => {
    //   this.successMsg = 'Registered Successfully';
    // });
    // if (this.createOfferForm.invalid) {
    //   return;
    // }
    // console.log(this.createOfferForm.value);
    this.createOfferForm.value.selectedTemplateId = this.template;
    this.createOfferForm.value.templateColor1 = this.backgroundColor;
    this.createOfferForm.value.templateColor2 = this.backgroundColor1;
    this.createOfferForm.value.webOfferImage1='https://gobaskt-templates.s3.us-east-2.amazonaws.com/offer/'+this.bpname+'/offerImage/'+this.date+'.jpeg';
    this.createOfferForm.value.mobileOfferImage1='https://gobaskt-templates.s3.us-east-2.amazonaws.com/offer/'+this.bpname+'/offerImage/'+this.date+'.jpeg';
    this.createOfferData.lmname=this.createOfferForm.value.lmname;
    this.createOfferData.lmofferTitle=this.createOfferForm.value.lmofferTitle;
    this.createOfferData.lmofferType=this.createOfferForm.value.lmofferType;
    this.createOfferData.lmdescription=this.createOfferForm.value.lmdescription;
    this .createOfferData.offer_TAndC_UsageTerms=this.createOfferForm.value.offer_TAndC_UsageTerms;
    this.createOfferData.offer_TAndC_ApplicableOn=this.createOfferForm.value.offer_TAndC_ApplicableOn;
    this.createOfferData.offer_TAndC_ValidFor=this.createOfferForm.value.offer_TAndC_ValidFor;
    this.createOfferData.lmofferValue=this.createOfferForm.value.lmofferValue;
    this.createOfferData.offerStartDate=this.createOfferForm.value.offerStartDate;
    this.createOfferData.offerExpiryDate=this.createOfferForm.value.offerExpiryDate;
    this.createOfferData.webOfferImage1=this.createOfferForm.value.webOfferImage1;
    this.createOfferData.selectedTemplateId=this.createOfferForm.value.selectedTemplateId;
    this.createOfferData.templateColor1=this.createOfferForm.value.templateColor1;
    this.createOfferData.templateColor2=this.createOfferForm.value.templateColor2;
    this.createOfferData.frontTemplateUrl=this.createOfferForm.value.frontTemplateUrl;
    this.createOfferData.backTemplateUrl=this.createOfferForm.value.backTemplateUrl;
    console.log(this.createOfferData);
    
    this.upload();
    this.saveDraft=true;

    // this.httpService.createLocalOffers(this.createOfferData).subscribe((response: any)  => {
    //   console.log(response);
    //   if (response.statusCode === 200) {
        
    //     this.successMsg = 'Registered Successfully';
    //     this.saveDraft=true;
        
    //   }
    // }, error => {
    //   console.log(error);
     
    //   // this.registered = true;
    //   this.errorMsg = error.error.message;
    // });
  }
}
  // }
