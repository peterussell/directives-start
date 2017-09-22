import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    /* Use the Renderer instead of directly accessing the DOM (see
       basic-highlight) -- Renderer handles cases where we may not have a
       DOM being rendered, eg. service workers. */
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue'
    );
    // NB: there's a 4th arg to setStyle, which are flags. eg. !important
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.removeStyle(
      this.elRef.nativeElement,
      'background-color'
    );
  }
}
