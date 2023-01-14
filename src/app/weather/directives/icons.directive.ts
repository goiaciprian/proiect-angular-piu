import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appIcons]'
})
export class IconsDirective {
  constructor(
    private el: ElementRef
  ) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setOpacity('100%');
  }


  @HostListener('mouseleave')
  onMouseExit() {
    this.setOpacity('0');
  }

  private setOpacity(opacity: string){
    const optionsDiv = this.el.nativeElement.querySelector('div.options');
    optionsDiv.style.opacity = opacity;
  }

}
