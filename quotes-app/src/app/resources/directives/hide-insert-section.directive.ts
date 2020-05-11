import { Directive, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appHideInsertSection]'
})
export class HideInsertSectionDirective {

  hideSection = false;

  constructor() { }

  @HostListener('click')
  toggleSection(){
   
  }

}
