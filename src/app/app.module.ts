import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { MusicComponent } from "./music/music.component";
import { GigsComponent } from "./gigs/gigs.component";
import { ContactComponent } from "./contact/contact.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RaindropComponent } from "./raindrop/raindrop.component";
import { RainContainerDirective } from "./rain-container.directive";
import { FooterComponent } from "./footer/footer.component";
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicComponent,
    GigsComponent,
    ContactComponent,
    NavbarComponent,
    RaindropComponent,
    RainContainerDirective,
    FooterComponent,
    MobileNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RaindropComponent],
})
export class AppModule {}
