import { Component, OnInit } from "@angular/core";
import { FooterUpService } from "../footer-up.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  footerUp: boolean;

  constructor(
    private footerUpService: FooterUpService,
    private router: Router
  ) {
    // this.footerUp = footerUpService.footerUp;

    this.currentlyOnHome = true;
    router.events.subscribe(val => {
      if (val.hasOwnProperty("url")) {
        if (val["url"] === "/home" || val["url"] === "/") {
          this.currentlyOnHome = true;
        } else {
          this.currentlyOnHome = false;
        }
      }
    });
  }
  ngOnInit() {
    this.footerUp = false;
  }
  currentlyOnHome: boolean;
  timeToToggle() {
    // this.footerUpService.toggleFooter();
    this.footerUp = !this.footerUp;
  }

  // triggerFooterUp() {
  //   this.footerUp = !this.footerUp;
  //   console.log(this.footerUp);
  // }
}
