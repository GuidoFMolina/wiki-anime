import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./pages/header/header.component";
import { BodyComponent } from "./pages/body/body.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import after core modules
import { PersonajesServiceService } from './services/personajes-service.service';
import { FormViewComponent } from './pages/forms/form-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, HeaderComponent, BodyComponent, FooterComponent,FormViewComponent, ReactiveFormsModule, HttpClientModule] // Order with HttpClientModule.withFetch() for SSR
})
export class AppComponent implements OnInit {
  title = 'wiki-anime';
  isDarkMode = false;
  data: any[] = [];

  constructor(public characterService: PersonajesServiceService) {}

  ngOnInit() {
    this.personajes();
  }

  personajes() {
    this.characterService.getCharacteres()
      .subscribe((resp: any) => {
        this.data = resp;
        console.log(this.data);
      });
  }
}