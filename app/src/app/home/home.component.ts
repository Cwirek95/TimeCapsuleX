import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { CapsulesComponent } from "./capsules/capsules.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: "app-home",
  imports: [HeaderComponent, HowItWorksComponent, CapsulesComponent, ContactComponent],
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

      <footer class="flex justify-between">
        <div></div>
        <span class="text-lg font-semibold self-center">Copyright &copy; 2024</span>
        <button class="top-button self-center mr-2"><i class="fa fa-arrow-up"></i></button>
      </footer>
    </div>
  `,
  standalone: true,
  styleUrls: ["home.component.scss"],
})
export class HomeComponent {}
