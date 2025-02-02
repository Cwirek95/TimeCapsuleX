import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgClass, NgStyle } from "@angular/common";
import { ChangePasswordStatus } from "./change-password-status";
import { ChangePasswordService } from "./change-password-service";

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
        <div class="flex gap-3 mt-1">
          <button type="submit" class="change-password-button w-40" [disabled]="isLoading">
            @if (isLoading) {
              <div class="spinner"></div>
            } @else {
              Submit
            }
          </button>
          @if (showResult) {
            <div
              class="self-center rounded-lg py-1"
              [ngClass]="{
                'error-alert': changePasswordService.changeResult() === ChangePasswordStatus.Error,
                'success-alert': changePasswordService.changeResult() === ChangePasswordStatus.Success,
              }"
              [ngStyle]="{
                opacity: changePasswordService.changeResult() !== ChangePasswordStatus.None ? 1 : 0,
              }"
              role="alert"
            >
              <span>{{ submitResultMessage }}</span>
            </div>
          }
        </div>
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
  isLoading = false;
  submitResultMessage: string = "";
  showResult = false;

  constructor(
    private fb: FormBuilder,
    protected changePasswordService: ChangePasswordService,
  ) {
    this.changePasswordForm = this.fb.group(
      {
        currentPassword: ["", Validators.required],
        newPassword: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", []],
      },
      { validators: this.passwordMatchValidator },
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;

    if (this.changePasswordForm.valid) {
      this.isLoading = true;
      const { currentPassword, newPassword } = this.changePasswordForm.value;
      this.changePasswordService
        .changePassword(currentPassword, newPassword)
        .then(() => {
          this.submitResultMessage = "Password changed successfully!";
        })
        .catch((error) => {
          this.submitResultMessage = "An error occurred while changing the password";
        })
        .finally(() => {
          this.submitted = false;
          this.isLoading = false;
          this.showResult = true;
          this.resetForm();
          setTimeout(() => {
            this.showResult = false;
          }, 5000);
        });
    }
  }

  resetForm(): void {
    this.changePasswordForm.reset();
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const newPassword = group.get("newPassword")?.value;
    const confirmPassword = group.get("confirmPassword")?.value;

    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  protected readonly ChangePasswordStatus = ChangePasswordStatus;
}
