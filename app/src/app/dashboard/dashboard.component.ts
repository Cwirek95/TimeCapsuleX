import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-dashboard",
  imports: [RouterOutlet, RouterLink, NgOptimizedImage, RouterLinkActive],
  template: `
    <div class="main-content">
      <div class="flex flex-col md:flex-row h-screen">
        <aside class="sidebar w-full md:w-80 flex flex-col items-center">
          <div class="flex mt-6 mb-12">
            <img
              ngSrc="/img/logo-mobile-text.png"
              alt="TimeCapsuleX"
              class="w-48"
              height="132"
              width="1033"
            />
          </div>
          <nav class="mb-8">
            <ul class="flex flex-col">
              <li routerLinkActive="nav-active">
                <a routerLink="/dashboard" class="flex items-center gap-2 p-2">
                  <i class="fas fa-chart-line"></i>Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center gap-2 p-2">
                  <i class="fas fa-clock"></i>Time-based Capsules
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center gap-2 p-2">
                  <i class="fas fa-flag-checkered"></i>Conditional Capsules
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center gap-2 p-2">
                  <i class="fas fa-infinity"></i>Inheritable Capsules
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center gap-2 p-2">
                  <i class="fas fa-users"></i>Group-based Capsules
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center gap-2 p-2 rounded">
                  <i class="fas fa-bottle-water"></i>Message in a Bottle Capsules
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main class="flex-grow">
          <header class="dashboard-header flex justify-center md:justify-between">
            <div class="hidden md:flex items-center ml-5 gap-4">
              <i class="fa fa-arrow-right"></i>
              <span class="uppercase font-semibold">Dashboard</span>
            </div>
            <div class="flex mr-5 gap-3 items-center">
              <button type="button" class="mr-4 uppercase wallet-button">
                <i class="fa fa-wallet mr-1"></i> My Wallet
              </button>
              <img src="https://via.placeholder.com/40" alt="User Avatar" class="rounded-full" />
              <div class="flex flex-col mr-6 mt-1 header-user">
                <span class="text-md font-semibold">Cwirek95</span>
                <a href="#" class="underline hover:opacity-80">My profile</a>
              </div>
              <div class="mr-2 hover:opacity-80 cursor-pointer">
                <i class="fa fa-sign-out logout-icon"></i>
              </div>
            </div>
          </header>

          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  standalone: true,
  styleUrls: ["dashboard.component.scss"],
})
export class DashboardComponent {}
