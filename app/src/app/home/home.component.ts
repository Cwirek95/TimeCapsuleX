import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { CapsulesComponent } from "./capsules/capsules.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: "app-home",
  imports: [HeaderComponent, HowItWorksComponent, CapsulesComponent, ContactComponent, FooterComponent],
  template: `
    <div class="main-content">
      <app-home-header></app-home-header>

      <main>
        <div class="mobile-header md:hidden text-center mt-4 mx-4 self-center fade-in transparent-card">
          <h1 class="text-3xl xl:text-5xl font-bold">Timeless Storage for Your Digital Legacy</h1>
          <button class="check-it-button mt-8">Let's check it out</button>
        </div>

        <app-home-how-it-works></app-home-how-it-works>

        <app-home-capsules></app-home-capsules>

        <app-home-contact></app-home-contact>
      </main>

      <app-home-footer></app-home-footer>
    </div>
  `,
  standalone: true,
  styleUrls: ["home.component.scss"],
})
export class HomeComponent {}
