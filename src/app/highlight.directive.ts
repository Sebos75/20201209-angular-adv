import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[apHighlight]'
})
export class HighlightDirective {

  private readonly defaultColor = '#c6d2cf';
  @Input() apHighlight = '';
  @HostBinding('style.backgroundColor') bgColor = '';

  @HostListener('mouseover')
  handleMouseOver(): void {
    this.bgColor = this.apHighlight || this.defaultColor;
  }

  @HostListener('mouseout')
  handleMouseOut(): void {
    this.bgColor = '';
  }
}
