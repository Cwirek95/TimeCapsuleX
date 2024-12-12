import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { ScrollService } from "../../../shared/scroll/scroll.service";

@Component({
  selector: "app-home-mobile-menu",
  imports: [NgOptimizedImage],
  template: `
    <div class="mobile-header flex w-full justify-between items-center p-4 sm:hidden">
      <img ngSrc="/img/logo-mobile.png" alt="Logo" width="694" height="775" class="w-12 h-12" />
      <img ngSrc="/img/logo-mobile-text.png" alt="TimeCapsuleX" width="1033" height="132" class="w-48" />
      <button id="menu-toggle" (click)="toggleMenu()" class="text-white text-lg">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <nav
      id="mobile-menu"
      [class.hidden]="isMenuHidden"
      class="hidden mobile-menu flex-col text-white w-full sm:hidden absolute top-full left-0 z-10 p-4 space-y-2"
    >
      <div class="flex justify-center">
        <button class="join-button-mobile">Join Now!</button>
      </div>
      <hr />
      <a href="#" class="nav-link text-white block text-center py-2" (click)="navigateToTop()">Home</a>
      <a href="#" class="nav-link text-white block text-center py-2" (click)="navigateToSection('howItWorks')"
        >How It Works</a
      >
      <a href="#" class="nav-link text-white block text-center py-2" (click)="navigateToSection('capsules')"
        >Capsules</a
      >
      <a href="#" class="nav-link text-white block text-center py-2" (click)="navigateToSection('contact')"
        >Contact</a
      >
    </nav>
  `,
  standalone: true,
  styleUrls: ["mobile-menu.component.scss"],
})
export class MobileMenuComponent {
  constructor(private scrollService: ScrollService) {}
  isMenuHidden: boolean = true;

  toggleMenu(): void {
    this.isMenuHidden = !this.isMenuHidden;
  }

  navigateToTop(): void {
    this.scrollService.scrollToTop();
  }

  navigateToSection(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }
}
