// /// <reference types="@types/googlemaps" />
import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { CommunicationService } from '../../shared/core/service/communication.service';
import { Subscription } from 'rxjs';
import { HttpService } from '../../shared/core/service/http.service';
// import { MapsAPILoader, MouseEvent } from '@agm/core';
// import { } from '@types/googlemaps';
// declare var google: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // bgClass = 'home';
  cartlength: any;
  subscription: Subscription;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  // @ViewChild('search')
  public searchElementRef: ElementRef;
  constructor(private communicationService: CommunicationService, public httpService: HttpService, ) {
    // private mapsAPILoader: MapsAPILoader,
  // private ngZone: NgZone
    // this.subscription = this.communicationService.getsubject().subscribe(obj => {
    //   //   // console.log("obj", obj);
    //   this.cartlength = obj.value;
    //   console.log(this.cartlength);
    // });
  }

  ngOnInit() {
    this.addedItem();
    // this.mapsAPILoader.load().then(() => {
    //   this.setCurrentLocation();
    //   this.geoCoder = new google.maps.Geocoder();

    //   const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: ['address']
    //   });
    //   autocomplete.addListener('place_changed', () => {
    //     this.ngZone.run(() => {
    //       // get the place result
    //       const place: google.maps.places.PlaceResult = autocomplete.getPlace();

    //       // verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }

    //       // set latitude, longitude and zoom
    //       this.latitude = place.geometry.location.lat();
    //       this.longitude = place.geometry.location.lng();
    //       this.zoom = 12;
    //     });
    //   });
    // });
  }
  addedItem() {
    this.httpService.getBasketDetails().subscribe((response: any) => {
      console.log(response);
      if (response.status === 200) {
        console.log(response.body.data);
        if (response.body.data) {
          if (response.body.data.length !== 0) {
            this.cartlength = response.body.data.length;
          }
        }
      }
    }, error => {
      console.log(error);
    });
  }
  // private setCurrentLocation() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 15;
  //     });
  //   }
  // }
  // markerDragEnd($event: MouseEvent) {
  //   console.log($event);
  //   this.latitude = $event.coords.lat;
  //   this.longitude = $event.coords.lng;
  //   this.getAddress(this.latitude, this.longitude);
  // }

  // getAddress(latitude, longitude) {
  //   this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
  //     console.log(results);
  //     console.log(status);
  //     if (status === 'OK') {
  //       if (results[0]) {
  //         this.zoom = 12;
  //         this.address = results[0].formatted_address;
  //       } else {
  //         window.alert('No results found');
  //       }
  //     } else {
  //       window.alert('Geocoder failed due to: ' + status);
  //     }

  //   });
  // }
}
