import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRemoveWrapper]'
})
export class RemoveWrapperDirective {

  constructor(private element: ElementRef) {
    const el = this.element.nativeElement;
    const parent = this.element.nativeElement.parentElement;

    parent.parentNode.insertBefore(el, parent);
    parent.parentNode.removeChild(parent);
  }

}
