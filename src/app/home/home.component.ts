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

  //

  ngOnInit() {
    //
    // this.setTimer();
  }

  onPlayerStateChange(event) {
    console.log(event);
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
