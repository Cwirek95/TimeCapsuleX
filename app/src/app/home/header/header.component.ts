import { Component } from "@angular/core";
import { MobileMenuComponent } from "./mobile-menu/mobile-menu.component";
import { ScrollService } from "../../shared/scroll/scroll.service";

@Component({
  selector: "app-home-header",
  imports: [MobileMenuComponent],
  template: `
    <header class="main-header relative xl:h-[460px] md:h-[260px]">
      <app-home-mobile-menu></app-home-mobile-menu>

      <svg
        class="svg-background xl:w-[500px] xl:h-[460px] md:w-[300px] md:h-[260px] hidden md:flex"
        viewBox="0 0 752 686"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="328.5" cy="262.5" r="423.5" fill="#151924" />
        <image
          href="/img/logo.png"
          x="150"
          y="100"
          width="400"
          height="400"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>

      <div
        class="container mx-auto content hidden md:flex flex-col justify-center items-end py-4 relative z-10"
      >
        <div class="flex gap-2 xl:gap-20 lg:gap-10 items-center">
          <nav class="flex xl:space-x-4 lg:space-x-2">
            <a href="#" class="nav-link" (click)="navigateToTop()">Home</a>
            <a href="#" class="nav-link" (click)="navigateToSection('howItWorks')">How It Works</a>
            <a href="#" class="nav-link" (click)="navigateToSection('capsules')">Capsules</a>
            <a href="#" class="nav-link" (click)="navigateToSection('contact')">Contact</a>
          </nav>
          <button class="join-button mr-2 py-[10px] xl:px-[40px] md:px-[10px]">Join Now!</button>
        </div>

        <div class="xl:ml-96 text-left mt-4 xl:mt-16 self-center ml-96 mr-2 fade-in transparent-card">
          <h1 class="text-3xl xl:text-5xl font-bold">Timeless Storage for Your Digital Legacy</h1>
          <p class="hidden xl:flex mt-8 text-lg text-left fade-in" style="animation-delay: 0.3s;">
            Digital capsules can be set to unlock at chosen moments, shared with loved ones, or stored as part
            of a lasting digital legacy. Stories and memories, safely kept – now and forever
          </p>
          <button class="check-it-button mt-8">Let's check it out</button>
        </div>
      </div>
    </header>
  `,
  standalone: true,
  styleUrls: ["header.component.scss"],
  providers: [ScrollService],
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  navigateToTop(): void {
    this.scrollService.scrollToTop();
  }

  navigateToSection(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }
}
