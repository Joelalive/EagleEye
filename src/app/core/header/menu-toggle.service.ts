import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuToggleService {

  menuToggler = new Subject<boolean>();

  constructor() { }

  toggleMenu(value: boolean) {
    this.menuToggler.next(value);
    console.log('Menu is open :', value);
  }

}
