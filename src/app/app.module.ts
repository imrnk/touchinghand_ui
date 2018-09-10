import { ClientModule } from './client/client.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptorProvider } from './utility/error.interceptor';
import { TokenStorage } from './utility/token-storage.service';
import { AuthenticationService } from './utility/auth.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './common/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    HttpModule,
    AuthModule,
    ClientModule,
    DashboardModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    TokenStorage,
    ErrorInterceptorProvider, 
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
