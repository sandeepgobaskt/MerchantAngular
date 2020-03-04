import { SubRoutes } from './sub.route';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild(SubRoutes)
    ],
    exports: [RouterModule]
})
export class SubRoutingModule { }
