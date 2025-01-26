import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard-my-profile-change-password",
  template: `
    <div class="change-password-section">
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
  `,
  standalone: true,
  styleUrls: ["change-password.component.scss"],
})
export class ChangePasswordComponent {
  constructor() {}
}
