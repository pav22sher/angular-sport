import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamComponent} from "./team/team.component";
import {PositionComponent} from "./position/position.component";
import {RoleComponent} from "./role/role.component";
import {PlayerComponent} from "./player/player.component";


const routes: Routes = [
  {path: '', redirectTo: 'team', pathMatch: 'full'},
  {path: 'team', component: TeamComponent},
  {path: 'player', component: PlayerComponent},
  {path: 'role', component: RoleComponent},
  {path: 'position', component: PositionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
