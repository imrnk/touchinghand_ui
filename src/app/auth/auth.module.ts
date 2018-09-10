import { NgModule } from '@angular/core';

import { RegisterComponent } from './../auth/register/register.component';
import { LoginComponent } from './../auth/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
    LoginComponent,
    RegisterComponent    
    ],
    imports: [
    CommonModule,
    ReactiveFormsModule,    
    FormsModule,
    AuthRoutingModule
    ],
    providers: []

})
export class AuthModule
{

}