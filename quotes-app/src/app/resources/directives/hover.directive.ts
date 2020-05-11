import { Directive, ViewChild, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input('appHover')
  effect;

  constructor(private element: ElementRef) { }

  @HostListener('click')
  addClass() {
    this.element.nativeElement.classList.add(this.effect);
    setTimeout(() => {
      this.element.nativeElement.classList.remove(this.effect);
    }, 150);
  }

  // @HostListener('mouseleave')
  // removeClass() {
  //   this.element.nativeElement.classList.remove(this.effect);
  // }

}
