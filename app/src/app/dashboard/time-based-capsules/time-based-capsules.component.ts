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
import { ContactEmailService } from "../../home/contact/contact-form/contact-email.service";

@Component({
  selector: "app-time-based-capsules",
  imports: [ReactiveFormsModule, NgClass, NgStyle],
  template: `
    <section class="mt-6 mb-6 mx-8">
      <div class="capsules-card mt-6">
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
            <button type="submit" class="contact-button w-40" [disabled]="isLoading">
              @if (isLoading) {
                <div class="spinner"></div>
              } @else {
                Submit
              }
            </button>
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
      </div>
      <div class="shadow rounded-lg overflow-x-auto mt-6">
        <table class="w-full table-auto">
          <thead class="">
            <tr>
              <th class="px-4 py-2 text-left text-sm text-gray-600">Type</th>
              <th class="px-4 py-2 text-left text-sm text-gray-600">Created at</th>
              <th class="px-4 py-2 text-left text-sm text-gray-600">Name</th>
              <th class="px-4 py-2 text-left text-sm text-gray-600">Status</th>
              <th class="px-4 py-2 text-left text-sm text-gray-600">Time remaining until opening</th>
              <th class="px-4 py-2 text-left text-sm text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="px-4 py-2">Time-based</td>
              <td class="px-4 py-2">2024-12-19 12:50</td>
              <td class="px-4 py-2">Capsule name 2</td>
              <td class="px-4 py-2">
                <span class="bg-gray-300 text-black-700 px-2 py-1 rounded-full text-xs">Waiting</span>
              </td>
              <td class="px-4 py-2">127H 31M 19S</td>
              <td class="px-4 py-2">
                <button type="button" class="check-it-table-button">Check it</button>
              </td>
            </tr>
            <tr class="">
              <td class="px-4 py-2">Time-based</td>
              <td class="px-4 py-2">2024-11-01 22:19</td>
              <td class="px-4 py-2">Capsule name 1</td>
              <td class="px-4 py-2">
                <span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Opened</span>
              </td>
              <td class="px-4 py-2">---</td>
              <td class="px-4 py-2">
                <button type="button" class="check-it-table-button">Check it</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  standalone: true,
  styleUrls: ["time-based-capsules.component.scss"],
})
export class TimeBasedCapsulesComponent {
  createCapsuleForm: FormGroup;
  submitted = false;
  isLoading = false;
  submitResultMessage: string = "";

  constructor(
    private fb: FormBuilder,
    protected emailService: ContactEmailService,
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
  }

  resetForm(): void {
    this.createCapsuleForm.reset();
  }
}

export function futureDateValidator(control: AbstractControl): ValidationErrors | null {
  const date = new Date(control.value);
  return date > new Date() ? null : { futureDate: true };
}
