import {Component, OnInit} from '@angular/core';
import {PlayerService} from "./player.service";
import {PlayerModel} from "./player.model";
import {TeamService} from "../team/team.service";
import {RoleService} from "../role/role.service";
import {PositionService} from "../position/position.service";
import {TeamModel} from "../team/team.model";
import {RoleModel} from "../role/role.model";
import {PositionModel} from "../position/position.model";

@Component({
  selector: 'app-root',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  constructor(private playerService: PlayerService,
              private teamService: TeamService,
              private roleService: RoleService,
              private positionService: PositionService) {
  }

  players: PlayerModel[] = [];
  teams: TeamModel[] = [];
  roles: RoleModel[] = [];
  positions: PositionModel[] = [];
  showForm: boolean = false;
  formModel: PlayerModel = new PlayerModel();

  ngOnInit(): void {
    this.get();
    this.getTeams();
    this.getRoles();
    this.getPositions();
  }

  getTeams() {
    let params: any = {};
    //todo пока так
    params['page'] = 0;
    params['size'] = 100;
    this.teamService.get(params).subscribe(
      data => {
        // @ts-ignore
        this.teams = data
      },
      error => {
        alert( "Ошибка" );
      }
    )
  }

  getRoles() {
    this.roleService.get().subscribe(
      data => {
        // @ts-ignore
        this.roles = data
      },
      error => {
        alert( "Ошибка" );
      }
    )
  }

  getPositions() {
    this.positionService.get().subscribe(
      data => {
        // @ts-ignore
        this.positions = data
      },
      error => {
        alert( "Ошибка" );
      }
    )
  }

  get() {
    this.playerService.get().subscribe(
      data => {
        // @ts-ignore
        this.players = data
      },
      error => {
        alert( "Ошибка" );
      }
    )
  }

  delete(id: string) {
    this.playerService.delete(id).subscribe(
      data => {
        this.get();
      },
      error => {
        this.get();
        alert( "Ошибка" );
      }
    )
  }

  save() {
    this.playerService.save(this.formModel).subscribe(
      data => {
        this.hideForm();
        this.get();
      },
      error => {
        this.hideForm();
        this.get();
        alert( "Ошибка" );
      }
    )
  }

  openForm(model: PlayerModel = new PlayerModel()) {
    this.showForm = true;
    this.formModel = model;
  }

  hideForm() {
    this.showForm = false;
    this.formModel = new PlayerModel();
  }
}
