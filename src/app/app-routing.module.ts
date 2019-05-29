import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MusicComponent } from "./music/music.component";
import { GigsComponent } from "./gigs/gigs.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, data: { animation: "HomePage" } },
  {
    path: "music",
    component: MusicComponent,
    data: { animation: "MusicPage" },
  },
  { path: "gigs", component: GigsComponent, data: { animation: "GigsPage" } },
  {
    path: "contact",
    component: ContactComponent,
    data: { animation: "ContactPage" },
  },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
