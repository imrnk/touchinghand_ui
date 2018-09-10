import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes : Routes = [
    {path : '', redirectTo : '/login', pathMatch: 'full' },
    {path : 'page-not-found', component : PageNotFoundComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
   })
export class AppRoutingModule {

}