import { Component } from "@angular/core";

@Component({
  selector: "app-home-capsules",
  imports: [],
  template: `
    <section class="section-capsules">
      <div class="mx-auto max-w-3xl flex flex-col gap-2 px-4">
        <h1 class="section-title uppercase capsules-title mb-8">Capsules</h1>
        <div class="capsule-item flex items-start">
          <div class="capsule-icon p-4 rounded-full">
            <i class="fas fa-clock text-3xl"></i>
          </div>
          <div class="ml-6">
            <h3 class="text-xl font-semibold">Time-based</h3>
            <p class="mt-1">Opens on a specific date, preserving memories for the future.</p>
          </div>
        </div>

        <div class="capsule-item flex items-start">
          <div class="capsule-icon p-4 rounded-full">
            <i class="fas fa-flag-checkered text-3xl"></i>
          </div>
          <div class="ml-6">
            <h3 class="text-xl font-semibold">Conditional</h3>
            <p class="mt-1">Unlocks upon meeting a specific condition, ideal for life milestones.</p>
          </div>
        </div>

        <div class="capsule-item flex items-start">
          <div class="capsule-icon p-4 rounded-full">
            <i class="fas fa-infinity text-3xl"></i>
          </div>
          <div class="ml-6">
            <h3 class="text-xl font-semibold">Inheritable</h3>
            <p class="mt-1">Part of a digital will, passing cherished memories as a legacy.</p>
          </div>
        </div>

        <div class="capsule-item flex items-start">
          <div class="capsule-icon p-4 rounded-full">
            <i class="fas fa-users text-3xl"></i>
          </div>
          <div class="ml-6">
            <h3 class="text-xl font-semibold">Group-based</h3>
            <p class="mt-1">Accessible to specific groups, perfect for shared memories.</p>
          </div>
        </div>

        <div class="capsule-item flex items-start">
          <div class="capsule-icon p-4 rounded-full">
            <i class="fas fa-bottle-water text-3xl"></i>
          </div>
          <div class="ml-6">
            <h3 class="text-xl font-semibold">Message in a Bottle</h3>
            <p class="mt-1">A public capsule for random people in the future, like a digital time capsule.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true,
  styleUrls: ["capsules.component.scss"],
})
export class CapsulesComponent {}
