import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginRoutingModule } from './login.route';
import { SignupCompleteComponent } from './signup-complete/signup-complete.component';


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        SignupCompleteComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        LoginRoutingModule,
    ],
    exports: [],
    providers: [],
})
export class LoginModule { }
