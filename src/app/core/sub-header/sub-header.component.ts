import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  @Input() openToggle: boolean;

  @Output() openNavbar = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    this.openNavbar.emit();
  }

}
