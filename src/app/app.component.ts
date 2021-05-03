import { MenuToggleService } from './core/header/menu-toggle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'EagleEye';

  shrinkContent: boolean;

  constructor(private menuToggleService: MenuToggleService) {}

  ngOnInit(): void {
    this.menuToggleService.menuToggler.subscribe((resp) => {
      this.shrinkContent = resp;
      console.log(resp);
    });
  }

}
