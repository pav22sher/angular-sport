import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamComponent} from "./team/team.component";
import {PositionComponent} from "./position/position.component";


const routes: Routes = [
  {path: '', redirectTo: 'team', pathMatch: 'full'},
  {path: 'team', component: TeamComponent},
  {path: 'position', component: PositionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
