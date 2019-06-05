import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ComponentFactoryResolver,
} from "@angular/core";

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
} from "@angular/animations";

import { RaindropComponent } from "../raindrop/raindrop.component";
import { RainContainerDirective } from "../rain-container.directive";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  // these are for the name in the middle
  animations: [
    trigger("nameState", [
      state(
        "normal",
        style({
          marginLeft: "0",
          marginTop: "0",
          color: "red",
        })
      ),
      state(
        "right",
        style({
          marginLeft: "75px",
          marginTop: "0",
          color: "black",
        })
      ),
      state(
        "downRight",
        style({
          marginLeft: "75px",
          marginTop: "60px",
          color: "blue",
        })
      ),
      state(
        "down",
        style({
          marginLeft: "0",
          marginTop: "60px",
          color: "white",
        })
      ),
      // state("furtherLeft")
      transition(
        "normal => right, right => downRight, downRight => down, down => normal, normal => down, down => downRight, downRight => right, right => normal",
        [animate(".7s 400ms ease-out")]
      ),
    ]),
    trigger("firstTrigger", [
      state(
        "out",
        style({
          marginTop: "-100vh",
          marginLeft: 0,
          // marginTop: 0,
          // marginLeft: "-100%",
        })
      ),
      state(
        "in",
        style({
          top: 0,
          marginLeft: 0,
        })
      ),
      transition("out => in", [animate("1200ms cubic-bezier(.89,.21,.07,1)")]),
    ]),
    trigger("secondTrigger", [
      state(
        "out",
        style({
          top: 0,
          marginLeft: "-100%",
        })
      ),
      state(
        "in",
        style({
          top: 0,
          marginLeft: 0,
        })
      ),
      transition("out => in", [animate("800ms cubic-bezier(1,0,.07,1)")]),
    ]),
    trigger("thirdTrigger", [
      state(
        "out",
        style({
          top: "100vh",
          marginLeft: 0,
        })
      ),
      state(
        "in",
        style({
          marginTop: 0,
          marginLeft: 0,
        })
      ),
      transition("out => in", [animate("800ms cubic-bezier(1,0,.07,1)")]),
    ]),
    trigger("fourthTrigger", [
      state(
        "out",
        style({
          top: 0,
          marginLeft: "100%",
        })
      ),
      state(
        "in",
        style({
          marginTop: 0,
          marginLeft: 0,
        })
      ),
      transition("out => in", [
        animate("1200ms cubic-bezier(.85, -0.07, 0, 1.1)"),
      ]),
    ]),
    trigger("homeMenu", [
      transition("* => *", [
        query(
          ".homeRouterLink",
          style({
            opacity: 0,
            transform: "translateY(-20px)",
            // transform: "translate (-20px, -20px)",
          }),
          { optional: true }
        ),
        query(
          ".homeRouterLink",
          stagger("400ms", [
            animate(
              "500ms ease-out",
              style({ opacity: 1, transform: "translateY(0)" })
            ),
          ])
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  constructor(
    private resolver: ComponentFactoryResolver,
    private router: Router
  ) {}
  @ViewChild(RainContainerDirective) rainHost: RainContainerDirective;

  ngOnInit() {
    // this.setTimer();
    //
    this.nameState = "normal";
    this.firstState = "out";
    this.secondState = "out";
    this.thirdState = "out";
    this.fourthState = "out";
    this.menuIn = false;
    this.manuallyTimedAnimations();
    this.fourthTriggerCount = 0;
  }

  nameState: string;
  firstState: string;
  secondState: string;
  thirdState: string;
  fourthState: string;
  menuIn: boolean;
  fourthTriggerCount: number;

  verticalTime = 800;
  horizontalTime = 600;

  niceTime(event: AnimationEvent) {
    console.log(event);
  }

  titleShift(event: AnimationEvent) {
    console.log("coming from the title shift: " + event);
  }

  manuallyTimedAnimations() {
    setTimeout(() => {
      this.firstState = "in";
      this.nameState = "down";
    }, 100);
    setTimeout(() => {
      this.secondState = "in";
      this.nameState = "downRight";
    }, 100 + this.verticalTime);
    setTimeout(() => {
      this.thirdState = "in";
      this.nameState = "right";
    }, 100 + this.verticalTime + this.horizontalTime);
    setTimeout(() => {
      this.fourthState = "in";
      this.nameState = "normal";
    }, 2 * this.verticalTime + this.horizontalTime);
  }

  // this.menuIn = true;
  // absurd that I have to do this... animation count check
  fourthTriggerDone(event: AnimationEvent) {
    this.fourthTriggerCount += 1;
    if (this.fourthTriggerCount == 2) {
      this.menuIn = true;
    }
  }

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
