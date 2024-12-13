import { Component } from "@angular/core";
import { ContactEmailService } from "./ContactEmailService";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgClass, NgStyle } from "@angular/common";
import { ContactEmailStatus } from "./ContactEmailStatus";

@Component({
  selector: "app-home-contact-form",
  imports: [ReactiveFormsModule, NgStyle, NgClass],
  template: `
    <div class="contact-right w-full flex flex-col items-center justify-center p-5">
      <form
        [formGroup]="contactForm"
        (ngSubmit)="onSubmit($event)"
        class="flex flex-col gap-3 w-full max-w-full md:max-w-3xl"
      >
        <div>
          <input
            formControlName="name"
            [ngClass]="{ 'input-error': submitted && contactForm.get('name')?.invalid }"
            type="text"
            id="name"
            name="name"
            placeholder="First Name..."
          />
          <p
            class="mt-1 text-sm text-error"
            [ngStyle]="{ opacity: submitted && contactForm.get('name')?.invalid ? 1 : 0 }"
          >
            The field is required
          </p>
        </div>

        <div>
          <input
            formControlName="email"
            [ngClass]="{ 'input-error': submitted && contactForm.get('email')?.invalid }"
            type="email"
            id="email"
            name="email"
            placeholder="Email address..."
          />
          <p
            class="mt-1 text-sm text-error"
            [ngStyle]="{ opacity: submitted && contactForm.get('email')?.invalid ? 1 : 0 }"
          >
            Please enter a valid email address
          </p>
        </div>

        <div>
          <textarea
            formControlName="message"
            [ngClass]="{ 'input-error': submitted && contactForm.get('message')?.invalid }"
            id="message"
            name="message"
            rows="5"
            placeholder="Your message..."
          ></textarea>
          <p
            class="mt-1 text-sm text-error"
            [ngStyle]="{ opacity: submitted && contactForm.get('message')?.invalid ? 1 : 0 }"
          >
            The message cannot be empty
          </p>
        </div>

        <!-- Submit button -->
        <div class="flex flex-col gap-3 mt-1">
          <button class="contact-button w-40 self-center" [disabled]="isLoading" type="submit">
            @if (isLoading) {
              <div class="spinner"></div>
            } @else {
              Submit
            }
          </button>
          <div
            class="self-center rounded-lg py-1"
            [ngClass]="{
              'error-alert': emailService.sendResult() === ContactEmailStatus.Error,
              'success-alert': emailService.sendResult() === ContactEmailStatus.Success,
            }"
            [ngStyle]="{
              opacity: emailService.sendResult() !== ContactEmailStatus.None ? 1 : 0,
            }"
            role="alert"
          >
            <span [ngStyle]="{ opacity: emailService.sendResult() !== ContactEmailStatus.None ? 1 : 0 }">{{
              submitResultMessage
            }}</span>
          </div>
        </div>
      </form>
    </div>
  `,
  standalone: true,
  styleUrls: ["contact-form-component.scss"],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitted = false;
  isLoading = false;
  submitResultMessage: string = "";

  constructor(
    private fb: FormBuilder,
    protected emailService: ContactEmailService,
  ) {
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
      this.isLoading = true;
      const { name, email, message } = this.contactForm.value;
      this.emailService
        .sendEmail(name, email, message)
        .then(() => {
          this.submitResultMessage = "The message was sent successfully!";
        })
        .catch((error) => {
          this.submitResultMessage = "An error occurred while sending the message";
        })
        .finally(() => {
          this.submitted = false;
          this.isLoading = false;
          this.resetForm();
        });
    }
  }

  resetForm(): void {
    this.contactForm.reset();
  }

  protected readonly ContactEmailStatus = ContactEmailStatus;
}
