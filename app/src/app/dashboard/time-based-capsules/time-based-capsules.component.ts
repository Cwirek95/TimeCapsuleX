import { Component } from "@angular/core";
import { CreateTimeBasedCapsuleFormComponent } from "./create-time-based-capsule-form/create-time-based-capsule-form.component";

@Component({
  selector: "app-time-based-capsules",
  imports: [CreateTimeBasedCapsuleFormComponent],
  template: `
    <section class="mt-6 mb-6 mx-8">
      <div class="capsules-card mt-6">
        <create-time-based-capsule-form></create-time-based-capsule-form>
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
export class TimeBasedCapsulesComponent {}
