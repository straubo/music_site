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

// directly from the angular docs

// export const slideInAnimation = trigger("routeAnimations", [
//   transition("HomePage <=> AboutPage", [
//     //   transition("* <=> *", [
//     style({ position: "relative" }),
//     query(":enter, :leave", [
//       style({
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//       }),
//     ]),
//     query(":enter", [style({ left: "-100%" })]),
//     query(":leave", animateChild()),
//     group([
//       query(":leave", [
//         animate("700ms ease-out", style({ left: "100%", opacity: 0 })),
//       ]),
//       query(":enter", [animate("700ms ease-out", style({ left: "0%" }))]),
//     ]),
//     query(":enter", animateChild()),
//   ]),
//   transition("* <=> FilterPage", [
//     style({ position: "relative" }),
//     query(":enter, :leave", [
//       style({
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//       }),
//     ]),
//     query(":enter", [style({ left: "-100%" })]),
//     query(":leave", animateChild()),
//     group([
//       query(":leave", [animate("200ms ease-out", style({ left: "100%" }))]),
//       query(":enter", [animate("300ms ease-out", style({ left: "0%" }))]),
//     ]),
//     query(":enter", animateChild()),
//   ]),
// ]);
