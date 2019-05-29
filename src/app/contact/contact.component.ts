import { Component, OnInit } from "@angular/core";
import { Email } from "../email";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  constructor() {}

  model = new Email(
    // "ready@letsgo.com",
    // "Hi I want to be your friend",
    // "saying hi"
    "",
    "",
    ""
  );

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // not needed = get rid of this later
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ngOnInit() {}
}
