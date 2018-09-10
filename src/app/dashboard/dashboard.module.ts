import { AuthInterceptorProvider } from './../utility/auth.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './../utility/auth-guard.service';
import { SessionService } from '../client/session/session-service';
import { ClientsService } from './../clients.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
    declarations: [
        DashboardComponent,
        NotificationsComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    providers: [
        AuthGuard,
        AuthInterceptorProvider,
        ClientsService,
        SessionService  
    ]
}) 
export class DashboardModule {

}