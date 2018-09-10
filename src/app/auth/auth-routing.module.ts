import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

import { RegisterComponent } from './../auth/register/register.component';
import { LoginComponent } from './../auth/login.component';


const authRoutes : Routes = [
    {path : 'login', component : LoginComponent },
    {path : 'register', component : RegisterComponent }
]

@NgModule({
    imports : [
        RouterModule.forChild(authRoutes)
    ],
    exports : [RouterModule]
})
export class AuthRoutingModule {

}