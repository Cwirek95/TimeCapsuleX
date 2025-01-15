import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardHomeComponent } from "./dashboard/home/dashboard-home.component";
import { TimeBasedCapsulesComponent } from "./dashboard/time-based-capsules/time-based-capsules.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: DashboardHomeComponent },
      { path: "time-based-capsules", component: TimeBasedCapsulesComponent },
    ],
  },
];
