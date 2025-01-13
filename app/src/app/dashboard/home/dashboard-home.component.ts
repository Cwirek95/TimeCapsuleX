import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard-home",
  imports: [],
  template: `
    <section class="mt-6 mb-6 mx-8">
      <div class="stats-cards flex flex-col gap-2 sm:flex-row sm:justify-between">
        <div class="stats-card">
          <h3>Time-Based Capsules</h3>
          <p>23</p>
        </div>
        <div class="stats-card">
          <h3>Conditional Capsules</h3>
          <p>8</p>
        </div>
        <div class="stats-card">
          <h3>Inheritable Capsules</h3>
          <p>0</p>
        </div>
        <div class="stats-card">
          <h3>Group-Based Capsules</h3>
          <p>11</p>
        </div>
        <div class="stats-card">
          <h3>Message In a Bottle Capsules</h3>
          <p>9</p>
        </div>
      </div>

      <div class="activities-card mt-6">
        <h3 class="font-semibold text-center">No new activities</h3>
      </div>
    </section>
  `,
  standalone: true,
  styleUrls: ["dashboard-home.component.scss"],
})
export class DashboardHomeComponent {}
