import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NavigationComponent} from "./navigation/navigation.component";
import {RoutingModule} from "./routing.module";

import {PositionComponent} from './position/position.component';
import {PositionService} from "./position/position.service";
import {TeamComponent} from "./team/team.component";
import {TeamService} from "./team/team.service";
import {PlayerComponent} from "./player/player.component";
import {RoleComponent} from "./role/role.component";

@NgModule({
  declarations: [
    TeamComponent,
    PositionComponent,
    RoleComponent,
    PlayerComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [
    PositionService,
    TeamService
  ],
  bootstrap: [NavigationComponent]
})
export class AppModule {
}
