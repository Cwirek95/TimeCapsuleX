import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: "app-home",
  imports: [HeaderComponent],
  template: `
    <div class="main-content">
      <app-home-header></app-home-header>
      <main>
        <div class="mobile-header md:hidden text-center mt-4 mx-4 self-center fade-in transparent-card">
          <h1 class="text-3xl xl:text-5xl font-bold">Timeless Storage for Your Digital Legacy</h1>
          <button class="check-it-button mt-8">Let's check it out</button>
        </div>
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
                <p class="mt-1">
                  A public capsule for random people in the future, like a digital time capsule.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="section-contact">
          <div class="container mx-auto text-center">
            <h1 class="section-title uppercase mb-8">Contact</h1>
            <div class="contact-section flex flex-col md:flex-row gap-10 p-5">
              <div class="contact-left w-full md:w-1/2 flex flex-col items-center justify-center p-5">
                <h2 class="text-3xl font-semibold mb-6 text-center">Let's Talk About Your Problem</h2>
                <div class="social-icons flex justify-center gap-3 mb-4 text-2xl">
                  <a href="#"><i class="fab fa-github"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
                <p class="text-center text-lg">
                  Email:
                  <a href="mailto:acwiertniak95@gmail.com">acwiertniak95&#64;gmail.com</a>
                </p>
              </div>

              <div class="contact-right w-full md:w-1/2 flex flex-col items-center justify-center p-5">
                <form class="flex flex-col gap-5 w-full max-w-md">
                  <input type="text" id="name" name="name" placeholder="First Name..." required />
                  <input type="email" id="email" name="email" placeholder="Email address..." required />
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your message..."
                    required
                  ></textarea>
                  <button class="contact-button w-40 self-center" type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
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
