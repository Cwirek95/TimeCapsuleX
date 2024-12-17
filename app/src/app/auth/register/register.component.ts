import { Component } from "@angular/core";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-auth-register",
  imports: [RegisterFormComponent, RouterLink],
  template: `
    <div class="main-content">
      <div class="flex h-screen flex-col lg:flex-row">
        <div
          class="w-full lg:w-1/2 register-left-side flex items-center justify-center mx-auto relative p-5 md:p-10"
        >
          <button routerLink="/" class="back-button absolute top-4 left-4 md:left-5 md:top-5">
            <i class="fa fa-arrow-left"></i>
          </button>
          <div class="flex flex-col gap-10 w-full">
            <h2 class="text-lg md:text-2xl font-bold uppercase text-center">Create New Account</h2>

            <app-auth-register-form class="w-full md:w-4/5 xl:w-3/4 self-center"></app-auth-register-form>
          </div>
        </div>

        <div
          class="w-full lg:w-1/2 bg-main-color flex flex-col gap-10 items-center justify-center sm:justify-around p-8 h-full"
        >
          <svg
            class="svg-background xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] sm:w-[200px] sm:h-[200px] hidden md:flex"
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
          <p class="mb-4 mt-5 md:mt-40 text-lg md:text-2xl font-semibold">
            Already have an account? <a routerLink="/login" class="text-third-color underline">Log in</a>
          </p>
          <footer class="mt-auto text-center text-lg font-semibold">Copyright &copy; 2024</footer>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  styleUrls: ["register.component.scss"],
})
export class RegisterComponent {}
