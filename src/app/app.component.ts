import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/header/header.component";
import { BodyComponent } from "./pages/body/body.component";
import { FooterComponent } from "./pages/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, BodyComponent, FooterComponent]
})
export class AppComponent {
  title = 'wiki-anime';
  isDarkMode = false;

  
}
