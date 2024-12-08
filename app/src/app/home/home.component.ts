import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { CapsulesComponent } from "./capsules/capsules.component";

@Component({
  selector: "app-home",
  imports: [HeaderComponent, HowItWorksComponent, CapsulesComponent],
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
