import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";


const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
