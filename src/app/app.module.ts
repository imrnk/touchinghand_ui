import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { MseComponent } from './client/mse/mse.component';
import { TreatmentDataComponent } from './client/treatment-data/treatment-data.component';
import { SessionComponent } from './client/session/session.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { SearchClientComponent } from './client/search-client/search-client.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SideNotificationsComponent } from './side-notifications/side-notifications.component';
import { UpcomingSessionsComponent } from './sessions/upcoming-sessions/upcoming-sessions.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientService } from './client/client.service';
import { DropdownDirective } from './directive/dropdown.directive';
import { FuppercasePipe } from './pipes/fuppercase.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    MseComponent,
    TreatmentDataComponent,
    SessionComponent,
    AddClientComponent,
    SearchClientComponent,
    SessionsComponent,
    SideNotificationsComponent,
    UpcomingSessionsComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ClientDetailComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    SidebarComponent,
    DropdownDirective,
    FuppercasePipe
  ],
  imports: [
    BrowserModule,    
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
