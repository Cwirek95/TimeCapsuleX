import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RegisterUserService } from "./register-user.service";
import { RegisterUserStatus } from "./register-user-status";
import { NgClass, NgStyle } from "@angular/common";
import { ContactEmailStatus } from "../../../home/contact/contact-form/contact-email-status";

@Component({
  selector: "app-auth-register-form",
  imports: [ReactiveFormsModule, NgClass, NgStyle],
  template: `
    <div class="register-section flex flex-col justify-center p-10 rounded">
      <form class="flex flex-col gap-5 w-full" [formGroup]="registerForm" (ngSubmit)="onSubmit($event)">
        <div>
          <input
            class="md:text-sm"
            [ngClass]="{ 'input-error': submitted && registerForm.get('email')?.invalid }"
            type="text"
            name="email"
            formControlName="email"
            placeholder="Email address..."
            required
          />
          @if (submitted && registerForm.get("email")?.hasError("required")) {
            <p class="mt-1 text-sm text-error">The field is required</p>
          }

          @if (submitted && registerForm.get("email")?.hasError("email")) {
            <p class="mt-1 text-sm text-error">Please enter a valid email address</p>
          }

          @if (submitted && registerForm.get("email")?.hasError("maxlength")) {
            <p class="mt-1 text-sm text-error">The field must contain a maximum of 255 characters</p>
          }
        </div>
        <div>
          <input
            class="md:text-sm"
            [ngClass]="{ 'input-error': submitted && registerForm.get('username')?.invalid }"
            type="text"
            name="username"
            formControlName="username"
            placeholder="Username..."
            required
          />
          @if (submitted && registerForm.get("username")?.hasError("required")) {
            <p class="mt-1 text-sm text-error">The field is required</p>
          }

          @if (submitted && registerForm.get("username")?.hasError("minlength")) {
            <p class="mt-1 text-sm text-error">The field must contain at least 3 characters</p>
          }

          @if (submitted && registerForm.get("username")?.hasError("maxlength")) {
            <p class="mt-1 text-sm text-error">The field must contain a maximum of 64 characters</p>
          }
        </div>
        <div>
          <input
            class="md:text-sm"
            [ngClass]="{ 'input-error': submitted && registerForm.get('password')?.invalid }"
            type="password"
            name="password"
            formControlName="password"
            placeholder="Your password..."
            required
          />

          @if (submitted && registerForm.get("password")?.hasError("required")) {
            <p class="mt-1 text-sm text-error">The field is required</p>
          }

          @if (submitted && registerForm.get("password")?.hasError("minlength")) {
            <p class="mt-1 text-sm text-error">The password must contain at least 8 characters</p>
          }
        </div>
        <div>
          <input
            class="md:text-sm"
            [ngClass]="{
              'input-error': submitted && registerForm.hasError('passwordMismatch'),
            }"
            type="password"
            formControlName="confirmPassword"
            placeholder="Confirm password..."
          />

          @if (submitted && registerForm.hasError("passwordMismatch")) {
            <p class="mt-1 text-sm text-error">Passwords must be identical</p>
          }
        </div>
        <div>
          <input
            type="checkbox"
            name="acceptTerms"
            formControlName="acceptTerms"
            class="h-4 w-4 rounded"
            [ngClass]="{ 'input-error': submitted && registerForm.get('acceptTerms')?.invalid }"
          />
          <label class="ms-2">
            <span>I accept the <a href="#" class="text-third-color underline">terms and conditions</a></span>
          </label>
        </div>
        <div class="flex flex-col gap-3 mt-1">
          <button class="contact-button w-40 self-center" [disabled]="isLoading" type="submit">
            @if (isLoading) {
              <div class="spinner"></div>
            } @else {
              Create
            }
          </button>
          <div
            class="self-center rounded-lg py-1"
            [ngClass]="{
              'error-alert': registerUserService.sendResult() === RegisterUserStatus.Error,
              'success-alert': registerUserService.sendResult() === RegisterUserStatus.Success,
            }"
            [ngStyle]="{
              opacity: registerUserService.sendResult() !== RegisterUserStatus.None ? 1 : 0,
            }"
            role="alert"
          >
            <span
              [ngStyle]="{ opacity: registerUserService.sendResult() !== RegisterUserStatus.None ? 1 : 0 }"
              >{{ submitResultMessage }}</span
            >
          </div>
        </div>
      </form>
    </div>
  `,
  standalone: true,
  styleUrls: ["register-form.component.scss"],
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  submitted = false;
  isLoading = false;
  submitResultMessage: string = "";

  constructor(
    private fb: FormBuilder,
    protected registerUserService: RegisterUserService,
  ) {
    this.registerForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email, Validators.maxLength(255)]],
        username: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", []],
        acceptTerms: [false, [Validators.requiredTrue]],
      },
      { validators: this.passwordMatchValidator },
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;

    if (this.registerForm.valid) {
      this.isLoading = true;
      const { email, username, password } = this.registerForm.value;
      this.registerUserService
        .register(email, username, password)
        .then(() => {
          this.submitResultMessage =
            "The account has been created successfully! An activation link has been sent to the email address you provided";
        })
        .catch((error) => {
          this.submitResultMessage = "An error occurred while creating the account";
        })
        .finally(() => {
          this.submitted = false;
          this.isLoading = false;
          this.resetForm();
        });
    }
  }

  resetForm(): void {
    this.registerForm.reset();
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const password = group.get("password")?.value;
    const confirmPassword = group.get("confirmPassword")?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  protected readonly RegisterUserStatus = RegisterUserStatus;
  protected readonly ContactEmailStatus = ContactEmailStatus;
}
