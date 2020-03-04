import { CreateOfferComponent } from './create-offer/create-offer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RunCampaignComponent } from './run-campaign/run-campaign.component';
import { DraftOfferComponent } from './draft-offer/draft-offer.component';
import { FinaliseOfferComponent } from './finalise-offer/finalise-offer.component';

export const MerchantRoutes = [
    { path: 'create-offer', component: CreateOfferComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'run-compaign', component: RunCampaignComponent },
    { path: 'draft-offer', component: DraftOfferComponent },
    { path: 'final-offer', component: FinaliseOfferComponent }
    
];
