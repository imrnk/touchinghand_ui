import { AuthGuard } from './../utility/auth-guard.service';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const dashboardRoutes : Routes = [
    {path : 'dashboard', component : DashboardComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports : [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports : [RouterModule]
})
export class DashboardRoutingModule {

}