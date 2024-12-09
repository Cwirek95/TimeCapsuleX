import { Component, inject } from "@angular/core";
import { ContactEmailService } from "./ContactEmailService";
import { ContactEmailStatus } from "./ContactEmailStatus";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-home-contact-form",
  imports: [ReactiveFormsModule],
  template: `
    <div class="contact-right w-full flex flex-col items-center justify-center p-5">
      <form
        [formGroup]="contactForm"
        (ngSubmit)="onSubmit($event)"
        class="flex flex-col gap-5 w-full max-w-full md:max-w-3xl"
      >
        <!-- Name field -->
        <input
          formControlName="name"
          type="text"
          id="name"
          name="name"
          placeholder="First Name..."
          class="input-field"
        />
        <!-- Name validation error message -->
        @if (contactForm.get("name")?.invalid && contactForm.get("name")?.touched) {
          <div class="validation-message error">Name is required.</div>
        }

        <!-- Email field -->
        <input
          formControlName="email"
          type="email"
          id="email"
          name="email"
          placeholder="Email address..."
          class="input-field"
        />
        <!-- Email validation error message -->
        @if (contactForm.get("email")?.invalid && contactForm.get("email")?.touched) {
          <div class="validation-message error">Please enter a valid email.</div>
        }

        <!-- Message field -->
        <textarea
          formControlName="message"
          id="message"
          name="message"
          rows="5"
          placeholder="Your message..."
          class="input-field"
        ></textarea>
        <!-- Message validation error message -->
        @if (contactForm.get("message")?.invalid && contactForm.get("message")?.touched) {
          <div class="validation-message error">Message is required.</div>
        }

        <!-- Submit button -->
        <button
          class="contact-button w-40 self-center"
          type="submit"
          [disabled]="contactForm.invalid || emailService.isSending()"
        >
          Submit
        </button>
      </form>

      <!-- Success or error messages using @if -->
      @if (emailService.sendResult() === ContactEmailStatus.Success) {
        <div class="p-4 mt-4 text-sm text-green-800 rounded-lg bg-green-100 opacity-60" role="alert">
          <span class="font-medium">Your message has been sent successfully!</span>
        </div>
      }

      @if (emailService.sendResult() === ContactEmailStatus.Error) {
        <div class="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-100 opacity-60" role="alert">
          <span class="font-medium">Failed to send your message. Please try again.</span>
        </div>
      }
    </div>
  `,
  standalone: true,
  styleUrls: ["contact-form-component.scss"],
})
export class ContactFormComponent {
  emailService = inject(ContactEmailService);

  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required],
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;

    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      this.emailService
        .sendEmail(name, email, message)
        .then(() => {
          this.resetForm();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  resetForm(): void {
    this.contactForm.reset();
    this.submitted = false;
  }

  protected readonly ContactEmailStatus = ContactEmailStatus;
}
