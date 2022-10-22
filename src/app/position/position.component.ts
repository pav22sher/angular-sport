import {Component, OnInit} from '@angular/core';
import {PositionService} from "./position.service";
import {PositionModel} from "./position.model";

@Component({
  selector: 'app-root',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  constructor(private service: PositionService) {
  }

  positions: PositionModel[] = [];
  formHeader: string = "Позиция игрока";
  showForm: boolean = false;
  formModel: PositionModel = new PositionModel();

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.service.get().subscribe(
      data => {
        // @ts-ignore
        this.positions = data
      },
      error => {
        alert( "Ошибка" );
      }
    )
  }

  delete(id: string) {
    this.service.delete(id).subscribe(
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
    this.service.save(this.formModel).subscribe(
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

  openForm(model: PositionModel = new PositionModel()) {
    this.showForm = true;
    this.formModel = model;
  }

  hideForm() {
    this.showForm = false;
    this.formModel = new PositionModel();
  }
}
