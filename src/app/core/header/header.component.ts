import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  openNav: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.openNav = !this.openNav;
  }


}
