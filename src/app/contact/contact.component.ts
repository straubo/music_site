import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ComponentFactoryResolver,
  OnDestroy,
} from "@angular/core";
import { RaindropComponent } from "../raindrop/raindrop.component";
import { RainContainerDirective } from "../rain-container.directive";

import {
  trigger,
  query,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

import { Email } from "./email";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: "0" }),
        animate("500ms"),
        style({ opacity: "1" }),
      ]),
      transition(":leave", [animate("500ms"), style({ opacity: "0" })]),
    ]),
  ],
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private resolver: ComponentFactoryResolver) {}

  @ViewChild(RainContainerDirective) rainHost: RainContainerDirective;

  looper;
  viewContainerRef;
  model = new Email("", "", "");
  formIn: boolean;
  formHeaderIn: boolean;
  timerTillRainStops;

  setTimer() {
    this.timerTillRainStops = setTimeout(() => {
      clearInterval(this.looper);
      setTimeout(() => {
        this.viewContainerRef.clear();
      }, 3000);
    }, 60000);
    setTimeout(() => {
      this.formHeaderIn = true;
      setTimeout(() => {
        this.formIn = true;
      }, 2000);
    }, 3000);

    this.looper = setInterval(() => {
      this.addRaindrop();
    }, 450);
  }

  addRaindrop() {
    let componentFactory = this.resolver.resolveComponentFactory(
      RaindropComponent
    );
    this.viewContainerRef = this.rainHost.viewContainerRef;
    let componentRef = this.viewContainerRef.createComponent(componentFactory);
  }

  ngOnInit() {
    this.formIn = false;
    this.formHeaderIn = false;
    this.setTimer();
  }

  ngOnDestroy() {
    if (this.looper) {
      clearInterval(this.looper);
    }
    this.viewContainerRef.clear();
  }
  // form stuff below:

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newEmailForm() {
    console.log(this.model);
    this.model = new Email("", "", "");
  }
}
