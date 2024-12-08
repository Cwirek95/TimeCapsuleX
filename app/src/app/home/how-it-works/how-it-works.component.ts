import { Component } from "@angular/core";

@Component({
  selector: "app-home-how-it-works",
  imports: [],
  template: `
    <section class="section-how-it-works">
      <div class="container mx-auto text-center mb-8">
        <h1 class="section-title uppercase">How It Works</h1>
      </div>
      <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div class="step-card">
          <span class="step-number">1</span>
          <i class="fas fa-user-plus step-icon"></i>
          <h3 class="step-title">Sign Up</h3>
          <p class="step-description">Create an account and connect Metamask wallet</p>
        </div>
        <div class="step-card">
          <span class="step-number">2</span>
          <i class="fas fa-cloud-upload-alt step-icon"></i>
          <h3 class="step-title">Upload Your Memories</h3>
          <p class="step-description">Add photos, videos or text messages to your capsule</p>
        </div>
        <div class="step-card">
          <span class="step-number">3</span>
          <i class="fas fa-calendar-alt step-icon"></i>
          <h3 class="step-title">Set Unlock Conditions</h3>
          <p class="step-description">Set the conditions for when the capsule should be opened</p>
        </div>
        <div class="step-card">
          <span class="step-number">4</span>
          <i class="fas fa-tasks step-icon"></i>
          <h3 class="step-title">Monitor and Manage</h3>
          <p class="step-description">You can view all your active capsules and check the statuses</p>
        </div>
        <div class="step-card">
          <span class="step-number">5</span>
          <i class="fas fa-unlock-alt step-icon"></i>
          <h3 class="step-title">Open and Reveal</h3>
          <p class="step-description">
            When the conditions for opening a capsule are met, you'll receive a notification
          </p>
        </div>
        <div class="step-card">
          <span class="step-number">6</span>
          <i class="fas fa-globe step-icon"></i>
          <h3 class="step-title">Explore and Discover</h3>
          <p class="step-description">Browse public capsules shared by others</p>
        </div>
      </div>
    </section>
  `,
  standalone: true,
  styleUrls: ["how-it-works.component.scss"],
})
export class HowItWorksComponent {}
