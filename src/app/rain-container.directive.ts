import { Directive, ViewContainerRef } from "@angular/core";
@Directive({
  selector: "[appRainContainer]",
})
export class RainContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
