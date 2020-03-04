import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { HelperService } from 'src/app/shared/core/service/helper.service';
import htmlToImage from 'html-to-image';
import { HttpService } from 'src/app/shared/core/service/http.service';
import { CreateOfferParams } from 'src/app/shared/core/models/common.models';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { UploadService } from 'src/app/shared/core/service/upload.service';

@Component({
  selector: 'app-finalise-offer',
  templateUrl: './finalise-offer.component.html',
  styleUrls: ['./finalise-offer.component.scss']
})
export class FinaliseOfferComponent implements OnInit {

  base64TrimmedURL: any;
  base64DefaultURL: any; 
  generatedImage: any;
  tempurl:any;
  image:String;

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
  @Input() draftedData: any;
  savedData: any;
  created = false;
   date = new Date().valueOf();
  // tslint:disable-next-line:max-line-length
  constructor(private uploadService:UploadService ,private modalService: NgbModal, private helperService: HelperService, private formBuilder: FormBuilder, private httpService: HttpService, private route: ActivatedRoute) { }

 
  // Creation of form to send data to backend
  offerForm() {
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
    this.draftedData.selectedTemplateId = tempName;
  }
  // To get the changed color
  changeColor(newColor) {
    if (this.draftedData.selectedTemplateId === 'TEMP1') {
      this.backgroundColor = newColor;
      this.backgroundCss = {
        background: this.backgroundColor,
      };
    }
    if (this.draftedData.selectedTemplateId === 'TEMP2') {
      this.backgroundColor1 = newColor;
      this.backgroundCss1 = {
        background: this.backgroundColor1,
      };
    }
  }
  previewTemplate() {
    // Converting html to image
    const frond = document.getElementById('offerfrond'); // Coupon frond side html
    htmlToImage.toPng(frond).then((frondUrl) => {
      this.frondImg = new Image();
      this.frondImg.src = frondUrl;
      this.tempurl=frondUrl;
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
  getImage():any {
    this.getBase64ImageFromURL(this.createOfferForm.value.frontTemplateUrl).subscribe((data:string) => {
      this.base64TrimmedURL = data;
    });
    // Naming the image
    //const date = new Date().valueOf();
    let text = '';
    const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possibleText.charAt(Math.floor(Math.random() *    possibleText.length) );
    }
    // Replace extension according to your media type like this 
      //let imageName = date + '.' + text + '.jpeg';
      let imageName=this.bpname+'/'+this.date+'.jpeg';
      console.log(imageName);
      
     
      console.log(this.image);
    // call method that creates a blob from dataUri
      let imageBlob;
      this.dataURItoBlob(this.base64TrimmedURL).subscribe(data => {
        imageBlob = data;
      });
    
      const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' });
      this.generatedImage =  window.URL.createObjectURL(imageFile);
     this.uploadService.uploadFile(imageFile);
           
    
      //window.open(this.generatedImage);
      this.image=imageName;
    }
    
  // Creation of final offer
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
        console.log("drafted data"+this.draftedData.lmofferTitle);
        // Assigining the values to createOfferData
         //this.createOfferData.id="3c491f7f-b23b-4c35-ba1d-fd98450521fe";
         this.createOfferData.lmofferTitle =  this.createOfferForm.value.lmofferTitle;
         this.createOfferData.lmdescription = this.createOfferForm.value.lmdescription;
         this.createOfferData.lmofferType=this.createOfferForm.value.lmofferType;
         this.createOfferData.offerCurrency=this.createOfferForm.value.offerCurrency;
         this.createOfferData.lmofferValue=this.createOfferForm.value.lmofferValue;
         this.createOfferData.offerExpiryDate=this.createOfferForm.value.offerExpiryDate;
         this.createOfferData.offerStartDate=this.createOfferForm.value.offerStartDate;
         this.createOfferData.offer_TAndC_ApplicableOn=this.createOfferForm.value.offer_TAndC_ApplicableOn;
         this.createOfferData.offer_TAndC_UsageTerms=this.createOfferForm.value.offer_TAndC_UsageTerms;
         this.createOfferData.offer_TAndC_ValidFor=this.createOfferForm.value.offer_TAndC_ValidFor;
       //  this.createOfferData.frontTemplateUrl="https://gobaskt-templates.s3.us-east-2.amazonaws.com/offer"+this.image;
       this.createOfferData.frontTemplateUrl="https://gobaskt-templates.s3.us-east-2.amazonaws.com/offer/"+this.bpname+'/'+this.date+'.jpeg';
     
       this.createOfferData.webOfferImage1=this.draftedData.webOfferImage1;
       this.createOfferData.mobileOfferImage1=this.draftedData.mobileOfferImage1;
         this.createOfferData.lmname=this.bpname;
         this.createOfferData.lmofferValue=this.createOfferForm.value.lmofferValue;
        
      
        
         console.log(this.generatedImage);    
           // this.uploadService.uploadFile(this.generatedImage);
       //this.createOfferData.offer_TAndC_UsageTerms = this.createOfferForm.offer_TAndC_UsageTerms;
        // this.createOfferData.offer_TAndC_ApplicableOn = this.createOfferForm.value.offer_TAndC_ApplicableOn;
        // this.createOfferData.offer_TAndC_ValidFor = this.createOfferForm.value.offer_TAndC_ValidFor;
        // this.createOfferData.offerStartDate = this.createOfferForm.value.offerStartDate;
        // this.createOfferData.offerExpiryDate = this.createOfferForm.value.offerExpiryDate;
        // this.createOfferData.webOfferImage1 = this.createOfferForm.value.webOfferImage1;
        // this.createOfferData.selectedTemplateId = this.createOfferForm.value.selectedTemplateId;
        // this.createOfferData.templateColor1 = this.createOfferForm.value.templateColor1;
        // this.createOfferData.templateColor2 = this.createOfferForm.value.templateColor2;
        // this.createOfferData.frontTemplateUrl = this.createOfferForm.value.frontTemplateUrl;
        // this.createOfferData.backTemplateUrl = this.createOfferForm.value.backTemplateUrl;
        // this.createOfferData.lmname = this.createOfferForm.value.lmname;
        // this.createOfferData.id = this.createOfferForm.value.id;
        console.log(this.createOfferData);
        console.log(this.createOfferData.frontTemplateUrl);
        console.log(this.createOfferForm.value.lmofferTitle);
        console.log(this.draftedData);
        this.draftedData.frontTemplateUrl="https://gobaskt-templates.s3.us-east-2.amazonaws.com/offer/"+this.bpname+'/'+this.date+'.jpeg';
       
        this.httpService.createLocalOffers1(this.draftedData).subscribe((response: any) => {
          console.log("after"+this.createOfferData.frontTemplateUrl);
          console.log(response);
          this.getImage();
          if (response.status === 200) {
            this.successMsg = 'Offer Created Suceesfully';
            this.created = true;
           
          // this.uploadService.uploadFile(imageFile)
                    
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

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      // create an image object
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
          // This will call another method that will create image from url
          img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
           observer.error(err);
        };
      } else {
          observer.next(this.getBase64Image(img));
          observer.complete();
      }
    });
   }
   getBase64Image(img: HTMLImageElement) {
    // We create a HTML canvas object that will create a 2d image
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    // This will draw image    
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    var dataURL = canvas.toDataURL("image/png");
    this.base64DefaultURL = dataURL;
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  //url:this.frondImg.src;
 
    dataURItoBlob(dataURI): Observable<Blob> {
      return Observable.create((observer: Observer<Blob>) => {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
          int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/jpeg' });
        observer.next(blob);
        observer.complete();
      });
    } 
    ngOnInit() {
      console.log(this.draftedData);
      this.backgroundCss = {
        background: this.draftedData.templateColor1
      };
      this.backgroundCss1 = {
        background: this.draftedData.templateColor2
      };
      this.bpname = this.helperService.getFromLocalStorage('bpname');
      this.offerForm();
     // this.getImage();
      
        //const file = this.selectedFiles.item(0);
      
        
    }
 
}
