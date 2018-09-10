import { AuthInterceptorProvider } from './../utility/auth.interceptor';
import { AuthGuard } from './../utility/auth-guard.service';
import { SessionService } from './session/session-service';
import { ClientsService } from './../clients.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchClientComponent } from './search-client/search-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { SessionComponent } from './session/session.component';
import { TreatmentDataComponent } from './treatment-data/treatment-data.component';
import { MseComponent } from './mse/mse.component';
import { ClientComponent } from './client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientRoutingModule } from './client.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../common/shared.module';

@NgModule({
    declarations: [
    ClientComponent,
    AddClientComponent,
    ClientDetailComponent,
    MseComponent,
    SearchClientComponent,
    SessionComponent,
    TreatmentDataComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,    
        FormsModule,
        SharedModule,
        ClientRoutingModule
    ],
    providers: [
        AuthGuard,
        AuthInterceptorProvider,
        ClientsService,
        SessionService  
    ]
}
)
export class ClientModule {

}