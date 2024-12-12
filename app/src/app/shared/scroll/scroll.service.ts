import { Injectable } from "@angular/core";

@Injectable()
export class ScrollService {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  scrollTo(sectionId: string): void {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
