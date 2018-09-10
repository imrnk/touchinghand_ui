import { SidebarComponent } from './../sidebar/sidebar.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { ErrorPageComponent } from './../error-page/error-page.component';
import { AppRoutingModule } from './../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      PageNotFoundComponent,
      ErrorPageComponent,
      SidebarComponent,
    ],
    imports: [
      CommonModule,
      AppRoutingModule
    ],
    exports: [
      AppRoutingModule,
      HeaderComponent,
      FooterComponent,
      PageNotFoundComponent,
      ErrorPageComponent,
      SidebarComponent
    ],
    providers: []
  })
  export class CoreModule {}