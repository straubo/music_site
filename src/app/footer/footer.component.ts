import { Component, OnInit } from "@angular/core";
import { FooterUpService } from "../footer-up.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  footerUp: boolean;

  constructor(footerUpService: FooterUpService) {
    this.footerUp = footerUpService.footerUp;
  }

  ngOnInit() {
    // this.footerUp = false;
  }
  // triggerFooterUp() {
  //   this.footerUp = !this.footerUp;
  //   console.log(this.footerUp);
  // }
}
