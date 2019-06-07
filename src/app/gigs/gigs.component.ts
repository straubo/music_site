import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
} from "@angular/animations";
import { Gig } from "./gig";

@Component({
  selector: "app-gigs",
  templateUrl: "./gigs.component.html",
  styleUrls: ["./gigs.component.css"],
  animations: [
    trigger("gigBallIn", [
      transition("* => *", [
        query(
          ".gigCircle ",
          style({
            opacity: 0,
            transform: "translateY(-20px)",
          }),
          { optional: true }
        ),
        query(
          ".gigCircle",
          stagger("200ms", [
            animate(
              "500ms ease-out",
              style({ opacity: 1, transform: "translateY(0)" })
            ),
          ])
        ),
      ]),
    ]),
    trigger("selectedGigIn", [
      transition(":enter", [
        style({ opacity: "0" }),
        animate("500ms"),
        style({ opacity: "1" }),
      ]),
      transition(":leave", [animate("500ms"), style({ opacity: "0" })]),
    ]),
  ],
})
export class GigsComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    this.gigs = [
      {
        date: new Date("August 22, 2019 20:30"),
        name: "House Show Details TBD",
        description: "Album release etc",
        location: "Dodge 112",
      },
      {
        date: new Date("July 13, 2019 20:30"),
        name: "House Show Coming Up",
        description:
          "Sweaty warehouse show at Dodge 112 in Boerum Hill. Yo! Komodo coming from Boston",
        otherActs: [
          {
            name: "Full Salon",
            members: [
              "Henry Fraser",
              "Peter Moffett",
              "Andrew Smiley",
              "Evan Allen",
            ],
          },
          {
            name: "Yo! Komodo",
            members: ["Tim Merle", "Kate", "Aaron Llao"],
          },
        ],
        location: "Dodge 112",
      },
      {
        date: new Date("March 29, 2019 20:30"),
        name: "House Show",
        otherActs: [
          {
            name: "syl",
          },
          {
            name: "PUCK",
          },
          {
            name: "Moonheart",
          },
        ],
        location: "Dodge 112",
      },
      {
        date: new Date("April 07, 2018 19:30"),
        name: "b o t @ C'mon Everybody",
        description: "playing synth with Dandy MacDowell's b o t",
        location: "C'mon Everybody",
      },
      {
        date: new Date("March 31, 2018 20:30"),
        name: "House Show",
        otherActs: [
          {
            name: "Wood River",
            members: [
              "Charlotte Greve",
              "Keiske Matsuno",
              "Simon Jermyn",
              "Tommy Crane",
            ],
          },
          {
            name: "Emma Frank",
            members: ["Elias Stemeseder", "Rick Rosato", "Jim Black"],
          },
        ],
        location: "1681 Dean Street, Brooklyn NY",
      },
      {
        date: new Date("March 28, 2018 19:30"),
        name: "b o t @ C'mon Everybody",
        description: "playing synth with Dandy MacDowell's b o t",
        location: "C'mon Everybody",
      },
      {
        date: new Date("October 15, 2018 21:30"),
        name: "Solo show at Pete's",
        location: "Pete's Candy Store",
        price: "$5 suggested",
      },
      {
        date: new Date("November 12, 2017 20:30"),
        name: "House Show",
        otherActs: [
          {
            name: "Varsity Star",
          },
          {
            name: "Kim Cass Solo",
          },
        ],
        location: "1681 Dean Street, Brooklyn NY",
      },
    ];
    this.nowDate = new Date();
    this.colorNumbers = [
      "#d2801a",
      "#67c0ff",
      "#228a0f",
      "#8a54d2",
      "#efd91d",
      "#a23737",
      "#71bdd4",
      "#b17599",
      "#7590b1",
    ];
  }
  // colorNumbers: [
  //   "#d2801a",
  //   "#67c0ff",
  //   "#228a0f",
  //   "#8a54d2",
  //   "#efd91d",
  //   "#a23737",
  //   "#71bdd4",
  //   "#b17599",
  //   "#7590b1"
  // ];
  colorNumbers: String[];
  nowDate: Date;
  gigs: Gig[];
  selectedGig: Gig = null;

  clickGig(gig: Gig) {
    this.selectedGig = gig;
    console.log(gig);
  }

  xOut() {
    this.selectedGig = null;
  }
}
