import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]',
})
export class DarkenOnHoverDirective {
  constructor(private readonly el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseover')
  darkOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
  }

  @HostListener('mouseleave')
  darkOf() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
