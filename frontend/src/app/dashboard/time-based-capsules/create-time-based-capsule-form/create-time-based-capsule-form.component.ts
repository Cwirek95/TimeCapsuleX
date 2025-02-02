import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { NgClass, NgStyle } from "@angular/common";
import { CreateTimeBasedCapsuleStatus } from "./create-time-based-capsule-status";
import { CreateTimeBasedCapsuleService } from "./create-time-based-capsule-service";

@Component({
  selector: "create-time-based-capsule-form",
  imports: [ReactiveFormsModule, NgClass, NgStyle],
  template: `
    <div class="flex justify-between">
      <form
        [formGroup]="createCapsuleForm"
        (ngSubmit)="onSubmit($event)"
        class="flex flex-col gap-5 w-full max-w-3xl"
      >
        <div class="flex flex-col md:flex-row md:gap-5 items-start">
          <div class="flex flex-col gap-2 w-full md:w-1/2">
            <p class="text-sm font-medium">Type: Time-based Capsule</p>
            <div>
              <input
                formControlName="name"
                [ngClass]="{ 'input-error': submitted && createCapsuleForm.get('name')?.invalid }"
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                required
              />
              <p
                class="mt-1 text-sm text-error"
                [ngStyle]="{ opacity: submitted && createCapsuleForm.get('name')?.invalid ? 1 : 0 }"
              >
                The field is required
              </p>
            </div>
            <div>
              <input
                formControlName="executedAt"
                [ngClass]="{ 'input-error': submitted && createCapsuleForm.get('executedAt')?.invalid }"
                type="datetime-local"
                id="executedAt"
                name="executedAt"
                required
              />
              <p
                class="mt-1 text-sm text-error"
                [ngStyle]="{ opacity: submitted && createCapsuleForm.get('executedAt')?.invalid ? 1 : 0 }"
              >
                You must specify the correct future execution date
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div>
              <textarea
                formControlName="message"
                [ngClass]="{ 'input-error': submitted && createCapsuleForm.get('message')?.invalid }"
                id="message"
                name="message"
                rows="6"
                placeholder="Your message..."
                required
              ></textarea>
              <p
                class="mt-1 text-sm text-error"
                [ngStyle]="{ opacity: submitted && createCapsuleForm.get('message')?.invalid ? 1 : 0 }"
              >
                The message cannot be empty
              </p>
            </div>
          </div>
        </div>
        <div class="flex gap-3 mt-1">
          <button type="submit" class="contact-button w-40" [disabled]="isLoading">
            @if (isLoading) {
              <div class="spinner"></div>
            } @else {
              Submit
            }
          </button>
          @if (showResult) {
            <div
              class="self-center rounded-lg py-1 result-div"
              [ngClass]="{
                'error-alert': capsuleService.sendResult() === CreateTimeBasedCapsuleStatus.Error,
                'success-alert': capsuleService.sendResult() === CreateTimeBasedCapsuleStatus.Success,
              }"
              role="alert"
            >
              <span>{{ submitResultMessage }}</span>
            </div>
          }
        </div>
      </form>
      <svg
        class="svg-background md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] hidden lg:flex xl:mr-20"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="250" cy="250" r="250" fill="#151924" />
        <image
          href="img/logo.png"
          x="100"
          y="100"
          width="300"
          height="300"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    </div>
  `,
  standalone: true,
  styleUrls: ["create-time-based-capsule-form.component.scss"],
})
export class CreateTimeBasedCapsuleFormComponent {
  createCapsuleForm: FormGroup;
  submitted = false;
  isLoading = false;
  submitResultMessage: string = "";
  showResult = false;

  constructor(
    private fb: FormBuilder,
    protected capsuleService: CreateTimeBasedCapsuleService,
  ) {
    this.createCapsuleForm = this.fb.group({
      name: ["", Validators.required],
      executedAt: ["", [Validators.required, futureDateValidator]],
      message: ["", Validators.required],
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;

    if (this.createCapsuleForm.valid) {
      this.isLoading = true;
      const { name, executedAt, message } = this.createCapsuleForm.value;
      this.capsuleService
        .sendEmail(name, executedAt, message)
        .then(() => {
          this.submitResultMessage = "The capsule was created successfully!";
        })
        .catch((error) => {
          this.submitResultMessage = "An error occurred while creating the capsule";
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
    this.createCapsuleForm.reset();
  }

  protected readonly CreateTimeBasedCapsuleStatus = CreateTimeBasedCapsuleStatus;
}

export function futureDateValidator(control: AbstractControl): ValidationErrors | null {
  const date = new Date(control.value);
  return date > new Date() ? null : { futureDate: true };
}
