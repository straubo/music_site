// class Raindrop {
//   constructor() {

//   }
//   // makeRaindrop() {
//     const rainLineLength = 1352.439268137;
//     const drip1Length = 50.748687744140625;
//     const drip2Length = 55.05485534667969;
//     const coordinates = [
//       Math.random() * window.innerWidth - 465,
//       (3 * (Math.random() * window.innerHeight)) / 4 - 650,
//     ];
//     rainyDiv = document.createElementNS(
//         "http://www.w3.org/2000/svg",
//         "svg"
//       );
//     dripLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
//     splash1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     splash2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     makeRainDiv = () => {
//       this.rainyDiv.classList.add("svgContainer");
//       this.rainyDiv.setAttribute("id", "Layer_1");
//       this.rainyDiv.setAttribute("data-name", "Layer 1");
//       this.rainyDiv.setAttribute("xmlns", "http://www.w3.org/2000/svg");
//       this.rainyDiv.setAttribute("width", "600");
//       this.rainyDiv.setAttribute("viewBox", "0 0 953 1210");
//     };
//     rainLine = () => {
//       this.dripLine.classList.add("cls-1");
//       this.dripLine.setAttribute("x1", "7.34");
//       this.dripLine.setAttribute("y1", "3.14");
//       this.dripLine.setAttribute("x2", "771.85");
//       this.dripLine.setAttribute("y2", "1119.25");
//       // dripLine.animateLength = rainLineLength;
//     };
//     drip1 = () => {
//       this.splash1.classList.add("cls-2");
//       this.splash1.setAttribute(
//         "d",
//         "M780.41,1119.25a66.17,66.17,0,0,1,42.34-25.67"
//       );
//       // this.splash1.animateLength = drip1Length;
//       // return drip;
//     };
//     drip2 = () => {
//       this.splash2.setAttribute("class", "cls-3");
//       this.splash2.setAttribute(
//         "d",
//         "M762.27,1119.25a71.82,71.82,0,0,0-21.62-17.34,80.11,80.11,0,0,0-25.72-8.33"
//       );

//       // splash2.animateLength = drip2Length;
//     };
//     this.drip1();
//     this.drip2();
//     this.rainLine();
//     this.makeRainDiv();

//     this.createRain = () => {
//       let rainDiv = this.rainyDiv;
//       rainDiv.appendChild(this.dripLine);
//       // rainDiv.appendChild(this.splash1);
//       // rainDiv.appendChild(splash2);
//       rainDiv.style.marginLeft = this.coordinates[0] + "px";
//       rainDiv.style.marginTop = this.coordinates[1] + "px";
//       document.getElementById("background").appendChild(rainDiv);
//       return rainDiv;
//     };

//     this.triggerAnimation = function(animatedLine, classname) {
//       let temporaryLine = animatedLine;
//       temporaryLine.style.transition = temporaryLine.style.WebKitTransition =
//         "none";
//       // temporaryLine.style.strokeDasharray =
//       //   temporaryLine.animateLength + " " + temporaryLine.animateLength;
//       temporaryLine.style.strokeDasharray =
//         this.rainLineLength + " " + this.rainLineLength;
//       // temporaryLine.style.strokeDashoffset = temporaryLine.animateLength;
//       temporaryLine.style.strokeDashoffset = this.rainLineLength;
//       temporaryLine.classList.add("addStroke");
//       temporaryLine.getBoundingClientRect();

//       temporaryLine.style.TransitionTimingFunction = "ease-in-out";
//       if (classname === "cls-1") {
//         temporaryLine.style.transition = temporaryLine.style.WebkitTransition =
//           "stroke-dashoffset 1.75s ease-in-out .5s";
//       } else {
//         temporaryLine.style.transition = temporaryLine.style.WebkitTransition =
//           "stroke-dashoffset .25s ease-in-out";
//       }

//       temporaryLine.style.strokeDashoffset = "0";
//       temporaryLine.addEventListener(
//         "transitionend",
//         () => {
//           if (classname === "cls-1") {
//             this.rainyDiv.appendChild(this.splash1);
//             this.rainyDiv.appendChild(this.splash2);

//             window.setTimeout(() => {
//               temporaryLine.classList.remove("addStroke");
//               temporaryLine.parentNode.remove();
//             }, 300); // this should not be necessary... why is it?
//           }
//         },
//         { once: true }
//       );
//     };
//     this.triggerAnimation(
//       this.createRain().getElementsByClassName("cls-1")[0],
//       "cls-1"
//     );
//   // }
// }
