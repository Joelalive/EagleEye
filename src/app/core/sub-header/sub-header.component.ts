import { MenuToggleService } from './../header/menu-toggle.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  openToggle: boolean;

  constructor(private menuToggleService: MenuToggleService) { }

  ngOnInit(): void {
    this.menuToggleService.menuToggler.subscribe((resp) => {
      this.openToggle = resp;
      console.log(resp);
    });
  }

  openNav() {
    this.menuToggleService.toggleMenu(true);
  }

  isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

}
