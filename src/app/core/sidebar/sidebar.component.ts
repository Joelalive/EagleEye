import { MenuToggleService } from './../header/menu-toggle.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  openNav: boolean;

  constructor(private router: Router, private menuToggleService: MenuToggleService) { }

  ngOnInit(): void {
    this.menuToggleService.menuToggler.subscribe((resp) => {
      this.openNav = resp;
      console.log(resp);
    });
  }

  closeNav() {
    this.menuToggleService.toggleMenu(false);
  }


  redirectTo(routeUrl: string) {
    this.router.navigateByUrl(routeUrl);
    this.closeNav();
  }


}
