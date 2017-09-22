import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // 'set' accesses the setter method of the property 'unless'
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // Condition says we *should* render the owning element
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // Condition says we *should not* render the owning element
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef) {
      // Template ref: structural directives actually insert an <ng-template>
      // into the DOM (behind the scenes) - templateRef is a handle to this.

      // View Container ref: handle to the containing element, *where* should
      // we render this element if the structural directive evaluates to a
      // value where we decide we *do* want to render this structural directive.
  }

}
