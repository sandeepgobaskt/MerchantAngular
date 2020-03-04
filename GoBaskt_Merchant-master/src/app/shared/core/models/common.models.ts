// tslint:disable-next-line:class-name
export class loginParams {
    emailId: string;
    password: any;
    constructor() {
    }
}
// tslint:disable-next-line:class-name
export class registrationParams {
  get(arg0: string) {
    throw new Error("Method not implemented.");
  }
    emailId: string;
    password: any;
    firstName: string;
    lastName: string;
    constructor() {
    }
}

// tslint:disable-next-line:interface-over-type-literal
export type Product = {
    title: string;
    description: string;
    price: number;
};
export class CompleteParams {
    primaryMobile: number;
    secondaryMobile: number;
    address: string;
    state: string;
    city: string;
    zipcode: string;
    dateOfBirth: string;
    id: string;
    constructor() {
    }
}
export class MerchantRegParams {
    bpprimaryContactName: string;
    bpname: string;
    emailId: string;
    password: any;
    bpcity: string;
    bpzipcode: string;
    bpwebsite: any;
}
export class CreateOfferParams {
    lmofferTitle: string;
    lmdescription: string;
    // tslint:disable-next-line:variable-name
    offer_TAndC_UsageTerms: string;
    // tslint:disable-next-line:variable-name
    offer_TAndC_ApplicableOn: string;
    // tslint:disable-next-line:variable-name
    offer_TAndC_ValidFor: string;
    lmofferType: string;
    lmofferValue:string;
    offerStartDate: string;
    offerExpiryDate: string;
    webOfferImage1: string;
    mobileOfferImage1:string;
    selectedTemplateId: string;
    templateColor1: string;
    templateColor2: string;
    frontTemplateUrl: string;
    backTemplateUrl: string;
    lmname: string;
    offerCurrency:string;
    id: string;
    constructor(){}
}
export class RunCampaign {
    id: any;
}
