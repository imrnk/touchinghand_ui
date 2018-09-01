import { RegisterComponent } from './login/register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './utility/auth-guard.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { MseComponent } from './client/mse/mse.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { SessionComponent } from './client/session/session.component';
import { TreatmentDataComponent } from './client/treatment-data/treatment-data.component';
import { SearchClientComponent } from './client/search-client/search-client.component';
import { SessionsComponent } from './sessions/sessions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes : Routes = [
    {path : '', redirectTo : '/login', pathMatch: 'full' },
    {path : 'login', component : LoginComponent },
    {path : 'register', component : RegisterComponent },
    //{path : '', redirectTo : '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
    {path : 'dashboard', component : DashboardComponent, canActivate: [AuthGuard] },
    {path : 'client',  component : ClientComponent, canActivateChild: [AuthGuard], children : [
        {path : '', redirectTo : 'search', pathMatch: 'full'},
        {path : 'add', component :  AddClientComponent},
        {path : 'search', component :  SearchClientComponent},
        {path : ':id', component : ClientDetailComponent},        
        {path : ':id/mse', component : MseComponent},
        {path : ':id/sessions', component : SessionsComponent},
        {path : ':id/session/:sid', component : SessionComponent},
        {path : ':id/session', component : SessionComponent},
        {path : ':id/session/:sid/treatment-data', component : TreatmentDataComponent},
        {path : 'sessions', component :  SessionsComponent}
    ]},
    {path : 'page-not-found', component : PageNotFoundComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
   })
export class AppRoutingModule {

}