import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
  ComponentFactoryResolver,
} from "@angular/core";

import { RaindropComponent } from "../raindrop/raindrop.component";
import { RainContainerDirective } from "../rain-container.directive";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver
  ) {}
  @ViewChild(RainContainerDirective) rainHost: RainContainerDirective;

  ngOnInit() {
    this.setTimer();
  }

  ngAfterViewInit() {}
  addRaindrop() {
    let componentFactory = this.resolver.resolveComponentFactory(
      RaindropComponent
    );
    let viewContainerRef = this.rainHost.viewContainerRef;
    let componentRef = viewContainerRef.createComponent(componentFactory);
    // viewContainerRef.clear();
  }

  setTimer() {
    setInterval(() => {
      // this.createRaindrop();
      this.addRaindrop();
    }, 450);
  }
}

// -------------------------------------------------------------
// drip1 = () => {
//   let splash1 = this.renderer.createElement("path", "svg");
//   this.renderer.addClass(splash1, "cls-2");
//   this.renderer.setAttribute(
//     splash1,
//     "d",
//     "M780.41,1119.25a66.17,66.17,0,0,1,42.34-25.67"
//   );
//   return splash1;
// };
// drip2 = () => {
//   let splash2 = this.renderer.createElement("path", "svg");
//   this.renderer.addClass(splash2, "cls-3");
//   this.renderer.setAttribute(
//     splash2,
//     "d",
//     "M762.27,1119.25a71.82,71.82,0,0,0-21.62-17.34,80.11,80.11,0,0,0-25.72-8.33"
//   );
//   return splash2;
// };
// -------------------------------------------------------------

// rainyDiv;
// createRaindrop() {
//   // below works at least surface-level:
//   let coordinates = [
//     Math.random() * window.innerWidth - 465,
//     (3 * (Math.random() * window.innerHeight)) / 4 - 650,
//   ];
//   this.rainyDiv = this.renderer.createElement("svg", "svg");
//   this.renderer.addClass(this.rainyDiv, "svgContainer");
//   this.renderer.setAttribute(this.rainyDiv, "id", "Layer_1");
//   this.renderer.setAttribute(this.rainyDiv, "data-name", "Layer 1");
//   this.renderer.setAttribute(
//     this.rainyDiv,
//     "xmlns",
//     "http://www.w3.org/2000/svg"
//   );
//   this.renderer.setAttribute(this.rainyDiv, "width", "600");
//   this.renderer.setAttribute(this.rainyDiv, "viewBox", "0 0 953 1210");
//   this.renderer.setStyle(this.rainyDiv, "marginLeft", coordinates[0]);
//   this.renderer.setStyle(this.rainyDiv, "marginTop", coordinates[1]);
//   this.renderer.appendChild(this.rainyDiv, this.rainLine());

//   // this.renderer.appendChild(this.rainyDiv, this.drip1());
//   // this.renderer.appendChild(this.rainyDiv, this.drip2());
//   this.renderer.appendChild(this.background.nativeElement, this.rainyDiv);
//   return this.rainyDiv;
// }
// rainLine = () => {
//   let dripLine = this.renderer.createElement("line", "svg");
//   this.renderer.addClass(dripLine, "cls-1");
//   this.renderer.setAttribute(dripLine, "x1", "7.34");
//   this.renderer.setAttribute(dripLine, "y1", "3.14");
//   this.renderer.setAttribute(dripLine, "x2", "771.85");
//   this.renderer.setAttribute(dripLine, "y2", "1119.25");
//   // dripLine.addEventListener("transitionEnd", () => {
//   //   this.lineDone();
//   // });
//   return dripLine;
// };

// lineDone = () => {
//   console.log("hi");
//   this.renderer.appendChild(this.rainyDiv, this.drip1());
//   this.renderer.appendChild(this.rainyDiv, this.drip2());
// };
