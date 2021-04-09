import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() closeNavbar = new EventEmitter<void>();

  @Input() openNav: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeNav() {
    this.closeNavbar.emit();
  }


  redirectTo(routeUrl: string) {
    this.router.navigateByUrl(routeUrl);
    this.closeNav();
  }


}
