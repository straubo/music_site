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
  transition("HomePage => *", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      }),
    ]),
    query(
      ":enter",
      [
        style({
          opacity: 0,
        }),
        animate("800ms", style({ opacity: 1 })),
      ],
      {
        optional: true,
      }
    ),
    query(
      ":leave",
      [
        style({
          opacity: 1,
        }),
        animate("800ms", style({ opacity: 0 })),
      ],
      { optional: true }
    ),
    query("@gigBallIn", animateChild(), { optional: true }),
    query("@songRectangleIn", animateChild(), { optional: true }),
  ]),

  transition("*=> HomePage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      }),
    ]),
    query(
      ":enter",
      [
        style({
          opacity: 0,
        }),
        animate("400ms", style({ opacity: 1 })),
      ],
      {
        optional: true,
      }
    ),
    query(
      ":leave",
      [
        style({
          opacity: 1,
        }),
        animate("400ms", style({ opacity: 0 })),
      ],
      { optional: true }
    ),
  ]),

  // ---------------------------------------------------------------------
  // // all pages where we shift rightwards
  transition(
    "ContactPage => MusicPage, ContactPage => GigsPage, GigsPage => MusicPage",
    [
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
      query(":leave", [style({ left: "0%" })]),
      group([
        query(
          ":leave",
          [
            animate(
              "700ms ease-out",
              style({
                left: "100%",
              })
            ),
          ],
          {
            optional: true,
          }
        ),
        query(
          ":enter",
          [animate("800ms ease-out", style({ top: "0vh", left: "0" }))],
          { optional: true }
        ),
      ]),
      query("@gigBallIn", animateChild(), { optional: true }),
      query("@songRectangleIn", animateChild(), { optional: true }),
    ]
  ),
  // // all pages where we shift leftwards
  transition(
    "MusicPage => GigsPage, GigsPage => ContactPage, MusicPage => ContactPage",
    [
      style({ position: "relative" }),
      query(":enter, :leave", [
        style({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }),
      ]),
      query(":enter", [style({ left: "100%" })], { optional: true }),
      query(":leave", animateChild(), { optional: true }),
      group([
        query(":leave", [animate("700ms ease-out", style({ left: "-100%" }))], {
          optional: true,
        }),
        query(":enter", [animate("800ms ease-out", style({ left: "0%" }))], {
          optional: true,
        }),
      ]),
      query(":enter", animateChild()),
      query("@gigBallIn", animateChild(), { optional: true }),
    ]
  ),
]);
