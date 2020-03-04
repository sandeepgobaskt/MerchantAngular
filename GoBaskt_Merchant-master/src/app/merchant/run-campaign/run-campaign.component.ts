import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/core/service/helper.service';
import { HttpService } from 'src/app/shared/core/service/http.service';
import { RunCampaign, CreateOfferParams } from '../../shared/core/models/common.models';
@Component({
  selector: 'app-run-campaign',
  templateUrl: './run-campaign.component.html',
  styleUrls: ['./run-campaign.component.scss']
})
export class RunCampaignComponent implements OnInit {
  bpname: string;
  offerData:CreateOfferParams;
  runCampaign = new RunCampaign();
  constructor(private helperService: HelperService, private httpService: HttpService) { }

  ngOnInit() {
    this.bpname = this.helperService.getFromLocalStorage('bpname');
    this.getOffer();
  }
  // Get the offer created by merchant
  getOffer() {
    this.httpService.getMerchantLocalOffer(this.bpname).subscribe((response: any) => {
      console.log(response);
      if(response.statusCode === 200){
        console.log("success");
        this.offerData=response.responseData;
        console.log(this.offerData.lmname);

      }
    }, error => {
      console.log(error);
    }
    );
  }
  // Publish the offer
  runOfferCampaign(id) {
    // Hard Coding Id For Checking purpose
    this.httpService.runCampaign(id).subscribe((response: any) => {
      console.log(response);
      if(response.statusCode === 200){
        console.log("success");
      }

    }, error => {
      console.log(error);
    }


    );
  }
  couponTemplate(){
    
  }
}
