import { Component } from "@angular/core";

@Component({
  selector: "app-home-footer",
  imports: [],
  template: `
    <footer class="footer flex justify-between">
      <div></div>
      <span class="text-lg font-semibold self-center">Copyright &copy; 2024</span>
      <button class="top-button self-center mr-2"><i class="fa fa-arrow-up"></i></button>
    </footer>
  `,
  standalone: true,
  styleUrls: ["footer.component.scss"],
})
export class FooterComponent {}
