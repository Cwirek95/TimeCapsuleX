import { Component } from "@angular/core";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: "app-home-contact",
  imports: [ContactFormComponent],
  template: `
    <section class="section-contact">
      <div class="container mx-auto text-center">
        <h1 class="section-title uppercase mb-8">Contact</h1>
        <div class="contact-section w-full flex flex-col md:flex-row justify-between items-center gap-10 p-5">
          <div class="contact-left w-full md:w-1/2 flex flex-col items-center justify-center p-5">
            <h2 class="text-3xl font-semibold mb-6 text-center">Let's Talk About Your Problem</h2>
            <div class="social-icons flex justify-center gap-3 mb-4 text-2xl">
              <a href="https://github.com/Cwirek95" target="_blank"><i class="fab fa-github"></i></a>
              <a href="mailto:acwiertniak95@gmail.com"><i class="fab fa-google"></i></a>
              <a href="https://www.linkedin.com/in/andrzej-cwiertniak/" target="_blank"
                ><i class="fab fa-linkedin"></i
              ></a>
            </div>
          </div>

          <app-home-contact-form class="w-full md:w-1/2 max-w-3xl"></app-home-contact-form>
        </div>
      </div>
    </section>
  `,
  standalone: true,
  styleUrls: ["contact.component.scss"],
})
export class ContactComponent {}
