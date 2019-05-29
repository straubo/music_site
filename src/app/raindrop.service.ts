import { Injectable, Renderer2 } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class RaindropService {
  constructor(private renderer: Renderer2) {
    //   this.makeTheRaindrop();
    this.createRaindrop();
  }
  // makeTheRaindrop() {
  //   this.initializeRainDiv();
  //   this.initializeRainLine();
  //   this.initializeDrip1();
  //   this.initializeDrip2();
  //   this.createRain();
  // }

  // rainLineLength = 1352.439268137;
  // drip1Length = 50.748687744140625;
  // drip2Length = 55.05485534667969;
  // coordinates = [
  //   Math.random() * window.innerWidth - 465,
  //   (3 * (Math.random() * window.innerHeight)) / 4 - 650,
  // ];

  // // dom elements:
  // rainyDiv = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // dripLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  // splash1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  // splash2 = document.createElementNS("http://www.w3.org/2000/svg", "path");

  // // instantiation functions:

  // initializeRainDiv() {
  //   this.rainyDiv.classList.add("svgContainer");
  //   this.rainyDiv.setAttribute("id", "Layer_1");
  //   this.rainyDiv.setAttribute("data-name", "Layer 1");
  //   this.rainyDiv.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  //   this.rainyDiv.setAttribute("width", "600");
  //   this.rainyDiv.setAttribute("viewBox", "0 0 953 1210");
  // }
  // initializeRainLine = () => {
  //   this.dripLine.classList.add("cls-1");
  //   this.dripLine.setAttribute("x1", "7.34");
  //   this.dripLine.setAttribute("y1", "3.14");
  //   this.dripLine.setAttribute("x2", "771.85");
  //   this.dripLine.setAttribute("y2", "1119.25");
  //   // this.dripLine.animateLength = this.rainLineLength;
  // };
  // initializeDrip1 = () => {
  //   this.splash1.classList.add("cls-2");
  //   this.splash1.setAttribute(
  //     "d",
  //     "M780.41,1119.25a66.17,66.17,0,0,1,42.34-25.67"
  //   );
  //   // this.splash1.animateLength = drip1Length;
  // };
  // initializeDrip2 = () => {
  //   this.splash2.setAttribute("class", "cls-3");
  //   this.splash2.setAttribute(
  //     "d",
  //     "M762.27,1119.25a71.82,71.82,0,0,0-21.62-17.34,80.11,80.11,0,0,0-25.72-8.33"
  //   );
  //   // splash2.animateLength = drip2Length;
  // };
  // createRain = () => {
  //   this.rainyDiv.appendChild(this.dripLine);
  //   // rainDiv.appendChild(splash1);
  //   // rainDiv.appendChild(splash2);
  //   this.rainyDiv.style.marginLeft = this.coordinates[0] + "px";
  //   this.rainyDiv.style.marginTop = this.coordinates[1] + "px";

  //   // document.getElementById("background").appendChild(this.rainyDiv);

  //   // return rainDiv;
  // };
  createRaindrop() {
    // let newInstance = new RaindropService();
    let coordinates = [
      Math.random() * window.innerWidth - 465,
      (3 * (Math.random() * window.innerHeight)) / 4 - 650,
    ];
    let rainyDiv = this.renderer.createElement("svg", "svg");
    this.renderer.addClass(rainyDiv, "svgContainer");
    this.renderer.setAttribute(rainyDiv, "id", "Layer_1");
    this.renderer.setAttribute(rainyDiv, "data-name", "Layer 1");
    this.renderer.setAttribute(rainyDiv, "xmlns", "http://www.w3.org/2000/svg");
    this.renderer.setAttribute(rainyDiv, "width", "600");
    this.renderer.setAttribute(rainyDiv, "viewBox", "0 0 953 1210");
    this.renderer.setStyle(rainyDiv, "marginLeft", coordinates[0]);
    this.renderer.setStyle(rainyDiv, "marginTop", coordinates[1]);
    // should I raise these up to the ngAfterViewInit function?
    this.renderer.appendChild(rainyDiv, this.rainLine());
    this.renderer.appendChild(rainyDiv, this.drip1());
    this.renderer.appendChild(rainyDiv, this.drip2());
    // this.renderer.appendChild(this.background.nativeElement, rainyDiv);
    return rainyDiv;
  }

  rainLine = () => {
    let dripLine = this.renderer.createElement("line", "svg");
    this.renderer.addClass(dripLine, "cls-1");
    this.renderer.setAttribute(dripLine, "x1", "7.34");
    this.renderer.setAttribute(dripLine, "y1", "3.14");
    this.renderer.setAttribute(dripLine, "x2", "771.85");
    this.renderer.setAttribute(dripLine, "y2", "1119.25");
    // dripLine.animateLength = rainLineLength;
    return dripLine;
  };

  drip1 = () => {
    let splash1 = this.renderer.createElement("path", "svg");
    this.renderer.addClass(splash1, "cls-2");
    this.renderer.setAttribute(
      splash1,
      "d",
      "M780.41,1119.25a66.17,66.17,0,0,1,42.34-25.67"
    );
    // splash1.animateLength = drip1Length;
    // return drip;
    return splash1;
  };

  drip2 = () => {
    let splash2 = this.renderer.createElement("path", "svg");
    this.renderer.addClass(splash2, "cls-3");
    this.renderer.setAttribute(
      splash2,
      "d",
      "M762.27,1119.25a71.82,71.82,0,0,0-21.62-17.34,80.11,80.11,0,0,0-25.72-8.33"
    );
    // splash2.animateLength = drip2Length;
    return splash2;
  };
}
