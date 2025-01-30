import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgClass, NgStyle } from "@angular/common";

@Component({
  selector: "app-dashboard-my-profile-change-password",
  template: `
    <div class="change-password-section">
      <h1 class="text-xl font-bold mb-10">Change your password</h1>
      <form [formGroup]="changePasswordForm" (ngSubmit)="onSubmit($event)">
        <div class="mb-4">
          <label class="block text-xs mb-1" for="current-password">Current password:</label>
          <input
            type="password"
            id="current-password"
            formControlName="currentPassword"
            [ngClass]="{ 'input-error': submitted && changePasswordForm.get('currentPassword')?.invalid }"
            required
          />
          <p
            class="mt-1 text-sm text-error"
            [ngStyle]="{ opacity: submitted && changePasswordForm.get('currentPassword')?.invalid ? 1 : 0 }"
          >
            The field is required
          </p>
        </div>
        <div class="mb-4">
          <label class="block text-xs mb-1" for="new-password">New password:</label>
          <input
            type="password"
            id="new-password"
            formControlName="newPassword"
            [ngClass]="{ 'input-error': submitted && changePasswordForm.get('newPassword')?.invalid }"
            required
          />
          <p
            class="mt-1 text-sm text-error"
            [ngStyle]="{ opacity: submitted && changePasswordForm.get('newPassword')?.invalid ? 1 : 0 }"
          >
            The password must contain at least 8 characters
          </p>
        </div>
        <div class="mb-4">
          <label class="block text-xs mb-1" for="confirm-password">Confirm new password:</label>
          <input
            type="password"
            id="confirm-password"
            formControlName="confirmPassword"
            [ngClass]="{
              'input-error':
                (submitted && changePasswordForm.get('confirmPassword')?.invalid) ||
                changePasswordForm.errors?.['passwordMismatch'],
            }"
            required
          />
          <p
            class="mt-1 text-sm text-error"
            [ngStyle]="{
              opacity:
                submitted &&
                (changePasswordForm.get('confirmPassword')?.invalid ||
                  changePasswordForm.errors?.['passwordMismatch'])
                  ? 1
                  : 0,
            }"
          >
            Passwords must be identical
          </p>
        </div>
        <button type="submit" class="change-password-button w-40 self-center">Submit</button>
      </form>
    </div>
  `,
  standalone: true,
  styleUrls: ["change-password.component.scss"],
  imports: [NgClass, ReactiveFormsModule, NgStyle],
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group(
      {
        currentPassword: ["", Validators.required],
        newPassword: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required],
      },
      { validators: this.passwordMatchValidator },
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;

    if (this.changePasswordForm.valid) {
      // Handle form submission
    }
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const newPassword = group.get("newPassword")?.value;
    const confirmPassword = group.get("confirmPassword")?.value;

    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }
}
