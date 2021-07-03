import { MenuToggleService } from './../header/menu-toggle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  shrinkContent: boolean;

  currentYear = new Date().getFullYear();

  constructor(private menuToggleService: MenuToggleService) { }

  ngOnInit(): void {
    this.menuToggleService.menuToggler.subscribe((resp) => {
      this.shrinkContent = resp;
      console.log(resp);
    });
  }

}
