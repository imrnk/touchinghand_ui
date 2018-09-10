import { AuthGuard } from './../utility/auth-guard.service';
import { TreatmentDataComponent } from './treatment-data/treatment-data.component';
import { SessionComponent } from './session/session.component';
import { MseComponent } from './mse/mse.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { SearchClientComponent } from './search-client/search-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientComponent } from './client.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const clientRoutes : Routes =  [
    {path : 'client',  component : ClientComponent, canActivateChild: [AuthGuard], children : [
        {path : '', redirectTo : 'search', pathMatch: 'full'},
        {path : 'add', component :  AddClientComponent},
        {path : 'search', component :  SearchClientComponent},
        {path : ':id', component : ClientDetailComponent},        
        {path : ':id/mse', component : MseComponent},
        {path : ':id/session/:sid', component : SessionComponent},
        {path : ':id/session', component : SessionComponent},
        {path : ':id/session/:sid/treatment-data', component : TreatmentDataComponent}
    ]},
]

@NgModule({
    imports : [
        RouterModule.forChild(clientRoutes)
    ],
    exports : [RouterModule]
})
export class ClientRoutingModule {

}