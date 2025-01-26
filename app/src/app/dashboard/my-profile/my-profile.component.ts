import { Component } from "@angular/core";
import { ChangePasswordComponent } from "./change-password/change-password.component";

@Component({
  selector: "app-dashboard-my-profile",
  imports: [ChangePasswordComponent],
  template: `
    <section class="mt-6 mb-6 mx-8">
      <div class="profile-card mt-6">
        <div class="flex flex-col gap-8 lg:flex-row">
          <div class="flex-1 p-6 pr-20">
            <h1 class="text-xl font-bold mb-8">Account data</h1>
            <div class="mb-4">
              <label class="block text-xs mb-1">Email:</label>
              <p class="text-base font-medium">user&#64;example.com</p>
              <hr class="mt-2" />
            </div>
            <div class="mb-4">
              <label class="block text-xs mb-1">Username:</label>
              <p class="text-base font-medium">User123</p>
              <hr class="mt-2" />
            </div>
            <div class="mb-4">
              <label class="block text-xs mb-1">Account created on:</label>
              <p class="text-base font-medium">2024-01-01</p>
              <hr class="mt-2" />
            </div>
            <div class="mb-4">
              <label class="block text-xs mb-1">The first capsule created on:</label>
              <p class="text-base font-medium">2024-02-01</p>
              <hr class="mt-2" />
            </div>
            <div>
              <label class="block text-xs mb-1">The last capsule created on:</label>
              <p class="text-base font-medium">2024-03-01</p>
              <hr class="mt-2" />
            </div>
          </div>
          <app-dashboard-my-profile-change-password
            class="flex-1 p-6"
          ></app-dashboard-my-profile-change-password>
        </div>
      </div>
    </section>
  `,
  standalone: true,
  styleUrls: ["my-profile.component.scss"],
})
export class MyProfileComponent {}
