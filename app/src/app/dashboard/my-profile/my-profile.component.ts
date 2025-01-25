import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-dashboard-my-profile",
  imports: [RouterOutlet, RouterLink, NgOptimizedImage, RouterLinkActive],
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

          <div class="change-password-section flex-1 p-6">
            <h1 class="text-xl font-bold mb-10">Change your password</h1>
            <form>
              <div class="mb-4">
                <label class="block text-xs mb-1" for="current-password">Current password:</label>
                <input type="password" id="current-password" />
              </div>
              <div class="mb-4">
                <label class="block text-xs mb-1" for="new-password">New password:</label>
                <input type="password" id="new-password" />
              </div>
              <div class="mb-4">
                <label class="block text-xs mb-1" for="confirm-password">Confirm new password:</label>
                <input type="password" id="confirm-password" />
              </div>
              <button type="submit" class="change-password-button w-40 self-center">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true,
  styleUrls: ["my-profile.component.scss"],
})
export class MyProfileComponent {}
