import { Component } from "@angular/core";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-auth-login",
  imports: [LoginFormComponent, RouterLink],
  template: `
    <div class="main-content">
      <div class="flex h-screen flex-col md:flex-row">
        <div
          class="login-left-side w-full md:w-1/2 flex items-center justify-center mx-auto relative p-5 md:p-10"
        >
          <button routerLink="/" class="back-button absolute top-4 left-4 md:left-5 md:top-5">
            <i class="fa fa-arrow-left"></i>
          </button>
          <div class="flex flex-col gap-10 w-full">
            <h2 class="text-lg md:text-2xl font-bold uppercase text-center">Log in to dashboard</h2>

            <app-auth-login-form class="w-full md:w-5/5 xl:w-3/4 self-center"></app-auth-login-form>
          </div>
        </div>

        <div
          class="w-full md:w-1/2 flex flex-col gap-20 items-center justify-center sm:justify-around p-8 h-full"
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
          <div class="text-center">
            <p class="mb-4 text-lg md:text-2xl font-semibold">
              New here? <a routerLink="/register" class="text-third-color underline">Join now</a>
            </p>
            <p class="mb-4">Or log in with:</p>
            <div class="social-icons flex justify-center gap-3 mb-4 text-lg md:text-2xl">
              <a href="#"><i class="fab fa-google"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
          <footer class="mt-auto text-center text-lg font-semibold">Copyright &copy; 2024</footer>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  styleUrls: ["login.component.scss"],
})
export class LoginComponent {}
