import {Component, OnInit} from '@angular/core';
import {MobileService} from "./mobile.service";
import {Mobile} from "./mobile.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private mobileService: MobileService) {
  }
  mobiles:Mobile[] = [
    {
      id: 1,
      name: "xyz",
      price: 200,
      ram: 6,
      storage: 64
    }
  ];
  formHeader: string = "Add mobile";
  showForm: boolean = false;
  formModel: Mobile = new Mobile();

  ngOnInit(): void {

  }

  delete(id: number) {

  }

  openForm(mobile: Mobile = new Mobile()) {
    this.showForm = true;
    this.formModel = mobile;
  }

  hideForm() {
    this.showForm = false;
    this.formModel = new Mobile();
  }
}
