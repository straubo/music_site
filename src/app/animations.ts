import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  animateChild,
  group,
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  // transition("HomePage <=> GigsPage", [
  transition("* => HomePage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,

        width: "100%",
        // transform: "scale(1, 1)",
        // transform: "matrix(1, 0, 0, 1, 0, 0)",
      }),
    ]),
    //   query(":enter", [style({ left: "-100%" })]),
    query(
      ":enter",
      [
        style({
          // works but... not exactly what we're looking for
          // transform: "scale(0, 1) translate(-75vw, 0)",
          // -
          // transform: "matrix(0, 0, 0, 1, -50, 0)",
          // transform: "matrix(1, -0.3, 0, 1, -10, 0)",
          // width: "0%",
          left: "-100%",
        }),
      ],
      {
        optional: true,
      }
    ),
    query(":leave", animateChild(), { optional: true }),
    group([
      // works but simplifying for now
      query(
        ":leave",
        [
          // animate("700ms ease-out", style({ left: "100%", opacity: 0 })),
          animate("700ms ease-in-out", style({ opacity: 0 })),
        ],
        { optional: true }
      ),
      query(
        ":enter",
        [
          animate(
            "800ms cubic-bezier(.9,.3,.8,.3)",
            style({ transform: "scale(1,1)", left: "0%" })
          ),
        ],
        { optional: true }
      ),
    ]),
    // query("@gigBallIn", animateChild()),
  ]),
  transition("* => GigsPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      }),
    ]),
    //   query(":enter", [style({ left: "-100%" })]),
    query(":enter", [style({ top: "100vh" })], { optional: true }),
    query(":leave", animateChild(), { optional: true }),
    group([
      query(
        ":leave",
        [
          // animate("700ms ease-out", style({ left: "100%", opacity: 0 })),
          animate("700ms ease-out", style({ opacity: 0 })),
        ],
        { optional: true }
      ),
      query(
        ":enter",
        [animate("800ms ease-out", style({ top: "0vh", left: "0" }))],
        { optional: true }
      ),
    ]),
    query("@gigBallIn", animateChild()),
  ]),
  transition("* <=> MusicPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      }),
    ]),
    query(":enter", [style({ left: "-100%" })], { optional: true }),
    query(":leave", animateChild(), { optional: true }),
    group([
      query(":leave", [animate("700ms ease-out", style({ left: "100%" }))], {
        optional: true,
      }),
      query(":enter", [animate("800ms ease-out", style({ left: "0%" }))], {
        optional: true,
      }),
    ]),
    query(":enter", animateChild()),
  ]),
  transition("* <=> ContactPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      }),
    ]),
    query(":enter", [style({ left: "-100%" })], {
      optional: true,
    }),
    query(":leave", animateChild(), { optional: true }),
    group([
      query(":leave", [animate("700ms ease-out", style({ left: "100%" }))], {
        optional: true,
      }),
      query(":enter", [animate("800ms ease-out", style({ left: "0%" }))], {
        optional: true,
      }),
    ]),
    query(":enter", animateChild(), { optional: true }),
  ]),
]);
