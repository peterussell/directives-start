import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  /* NB: appBasicHighlight (no square brackets) makes it an *element*
     directive, eg. <appBasicHighlight>. By adding brackets, it makes it
     an *attribute* directive which can be applied as an attribute on
     HTML elements, eg. <p appBasicHighlight>. */
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private myElementRef: ElementRef) { // NB: 'private' makes it a class property
    // The element to apply the diretive to is passed in (Dependency Injection).
  }

  /* Directives don't have all lifecycle events (eg. ones related to view
     events don't make sense for a directive), but it does have some. */
  ngOnInit() {
    this.myElementRef.nativeElement.style.backgroundColor = 'green';
  }
}
