import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { authApiUrl } from './../../core/constants/common.constants';
import { Observable } from 'rxjs';
import { HelperService } from './helper.service';
import { CreateOfferParams, RunCampaign } from '../models/common.models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getRegisterUrl() {
    throw new Error('Method not implemented.');
  }
  constructor(public http: HttpClient, private helperService: HelperService) { }
  // tslint:disable-next-line:member-ordering
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };
  getHeader() {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      // .set('Accept', 'application/json; charset=utf-8')
      // .set('Access-Control-Allow-Origin', '*');
  }

  getToken() {
    if (this.helperService.getFromLocalStorage('tokenType')) {
      return (this.helperService.getFromLocalStorage('tokenType') + ' ' + this.helperService.getFromLocalStorage('accessToken'));
    } else {
      return;
    }
  }
  postCreateUser(message) {
    // tslint:disable-next-line:max-line-length
    return this.http.post('http://3.134.106.42:8084/api/gobaskt/createUser', message, { headers: this.getHeader(), observe: 'response' });
  }

  getUser() {
    return this.http.get(authApiUrl.getRegisterUrl, { headers: this.getHeader(), observe: 'response' });
  }
//authApiUrl.gobasktUrl
  getOffers() {
    return this.http.get('https://api.gobaskt.com/dev-localOffers/gobaskt/offers', { headers: this.getHeader(), observe: 'response' });
  }

  getlmOffers(id) {
    return this.http.get(authApiUrl.getlmOfferUrl + '/' + id, { headers: this.getHeader(), observe: 'response' });
  }
  getSaveOffers(id) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://18.223.122.108:8086/gobaskt/basket/coupons' + '/' + id, { headers: this.getHeader(), observe: 'response' });
  }
  getBasketDetails() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://18.223.122.108:8086/gobaskt/basket/getBasket', { headers: this.getHeader(), observe: 'response' });
  }
  getBrandOffers() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://18.223.122.108:8083/gobaskt/brandoffers/getBrandOffers', { headers: this.getHeader(), observe: 'response' });
    // tslint:disable-next-line:max-line-length
  }
  getBrandDescription(id) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://18.223.122.108:8083/gobaskt/brandoffers/id' + '/' + id, { headers: this.getHeader(), observe: 'response' });
  }
  searchBrandData(data) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://18.223.122.108:8083/gobaskt/brandoffers/' + data, { headers: this.getHeader(), observe: 'response' });
  }
  searchLocalData(data) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://18.223.122.108:8083/gobaskt/lmOffers/searchBy/' + data, { headers: this.getHeader(), observe: 'response' });
  }
  getBrandSaveOffers(id) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://18.223.122.108:8086/gobaskt/basket/coupons/brand' + '/' + id, { headers: this.getHeader(), observe: 'response' });
  }
  getId(id) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://3.134.106.42:8084/api/gobaskt/getUsers/' + id, { headers: this.getHeader(), observe: 'response' });
  }
  // Email
  // emailIt(email, data) {
  // tslint:disable-next-line:max-line-length
  // return this.http.post('http://localhost:8082/SendMail/' + email + '/' + data , {  headers: this.getHeader(), observe: 'response', responseType: 'text' });
  // }
  deleteSavedOffers(offerId) {
    // tslint:disable-next-line:max-line-length
    return this.http.delete('http://18.223.122.108:8086/gobaskt/basket/id/' + offerId, { headers: this.getHeader(), observe: 'response' });
  }
  postMerchantCreateUser(message) {
    // tslint:disable-next-line:max-line-length
    return this.http.post('http://3.134.106.42:8084/api/gobaskt/merchant/createMerchant', message, { headers: this.getHeader(), observe: 'response' });
  }
  merchantLogin(message) {
    // tslint:disable-next-line:max-line-length
    return this.http.post('http://3.134.106.42:8084/api/gobaskt/merchant/login', message, { headers: this.getHeader(), observe: 'response' });
  }
  createLocalOffers(message): Observable<CreateOfferParams> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<CreateOfferParams>('https://api.gobaskt.com/dev-localOffers/gobaskt/offers',message).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
     
  );
  }
  createLocalOffers1(message): Observable<CreateOfferParams> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<CreateOfferParams>('https://api.gobaskt.com/dev-localOffers/gobaskt/offers/',message).pipe(
      tap(data => console.log('All: ' + data)),
     
  );
  }



  // createLocalOffers(createOfferParams: CreateOfferParams): Observable<any> {
  //   return this.http.post('https://api.gobaskt.com/dev-localOffers/gobaskt/offers', createOfferParams,this.httpOptions
    
         
  //   );
  // } 
  // createLocalOffers(message) {
  //   // tslint:disable-next-line:max-line-length
  //   return this.http.post('https://api.gobaskt.com/dev-localOffers/gobaskt/offers', message, { headers: this.getHeader(), observe: 'body' });
  // }
  // createLocalOffers(user: CreateOfferParams) {
  //   let headers = new HttpHeaders(
  //     { 'Content-Type': 'application/json' }
     
  //     );
  //     let statusCode= 200;
  //   let options = { headers: headers };
  //   return this.http.post('https://api.gobaskt.com/dev-localOffers/gobaskt/offers', user, options,{ observe: 'response' });
  // }

  // To get the offer created by a particular merchant
  // getMerchantLocalOffer(lmname) {
  //   return this.http.get('https://d3pfw075zgj49s.cloudfront.net/gobaskt/offers/name/' + lmname);
  // }
  // Run the Campaign to publish the offer' 
   runCampaign(id): Observable<any> {
     console.log(id);
    return this.http.get('https://api.gobaskt.com/dev-localOffers/gobaskt/offers/publishOffer/'+id,this.httpOptions);
  }



  getMerchantLocalOffer(lmname): Observable<any> {
    console.log();
    return this.http.get('https://api.gobaskt.com/dev-localOffers/gobaskt/offers/name/' +lmname,this.httpOptions);
  }

}