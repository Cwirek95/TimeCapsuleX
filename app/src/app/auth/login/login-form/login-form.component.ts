import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { LoginUserStatus } from "./login-user-status";
import { LoginUserService } from "./login-user.service";
import { NgClass, NgStyle } from "@angular/common";
import { Router } from "@angular/router";
import { RegisterUserStatus } from "../../register/register-form/register-user-status";

@Component({
  selector: "app-auth-login-form",
  imports: [ReactiveFormsModule, NgClass, NgStyle],
  template: `
    <div class="login-section flex flex-col justify-center p-10 rounded">
      <form class="flex flex-col gap-5 w-full" [formGroup]="loginForm" (ngSubmit)="onSubmit($event)">
        <div>
          <input
            [ngClass]="{ 'input-error': submitted && loginForm.get('email')?.invalid }"
            type="text"
            name="email"
            formControlName="email"
            placeholder="Email address..."
            required
          />
          @if (submitted && loginForm.get("email")?.hasError("required")) {
            <p class="mt-1 text-sm text-error">The field is required</p>
          }

          @if (submitted && loginForm.get("email")?.hasError("email")) {
            <p class="mt-1 text-sm text-error">Please enter a valid email address</p>
          }
        </div>
        <div>
          <input
            [ngClass]="{ 'input-error': submitted && loginForm.get('password')?.invalid }"
            type="password"
            name="password"
            formControlName="password"
            placeholder="Your password..."
            required
          />
          @if (submitted && loginForm.get("password")?.hasError("required")) {
            <p class="mt-1 text-sm text-error">The field is required</p>
          }
        </div>
        <button class="contact-button w-40 self-center" [disabled]="isLoading" type="submit">
          @if (isLoading) {
            <div class="spinner"></div>
          } @else {
            Log in
          }
        </button>
        <div
          class="self-center rounded-lg py-1"
          [ngClass]="{
            'error-alert': loginUserService.sendResult() === LoginUserStatus.Error,
          }"
          [ngStyle]="{
            opacity: loginUserService.sendResult() === LoginUserStatus.Error ? 1 : 0,
          }"
          role="alert"
        >
          <span [ngStyle]="{ opacity: loginUserService.sendResult() === LoginUserStatus.Error ? 1 : 0 }">{{
            submitResultMessage
          }}</span>
        </div>
      </form>
    </div>
  `,
  standalone: true,
  styleUrls: ["login-form.component.scss"],
})
export class LoginFormComponent {
  loginForm: FormGroup;
  submitted = false;
  isLoading = false;
  submitResultMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    protected loginUserService: LoginUserService,
  ) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;

    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email, username, password } = this.loginForm.value;
      this.loginUserService
        .login(email, username, password)
        .then(() => {
          this.router.navigate(["/"]);
        })
        .catch((error) => {
          this.submitResultMessage = "Failed to log in";
        })
        .finally(() => {
          this.submitted = false;
          this.isLoading = false;
          this.resetForm();
        });
    }
  }

  resetForm(): void {
    this.loginForm.reset();
  }

  protected readonly LoginUserStatus = LoginUserStatus;
  protected readonly RegisterUserStatus = RegisterUserStatus;
}
