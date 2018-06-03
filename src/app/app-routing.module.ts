
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
    {path : '', redirectTo : '/dashboard', pathMatch: 'full' },
    {path : 'dashboard', component : DashboardComponent },
    {path : 'client',  component : ClientComponent, children : [
        {path : '', redirectTo : 'search', pathMatch: 'full'},
        {path : 'add', component :  AddClientComponent},
        {path : 'search', component :  SearchClientComponent},
        {path : ':id', component : ClientDetailComponent},        
        {path : ':id/mse', component : MseComponent},
        {path : ':id/sessions', component : SessionsComponent},
        {path : ':id/session', component : SessionComponent},
        {path : ':id/treatment-data', component : TreatmentDataComponent},
        {path : 'sessions', component :  SessionsComponent}
    ]},
    {path : 'page-not-found', component : PageNotFoundComponent },
    {path : '**', redirectTo : '/page-not-found' }
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
   })
export class AppRoutingModule {

}